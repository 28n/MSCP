import {
  Form,
  SelectField,
  Label,
  TextField,
  Submit,
  DateField,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'

const CREATE_CHANGELOG = gql`
  mutation CreateChangelog($input: CreateChangelogInput!) {
    createChangelog(input: $input) {
      id
    }
  }
`

const CREATE_NOTIFICATION = gql`
  mutation CreateNotification($input: CreateNotificationInput!) {
    createNotification(input: $input) {
      id
    }
  }
`

const CreateChangelog = () => {
  const { currentUser } = useAuth()
  const formMethods1 = useForm()
  const formMethods2 = useForm()

  const [create, { loading, error }] = useMutation(CREATE_CHANGELOG, {
    onCompleted: () => {
      toast.success('Changelog erstellt.')
    },
    onError: () => {
      toast.error('Fehler beim Erstellen.')
    },
  })

  const [createNotification] = useMutation(CREATE_NOTIFICATION, {
    onCompleted: () => {
      toast.success('Benachrichtigung erstellt.')
    },
    onError: () => {
      toast.error('Fehler beim Erstellen.')
    },
  })

  const createChangelog = (data) => {
    let obj = {
      type: data.type,
      content: data.content,
      createdBy: currentUser.email,
    }
    create({ variables: { input: obj } })
    formMethods1.reset()
  }
  const createSection = (data) => {
    let obj = {
      type: 'Section',
      content: 'Section',
      createdAt: new Date(data.createdAt).toISOString(),
      createdBy: currentUser.email,
    }
    if (data.createdAt === null) {
      obj.createdAt = new Date().toISOString()
    }
    create({ variables: { input: obj } })
    formMethods2.reset()
  }
  const createNotif = () => {
    let obj = {
      userName: 'global',
      createdBy: 'Entwickler',
      title: 'Neue Changelogs',
      content:
        'Es hat sich einiges am MSCP geändert. Schau doch mal in den Changelogs vorbei!',
      isRead: false,
    }
    createNotification({ variables: { input: obj } })
  }
  return (
    <>
      <div className="infocard">
        <div className="header">
          <span>Changelog erstellen</span>
        </div>
        <div className="content">
          <div className="formwrap">
            <Form onSubmit={createChangelog} formMethods={formMethods1}>
              <Label name="type">Typ des Changelogs</Label>
              <SelectField name="type" options={['Section', 'Change']}>
                <option defaultChecked hidden>
                  Wählen
                </option>
                <option value={'Add'}>Neues Feature</option>
                <option value={'Rem'}>Feature entfernt</option>
                <option value={'Change'}>Feature geändert</option>
                <option value={'Fix'}>Bugfix</option>
              </SelectField>
              <Label name="content">Inhalt des Changelogs</Label>
              <TextField name="content" />
              <hr />
              <Submit>Erstellen</Submit>
            </Form>
          </div>
        </div>
      </div>
      <div className="infocard">
        <div className="header">
          <span>Section erstellen</span>
        </div>
        <div className="content">
          <div className="formwrap">
            <h2>Section erstellen</h2>
            <Form onSubmit={createSection} formMethods={formMethods2}>
              <Label name="createdAt">
                Datum der Section (muss nach dem letzen Changelog erstellt
                werden)
              </Label>
              <DateField name="createdAt" />
              <Submit>Section erstellen</Submit>
            </Form>
          </div>
        </div>
      </div>
      <div className="infocard">
        <div className="header">
          <span>Changelog-Benachrichtigung senden</span>
        </div>
        <div className="content">
          <div className="formwrap">
            <Form onSubmit={createNotif}>
              <Submit>Notification senden</Submit>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateChangelog
