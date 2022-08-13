import { useRef, useState } from 'react'
import { MetaTags } from '@redwoodjs/web'
import { Editor } from '@tinymce/tinymce-react'
import { useAuth } from '@redwoodjs/auth'
import { useParams } from '@redwoodjs/router'

const RulesPage = () => {
  const [mode, setmode] = useState(false)

  return (
    <>
      <h1>Grundsätze</h1>
      <h2>
        Auf dieser Seite werden dir deine entsprechenden Grundsätze angezeigt.
        Bei Änderungen werden die MSCP-Nutzer benachrichtigt.
      </h2>
      {/* <button
        onClick={() => {
          setmode(!mode)
        }}
        className="absolute right-0 mr-2 p-2 border border-gray-700"
      >
        Bearbeiten (Admin)
      </button> */}
      {mode ? <RulesEditor /> : <Rules />}
    </>
  )
}

const RulesEditor = () => {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }
  return (
    <>
      <Editor
        apiKey="awg6jvvdkekv9jjs2mg6vhv38p6801co7ph85xgerlik646b"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
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
      <button onClick={log}>Log editor content</button>
    </>
  )
}

import InfopanelCell from 'src/components/InfopanelCell'
import TypeRulesPanelCell from 'src/components/TypeRulesPanelCell'

const Rules = () => {
  const { side } = useParams()
  return (
    <>
      <TypeRulesPanelCell side={side} type={'rules'} />
    </>
  )
}

export default RulesPage

/* const { currentUser } = useAuth()
  let infoMode
  switch (currentUser.roles) {
    case 'Administrator':
    case 'Entwickler':
    case 'Operator':
      infoMode = 'both'
      break
    case 'Supportleitung':
    case 'Supporter':
      infoMode = 'support'
      break
    case 'Moderatorleitung':
    case 'Moderator':
      infoMode = 'moderator'
      break
    default:
      infoMode = 'none'
      break
  }
  let infoPanelId
  switch (infoMode) {
    case 'support':
      infoPanelId = '1'
      break
    case 'moderator':
      infoPanelId = '2'
      break
    default:
      infoPanelId = '0'
      break
  }
  if (infoMode !== 'both') {
    return <InfopanelCell id={parseInt(infoPanelId)} />
  }
  if (infoMode === 'both') {
    return (
      <>
        <InfopanelCell id={1} />
        <InfopanelCell id={2} />
      </>
    )
  } */
