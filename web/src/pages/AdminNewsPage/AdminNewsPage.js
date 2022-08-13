import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  SelectField,
  useForm,
  Label,
} from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'
import { Editor } from '@tinymce/tinymce-react'
import { useRef, useState } from 'react'

const CREATE_NEWS_MUTATION = gql`
  mutation CreateNewsMutation($input: CreateNewsInput!) {
    createNews(input: $input) {
      id
    }
  }
`

const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
    createMessage(input: $input) {
      id
    }
  }
`

const AdminNewsPage = () => {
  const editorRef = useRef(null)
  const editorRef2 = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }
  const { currentUser } = useAuth()
  const [createNews, { loading, error }] = useMutation(CREATE_NEWS_MUTATION, {
    onCompleted: () => {
      toast.success('News created.')
      formMethods.reset()
    },
    onerror: (error) => {
      toast.error(error)
    },
  })
  const [createMessage, { loading: loading2, error: error2 }] = useMutation(
    CREATE_MESSAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Message created.')
        formMethods2.reset()
      },
      onerror: (error) => {
        toast.error(error)
      },
    }
  )

  const formMethods = useForm()
  const formMethods2 = useForm()
  const sendNews = (data) => {
    let obj = {
      title: data.title,
      content: editorRef.current.getContent(),
      side: data.side,
      createdBy: currentUser.email,
      createdByRole: currentUser.roles,
    }
    createNews({ variables: { input: obj } })
  }
  const sendMessage = (data) => {
    let obj = {
      title: data.title,
      content: editorRef2.current.getContent(),
      side: data.side,
      createdBy: currentUser.email,
      createdByRole: currentUser.roles,
    }
    createMessage({ variables: { input: obj } })
  }
  return (
    <>
      <MetaTags title="Admin-News" description="AdminNews page" />

      <h1>AdminNewsPage</h1>
      <h2>Hier kannst du Neuigkeiten an deine Kollegen versenden</h2>

      <div className="dashboard-content">
        <div className="col">
          <div className="infocard">
            <div className="header">
              <span>Newsartikel - Dashboard</span>
            </div>
            <div className="content">
              <div className="formwrap">
                <Form formMethods={formMethods} onSubmit={sendNews}>
                  <Label name="title">Titel</Label>
                  <TextField name="title" placeholder="..." />
                  <Label name="content">Inhalt</Label>
                  {/* <TextAreaField name="content" placeholder="..." /> */}
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
                      Bitte auswählen
                    </option>
                    <option value={'sup'}>Support</option>
                    <option value={'mod'}>Moderation</option>
                    <option value={'global'}>Global</option>
                  </SelectField>
                  <Submit>Erstellen</Submit>
                </Form>
              </div>
            </div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Mitteilung an x</span>
            </div>
            <div className="content">
              <div className="formwrap">
                <Form formMethods={formMethods2} onSubmit={sendMessage}>
                  <Label name="title">Titel</Label>
                  <TextField name="title" placeholder="..." />
                  <Label name="content">Inhalt</Label>
                  <Editor
                    className="editor"
                    apiKey="awg6jvvdkekv9jjs2mg6vhv38p6801co7ph85xgerlik646b"
                    onInit={(evt, editor) => (editorRef2.current = editor)}
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
                      Bitte auswählen - {currentUser.roles}
                    </option>
                    {currentUser.roles === 'Supportleitung' ||
                      currentUser.roles === 'Operator' ||
                      currentUser.roles === 'Administrator' ||
                      currentUser.roles === 'Entwickler' ? (
                      <option value={'support'}>Support</option>
                    ) : null}
                    {currentUser.roles === 'Moderatorleitung' ||
                      currentUser.roles === 'Operator' ||
                      currentUser.roles === 'Administrator' ||
                      currentUser.roles === 'Entwickler' ? (
                      <option value={'moderation'}>Moderation</option>
                    ) : null}
                  </SelectField>
                  <Submit>Erstellen</Submit>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminNewsPage
