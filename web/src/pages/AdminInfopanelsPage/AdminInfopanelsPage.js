import { MetaTags, useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import EditableRulesPanelCell from 'src/components/EditableRulesPanelCell'
import { Form, Label, TextField, SelectField, Submit } from '@redwoodjs/forms'

const CREATE_RULES_PANEL_MUTATION = gql`
  mutation CreateRulesPanel($input: CreateRulesPanelInput!) {
    createRulesPanel(input: $input) {
      id
    }
  }
`

const AdminInfopanelsPage = () => {
  const { currentUser } = useAuth()
  const [createRulesPanel] = useMutation(CREATE_RULES_PANEL_MUTATION, {
    onCompleted: () => {
      window.location.reload()
    }

  })
  let side = ''
  switch (currentUser.roles) {
    case 'Supportleitung':
      side = 'support'
    case 'Moderatorleitung':
      side = 'moderation'
    case 'Operator':
    case 'Administrator':
    case 'Entwickler':
      side = 'both'
  }
  const sendPanel = (data) => {
    let obj = {
      title: data.title,
      sortOrder: 1,
      content: "Dies ist ein neues Panel! Bitte warte, während deine Leitung das Panel bearbeitet.",
      createdBy: currentUser.email,
      side: data.side,
      type: data.type,
    }
    createRulesPanel({ variables: { input: obj } })
  }
  return (
    <>
      <MetaTags title="Admin-Infopanels" description="AdminInfopanels page" />
      <h1>Infopanels verwalten</h1>
      <h2>
        Hier siehst du alle Infopanels, die du mit deinem Rang verwalten kannst.
      </h2>

      <div className="dashboard-content">
        <div className="col">
          {side === 'both' ? (
            <>
              <div className="infocard">
                <div className="header">
                  <span>Infopanel Support</span>
                </div>
                <div className="content">
                  <div className='citation-list'>
                    <h3>Grundsätze</h3>
                    <EditableRulesPanelCell side={'support'} type={'rules'} />
                    <h3>ACP-Regeln</h3>
                    <EditableRulesPanelCell side={'support'} type={'acprules'} />
                    <h3>Hilfestellungen</h3>
                    <EditableRulesPanelCell side={'support'} type={'helprules'} />
                  </div>
                </div>
              </div>
              <div className="infocard">
                <div className="header">
                  <span>Infopanel Moderation</span>
                </div>
                <div className="content">
                  <div className='citation-list'>
                    <h3>Grundsätze</h3>
                    <EditableRulesPanelCell side={'moderation'} type={'rules'} />
                    <h3>ACP-Regeln</h3>
                    <EditableRulesPanelCell
                      side={'moderation'}
                      type={'acprules'}
                    />
                    <h3>Hilfestellungen</h3>
                    <EditableRulesPanelCell
                      side={'moderation'}
                      type={'helprules'}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="infocard">
                <div className='citation-list'>
                  <h3>Grundsätze</h3>
                  <EditableRulesPanelCell side={side} type={rules} />
                  <h3>ACP-Regeln</h3>
                  <EditableRulesPanelCell side={side} type={acprules} />
                  <h3>Hilfestellungen</h3>
                  <EditableRulesPanelCell side={side} type={helprules} />
                </div>
              </div>
            </>
          )}
          <div className='infocard'>
            <div className='header'>
              <span>Ein Infopanel erstellen</span>
            </div>
            <div className='content'>
              <div className='formwrap'>
                <Form onSubmit={sendPanel}>
                  <Label htmlFor='title'>Titel</Label>
                  <TextField name='title' placeholder='...' />
                  <Label htmlFor='side'>Side</Label>
                  <SelectField name="side">
                    <option selected hidden>Bitte wählen</option>
                    <option value={"support"}>Support</option>
                    <option value={"moderation"}>Moderation</option>
                  </SelectField>
                  <Label htmlFor='type'>Typ</Label>
                  <SelectField name='type'>
                    <option selected hidden>Bitte wählen</option>
                    <option value={"rules"}>Grundsätze</option>
                    <option value={"acprules"}>ACP-Regeln</option>
                    <option value={"helprules"}>Hilfestellungen</option>
                  </SelectField>
                  <Submit>Absenden</Submit>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/*
  <div className="form-wrapper">
        <h2>Infopanel erstellen</h2>
        <Form error={error} formMethods={formMethods} onSubmit={onSubmit}>
          <FormError error={error} />
          <Label name="name">Name des Panels</Label>
          <TextField name="name" />
          <Label name="side">Typ des Panels angeben</Label>
          <SelectField name="side">
            <option value={'hidden'}>Versteckt</option>
            <option value={'Global'}>Öffentlich</option>
            <option value={'Support'}>Supportintern</option>
            <option value={'Moderation'}>Moderationsintern</option>
            <option value={'Supportleitung'}>Supportleitung</option>
            <option value={'Moderatorleitung'}>Moderatorleitung</option>
            <option value={'Operator'}>Operator</option>
            <option value={'Administrator'}>Administrator</option>
            <option value={'Leitung'}>Leitung Sup + Mod</option>
          </SelectField>
          <Label name="content">Inhalt des Panels</Label>
          <Editor
            className="editor"
            apiKey="awg6jvvdkekv9jjs2mg6vhv38p6801co7ph85xgerlik646b"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>Bitte gib hier den Inhalt des Infopanels an. Du musst einen Inhalt angeben, sonst kann das Infopanel nicht erstellt werden!</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'code',
                'help',
                'wordcount',
              ],
              toolbar:
                'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              skin: 'oxide-dark',
              content_css: 'dark',
            }}
          />
          <span className="text-sm text-gray-400">
            Der Bug mit dem Editor ist bekannt. Den schrägen Strich kann man
            einfach ignorieren, restliche Features funktionieren allerdings
            noch.
          </span>
          <hr />
          <Submit>Infopanel erstellen</Submit>
        </Form>
      </div>
      <div className="c">
        <h2>Infopanel-Liste</h2>
        <AdminInfopanelsCell />
      </div>
*/

export default AdminInfopanelsPage
