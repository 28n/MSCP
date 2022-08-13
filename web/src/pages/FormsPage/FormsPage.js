import { MetaTags, useMutation } from '@redwoodjs/web'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
  SelectField,
  DatetimeLocalField,
  useForm,
  NumberField,
  RangeField,
  DateField,
} from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'
import AdminTraineeUsersCell from 'src/components/AdminTraineeUsersCell'
import { useState, useRef, } from 'react'
import { useAuth } from '@redwoodjs/auth'

const CREATE_VACATIONREQUEST_MUTATION = gql`
  mutation CreateVacationRequestMutation($input: CreateVacationRequestInput!) {
    createVacationRequest(input: $input) {
      id
    }
  }
`

const CREATE_TRAINEEREVIEW_MUTATION = gql`
  mutation CreateTraineeReviewMutation($input: CreateTraineeReviewInput!) {
    createTraineeReview(input: $input) {
      id
    }
  }
`

const CREATE_DISMISSEDCASE_MUTATION = gql`
  mutation CreateDismissedCaseMutation($input: CreateDismissedCaseInput!) {
    createDismissedCase(input: $input) {
      id
    }
  }
`

const CREATE_MEETINGSIGNOFF_MUTATION = gql`
  mutation CreateMeetingSignOffMutation($input: CreateMeetingSignOffInput!) {
    createMeetingSignOff(input: $input) {
      id
    }
  }
`

const FormsPage = () => {
  const { currentUser, hasRole, } = useAuth()
  /* useMutation Hooks */
  const [createVacationRequest] = useMutation(
    CREATE_VACATIONREQUEST_MUTATION,
    {
      onCompleted: () => {
        toast.success('Urlaubsantrag versendet.')
        vacreq.reset()
      },
      onError: (error) => {
        console.log(error)
        toast.error(error.message)
      },
    }
  )
  const [createTraineeReview] = useMutation(
    CREATE_TRAINEEREVIEW_MUTATION,
    {
      onCompleted: () => {
        treview.reset()
        setoverallRating(0)
        setrulesRating(0)
        setcommunicationRating(0)
        setcommentRating(0)
        toast.success('Probebewertung versendet.')
      },
      onError: (error) => {
        console.log(error)
        toast.error(error.message)
      },
    }
  )

  const [createDismissedCase] = useMutation(
    CREATE_DISMISSEDCASE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Fall dismissed.')
        dcase.reset()
      },
      onError: (error) => {
        console.log(error)
        toast.error(error.message)
      },
    }
  )

  const [createMeetingSignOff] = useMutation(
    CREATE_MEETINGSIGNOFF_MUTATION,
    {
      onCompleted: () => {
        toast.success('Abmeldung versendet.')
        msignoff.reset()
      },
      onError: (error) => {
        console.log(error)
        toast.error(error.message)
      },
    }
  )

  /* State Hooks for Trainee Review */
  const [overallRating, setoverallRating] = useState(1)
  const [rulesRating, setrulesRating] = useState(1)
  const [communicationRating, setcommunicationRating] = useState(1)
  const [commentRating, setcommentRating] = useState(1)
  /* End State Hooks for Trainee Review */
  /* Form Methods */
  const vacreq = useForm()
  const treview = useForm()
  const dcase = useForm()
  const msignoff = useForm()
  /* End Form Methods */
  /* Submit Functions */
  const sendVacationRequest = (data) => {
    let obj = {
      userName: currentUser.email,
      startDate: data.startDate,
      endDate: data.endDate,
      reason: data.reason,
    }
    createVacationRequest({ variables: { input: obj } })
  }
  const sendTraineeReview = (data) => {
    let obj = {
      userName: data.userName,
      overallRating: parseInt(data.overallRating),
      rulesRating: parseInt(data.rulesRating),
      communicationRating: parseInt(data.communicationRating),
      commentRating: parseInt(data.commentRating),
      review: data.review,
      creator: currentUser.email,
    }
    createTraineeReview({ variables: { input: obj } })
  }
  const sendMeetingSignOff = (data) => {
    let obj = {
      userName: currentUser.email,
      reason: data.reason,
      timestamp: data.timestamp,
    }
    createMeetingSignOff({ variables: { input: obj } })
  }
  /* End Submit Functions */
  /* Utility Functions */
  const DCaseReasonRef = useRef(null)
  /* End Utility Functions */
  /* Debug Stuff */
  return (
    <>
      <MetaTags title="Formulare" description="Forms page" />

      <h1>Formulare</h1>
      <h2>Hier findest du Kontaktmöglichkeiten, Urlaubsantrag etc.</h2>

      <div className="dashboard-content">
        <div className="col">
          <div className="infocard">
            <div className="header">
              <span>Urlaubsantrag</span>
            </div>
            <div className="content">
              <div className="formwrap">
                <Form formMethods={vacreq} onSubmit={sendVacationRequest}>
                  <Label htmlFor="startDate">Startdatum</Label>
                  <DateField name="startDate" label="Startdatum" />
                  <Label htmlFor="endDate">Enddatum</Label>
                  <DateField name="endDate" label="Enddatum" />
                  <Label htmlFor="reason">Grund für Urlaubsantrag</Label>
                  <TextAreaField
                    name="reason"
                    label="Grund"
                    placeholder="..."
                  />
                  <Submit>Urlaubsantrag absenden</Submit>
                </Form>
              </div>
            </div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Abmeldung Besprechung</span>
            </div>
            <div className="content">
              <div className="formwrap">
                <Form formMethods={msignoff} onSubmit={sendMeetingSignOff}>
                  <Label htmlFor="timestamp">Datum der Besprechung</Label>
                  <DateField name="timestamp" label="Datum" />
                  <Label htmlFor="reason">Abmeldungsgrund</Label>
                  <TextAreaField
                    name="reason"
                    label="Grund"
                    placeholder="..."
                  />
                  <Submit>Abmeldung absenden</Submit>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="infocard">
            <div className="header">
              <span>Probe-Bewertung</span>
            </div>
            <div className="content">
              <div className="formwrap">
                <Form formMethods={treview} onSubmit={sendTraineeReview}>
                  <Label htmlFor="userName">Probemitglied wählen</Label>
                  <SelectField name="userName">
                    <option selected hidden>Probemitglied wählen</option>
                    <AdminTraineeUsersCell />
                  </SelectField>
                  <Label name="overallRating">
                    Bewerte das allgemeine Verhalten des Probe-Mitglieds von 1
                    bis 10
                  </Label>
                  <RangeField
                    name="overallRating"
                    min={1}
                    max={10}
                    onChange={(e) => setoverallRating(e.target.value)}
                    defaultValue={overallRating}
                  />
                  <span className="text-center text-gray-400 font-bold">
                    {overallRating}
                  </span>
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
                  <span className="text-center text-gray-400 font-bold">
                    {rulesRating}
                  </span>
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
                  <span className="text-center text-gray-400 font-bold">
                    {communicationRating}
                  </span>
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
                  <span className="text-center text-gray-400 font-bold">
                    {commentRating}
                  </span>
                  <Label htmlFor="review">Begründe deine Bewertung</Label>
                  <TextAreaField
                    name="review"
                    label="Begründung"
                    placeholder="..."
                  />
                  <Submit>Bewertung absenden</Submit>
                </Form>
              </div>
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default FormsPage
