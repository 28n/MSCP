import { MetaTags, useMutation } from '@redwoodjs/web'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
  SelectField,
  RangeField,
  useForm,
} from '@redwoodjs/forms'
import { useState, useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { toast } from '@redwoodjs/web/dist/toast'
import AdminTraineeUsersCell from 'src/components/AdminTraineeUsersCell'
import LastTraineeReviewCell from 'src/components/LastTraineeReviewCell'

const CREATE_TRAINEEREVIEW = gql`
  mutation CreateTraineeReview($input: CreateTraineeReviewInput!) {
    createTraineeReview(input: $input) {
      id
    }
  }
`

const TraineereviewPage = () => {
  const formMethods = useForm()
  const { currentUser } = useAuth()
  const [overallRating, setoverallRating] = useState(1)
  const [rulesRating, setrulesRating] = useState(1)
  const [communicationRating, setcommunicationRating] = useState(1)
  const [commentRating, setcommentRating] = useState(1)

  const [create, { loading, error }] = useMutation(CREATE_TRAINEEREVIEW)

  const onSubmit = (data) => {
    let obj = {
      userName: data.userName,
      overallRating: parseInt(data.overallRating),
      rulesRating: parseInt(data.rulesRating),
      communicationRating: parseInt(data.communicationRating),
      commentRating: parseInt(data.commentRating),
      creator: currentUser.email,
      review: data.review,
    }
    if (data.review.length === 0) {
      obj.review = 'SYSTEM: No review given'
    }
    try {
      create({ variables: { input: obj } })
      toast.success('Bewertung erstellt.')
      formMethods.reset()
    } catch (error) {
      toast.error(
        'Fehler beim Erstellen der Bewertung. Probiere es später erneut.'
      )
    }
  }
  return (
    <>
      <MetaTags title="Traineereview" description="Traineereview page" />

      <h1>Probebewertung</h1>
      <h2>
        Solltest du ein Probe-Mitglied betreut haben, so gib bitte hier ein
        Bewertung ab.
      </h2>
      <br />
      <div className="form-wrapper">
        <Form formMethods={formMethods} onSubmit={onSubmit}>
          <FormError />
          <Label name="userName">Probemitglied wählen</Label>
          <SelectField name="userName">
            <AdminTraineeUsersCell />
          </SelectField>
          <Label name="overallRating">
            Bewerte das allgemeine Verhalten des Probe-Mitglieds von 1 bis 10
          </Label>
          <RangeField
            name="overallRating"
            min={1}
            max={10}
            onChange={(e) => setoverallRating(e.target.value)}
            defaultValue={overallRating}
          />
          <span className="text-center">{overallRating}</span>
          <Label name="rulesRating">
            Bewerte die Regelkenntnisse des Probemitglieds von 1 bis 10
          </Label>
          <RangeField
            name="rulesRating"
            min={1}
            max={10}
            onChange={(e) => {
              setrulesRating(e.target.value)
            }}
            defaultValue={rulesRating}
          />
          <span className="text-center">{rulesRating}</span>
          <Label name="communicationRating">
            Bewerte die Kommunikation des Probe-Mitglieds von 1 bis 10
          </Label>
          <RangeField
            name="communicationRating"
            min={1}
            max={10}
            onChange={(e) => {
              setcommunicationRating(e.target.value)
            }}
            defaultValue={communicationRating}
          />
          <span className="text-center">{communicationRating}</span>
          <Label name="commentRating">
            Bewerte das geschriebene ACP-Kommentar des Probe-Mitglieds
          </Label>
          <RangeField
            name="commentRating"
            min={1}
            max={10}
            onChange={(e) => {
              setcommentRating(e.target.value)
            }}
            defaultValue={commentRating}
          />
          <span className="text-center">{commentRating}</span>
          <Label name="review">Fasse kurz deine Bewertung zusammen</Label>
          <TextAreaField name="review" />
          <hr />
          <Submit disabled={loading}>Bewertung absenden</Submit>
        </Form>
      </div>
      <div className="c">
        <LastTraineeReviewCell creator={currentUser.email} />
      </div>
    </>
  )
}

export default TraineereviewPage
