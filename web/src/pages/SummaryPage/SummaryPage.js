import SummariesCell from 'src/components/SummariesCell'
import SideSummariesCell from 'src/components/sideSummariesCell'
import {
  Form,
  Submit,
  Label,
  TextField,
  SelectField,
} from '@redwoodjs/forms'
import { Editor } from '@tinymce/tinymce-react'
import { useMutation, MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { useRef } from 'react'
import { toast } from '@redwoodjs/web/toast'

const CREATE_SUMMARY_MUTATION = gql`
  mutation CreateSummaryMutation($input: CreateSummaryInput!) {
    createSummary(input: $input) {
      id
    }
  }
`

const SummaryPage = () => {
  const { currentUser } = useAuth()
  let mode = ''
  switch (currentUser.roles) {
    case 'Entwickler':
    case 'Projektleitung':
    case 'Administrator':
    case 'Operator':
      mode = 'both'
      break
    case 'Supportleitung':
    case 'Supporter':
      mode = 'Support'
      break
    case 'Moderatorleitung':
    case 'Moderator':
      mode = 'Moderation'
      break
    default:
      mode = 'none'
      break
  }
  const editorRef = useRef(null)

  const [createSummary] = useMutation(
    CREATE_SUMMARY_MUTATION,
    {
      onCompleted: () => {
        window.location.reload()
      },
      onerror: (error) => {
        toast.error(error)
      },
    }
  )
  const addSummary = (data) => {
    let obj = {
      content: editorRef.current.getContent(),
      side: data.side,
      title: data.title,
    }
    createSummary({ variables: { input: obj } })
  }

  return (
    <>
      <MetaTags title="Zusammenfassungen" description="Summary page" />

      <h1>Zusammenfassungen</h1>
      <h2>Hier findest du Zusammenfassungen der Besprechungen</h2>
      <div className="dashboard-content">
        <div className="col">
          {currentUser.roles === 'Supportleitung' ||
            currentUser.roles === 'Moderatorleitung' ||
            currentUser.roles === 'Operator' ||
            currentUser.roles === 'Administrator' ||
            currentUser.roles === 'Entwickler' ? (
            <>
              <div className="infocard">
                <div className="header">
                  <span>Zusammenfassung erstellen</span>
                </div>
                <div className="content">
                  <div className="formwrap">
                    <Form onSubmit={addSummary}>
                      <Label name="title">Titel</Label>
                      <TextField name="title" placeholder="..." />
                      <Label name="content">Inhalt</Label>
                      <Editor
                        className="editor"
                        apiKey="awg6jvvdkekv9jjs2mg6vhv38p6801co7ph85xgerlik646b"
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        initialValue="<p>...</p>"
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
                      <Label name="side">Side</Label>
                      <SelectField name="side">
                        <option selected hidden>
                          Bitte wählen
                        </option>
                        {mode === 'both' && (
                          <>
                            <option value={'Support'}>Support</option>
                            <option value={'Moderation'}>Moderation</option>
                            <option value={'Management'}>Management</option>
                          </>
                        )}
                        {currentUser.roles === 'Supportleitung' && (
                          <option value={'Support'}>Support</option>
                        )}
                        {currentUser.roles === 'Moderatorleitung' && (
                          <option value={'Moderation'}>Moderation</option>
                        )}
                      </SelectField>
                      <Submit>Erstellen</Submit>
                    </Form>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          <div className="infocard">
            <div className="header">
              <span>Zusammenfassungen</span>
            </div>
            {mode === 'both' ? (
              <SummariesCell />
            ) : mode === 'none' ? null : (
              <>
                {/* {mode} */}
                <SideSummariesCell mode={mode} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

/*
<div className="news-card">
              <h1>Überschrift</h1>
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse
              </span>
              <div className="info">
                <span className="role" id="supporter">
                  Support
                </span>
                <span className="date">22-22-2022, 22:22 Uhr</span>
              </div>
            </div>
            <div className="news-card">
              <h1>Überschrift</h1>
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse
              </span>
              <div className="info">
                <span className="role" id="moderator">
                  Moderation
                </span>
                <span className="date">22-22-2022, 22:22 Uhr</span>
              </div>
            </div>
            <div className="news-card">
              <h1>Überschrift</h1>
              <span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse
              </span>
              <div className="info">
                <span className="role" id="operator">
                  Management
                </span>
                <span className="date">22-22-2022, 22:22 Uhr</span>
              </div>
            </div>
*/

export default SummaryPage
