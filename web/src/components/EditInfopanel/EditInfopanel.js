import {
Form,
TextField,
NumberField,
useForm,
  Label,
  Submit
} from '@redwoodjs/forms';
import {Editor} from '@tinymce/tinymce-react';
import {useEffect, useRef} from 'react';
import {useMutation} from '@redwoodjs/web';

const UPDATE_RULESPANEL_MUTATION = gql`
  mutation UpdateRulesPanel($id: Int!, $input: UpdateRulesPanelInput!) {
    updateRulesPanel(id: $id, input: $input) {
      id
    }
  }
`

const EditInfopanel = ({ rulesPanel }) => {
  const [update] = useMutation(UPDATE_RULESPANEL_MUTATION, {
    onCompleted: () => {
      window.location.reload()
    }
  })
  const editorRef = useRef(null);
    
  const up = (data) => {
    let obj = {
      ...data,
      content: editorRef.current.getContent()
    }
    update({ variables: { id: rulesPanel.id, input: obj } })
  }
  return (
    <div className="dashboard-content">
      <div className="col">
        <div className="infocard">
          <div className="header">
            <span>{rulesPanel.title}</span>
          </div>
          <div className="content">
            <div className="formwrap">
              <Form onSubmit={up}>
                <Label name="title">Titel</Label>
                <TextField name="title" defaultValue={rulesPanel.title} />
                <Label name="sortOrder">Sortierung</Label>
                <NumberField name="sortOrder" defaultValue={rulesPanel.sortOrder} />
                <Label name='content'>Inhalt</Label>
                  <Editor
                    className="editor"
                    apiKey="awg6jvvdkekv9jjs2mg6vhv38p6801co7ph85xgerlik646b"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue={rulesPanel.content}
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
                <Submit>Bearbeiten</Submit>
              </Form>
          </div> 
        </div>
      </div>
    </div>
  </div>
)
}

export default EditInfopanel
