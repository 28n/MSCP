import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { toast } from '@redwoodjs/web/toast'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
  SelectField,
  useForm,
} from '@redwoodjs/forms'

const CREATE_VACATIONREQUEST = gql`
  mutation CreateVacationRequest($input: CreateVacationRequestInput!) {
    createVacationRequest(input: $input) {
      id
    }
  }
`

const VacationrequestPage = () => {
  const formMethods = useForm()
  const { currentUser } = useAuth()

  const [create, { loading, error }] = useMutation(CREATE_VACATIONREQUEST)

  const onSubmit = (data) => {
    let obj = {
      userName: currentUser.email,
      lengthInDays: parseInt(data.lengthInDays),
      reason: data.reason,
    }
    if (data.reason.length === 0) {
      obj.reason = 'SYSTEM: No reason given'
    }

    try {
      create({ variables: { input: obj } })
      toast.success('Urlaubsantrag erstellt.')
      formMethods.reset()
    } catch (error) {
      toast.error(
        'Fehler beim Erstellen des Urlaubsantrag. Probiere es später erneut.'
      )
    }
  }

  return (
    <>
      <MetaTags title="Vacationrequest" description="Vacationrequest page" />

      <h1>Urlaubsantrag</h1>
      <h2>
        Solltest du einfach mal nicht die Zeit finden, Fälle zu machen, kannst
        du hier deinen Urlaub beantragen.
      </h2>
      <br />
      <div className="form-wrapper">
        <Form formMethods={formMethods} onSubmit={onSubmit}>
          <FormError />
          <Label name="lengthInDays">Länge des Urlaubs</Label>
          <SelectField name="lengthInDays">
            <option value={1}>1 Tag</option>
            <option value={2}>2 Tage</option>
            <option value={3}>3 Tage</option>
            <option value={4}>4 Tage</option>
            <option value={5}>5 Tage</option>
            <option value={6}>6 Tage</option>
            <option value={7}>7 Tage</option>
          </SelectField>
          <FieldError name="lengthInDays" />
          <Label name="reason">Grund für den Urlaub</Label>
          <TextAreaField name="reason" />
          <FieldError name="reason" />
          <hr />
          <span>
            Achtung! Bevor du deinen Urlaubsantrag absendest, beachte nochmal
            eines: Ein Urlaubsantrag kann nicht zurückgenommen werden und wird
            für immer im System gespeichert. Der Urlaub wird in der
            Monatsbillanz mit eingerechnet. Es kann sein, dass du durch
            versehentlich angeforderten Urlaub deinen Posten verlierst. Das will
            niemand. Bitte lies dir deine Angaben noch einmal richtig durch und
            verifizier diese.
          </span>
          <hr />
          <Submit disabled={loading}>Urlaubsantrag absenden</Submit>
        </Form>
      </div>
    </>
  )
}

export default VacationrequestPage
