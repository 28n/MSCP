import { useAuth } from '@redwoodjs/auth'
import { Editor } from '@tinymce/tinymce-react'
import { useState, useRef } from 'react'

const Sidenews = ({ sidenewses }) => {
  const { currentUser } = useAuth()
  return (
    <>
      {sidenewses.map((val) => {
        let date = new Date(val.createdAt)
        let dateString =
          date.toLocaleDateString() +
          ', ' +
          date.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
          })
        function setNewsContent() {
          return { __html: val.content }
        }
        return (
          <div key={val.id} className="news">
            <section>
              <h1>{val.title}</h1>
              <div dangerouslySetInnerHTML={setNewsContent()}></div>
            </section>
            <div className="info">
              <img
                src="https://team-elan.de/images/avatars/23/1239-232a929b79e852a14dc512cadad947a666e03968.png"
                alt="avatar"
              ></img>
              <p>{val.createdBy}</p>
              <span className="role" id={val.createdByRole.toLowerCase()}>
                {val.createdByRole}
              </span>
              <span className="date">{dateString}</span>
            </div>
          </div>
        )
      })}
    </>
  )
}

// export EditorMode = () => {
//   return (
//     <Editor
//             className="editor"
//             apiKey="awg6jvvdkekv9jjs2mg6vhv38p6801co7ph85xgerlik646b"
//             onInit={(evt, editor) => (editorRef.current = editor)}
//             initialValue="<p>Bitte gib hier den Inhalt des Infopanels an. Du musst einen Inhalt angeben, sonst kann das Infopanel nicht erstellt werden!</p>"
//             init={{
//               height: 500,
//               menubar: false,
//               plugins: [
//                 'advlist',
//                 'autolink',
//                 'lists',
//                 'link',
//                 'image',
//                 'charmap',
//                 'preview',
//                 'anchor',
//                 'searchreplace',
//                 'visualblocks',
//                 'code',
//                 'fullscreen',
//                 'insertdatetime',
//                 'media',
//                 'table',
//                 'code',
//                 'help',
//                 'wordcount',
//               ],
//               toolbar:
//                 'undo redo | blocks | ' +
//                 'bold italic forecolor | alignleft aligncenter ' +
//                 'alignright alignjustify | bullist numlist outdent indent | ' +
//                 'removeformat | help',
//               content_style:
//                 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
//               skin: 'oxide-dark',
//               content_css: 'dark',
//             }}
//           />
//   )
// }

export default Sidenews
