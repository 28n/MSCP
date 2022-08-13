import { MetaTags, useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import DismissedCasesCell from 'src/components/DismissedCasesCell'
import { useRef } from 'react'

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
} from '@redwoodjs/forms'

const CREATE_DISMISSEDCASE_MUTATION = gql`
  mutation CreateDismissedCase($input: CreateDismissedCaseInput!) {
    createDismissedCase(input: $input) {
      id
    }
  }
`

const DismissedcasesPage = () => {
  const dcase = useForm()
  const DCaseReasonRef = useRef(null)
  const { currentUser, hasRole } = useAuth()

  const [createDismissedCase] = useMutation(CREATE_DISMISSEDCASE_MUTATION, {
    onCompleted: () => {
      window.location.reload()
    },
  })
  const sendDismissedCase = (data) => {
    let obj = {
      userName: data.userName,
      userId: data.userId,
      opName: currentUser.email,
      opRole: currentUser.roles,
      reason: data.reason,
      evidence: data.evidence,
      timestamp: data.timestamp,
    }
    createDismissedCase({ variables: { input: obj } })
  }
  return (
    <>
      <MetaTags title="Abgelehnte Fälle" description="Dismissedcases page" />
      <h1>Abgelehnte Fälle</h1>
      <h2>
        Solltest du einen Fall abgelehnt haben, trage diesen bitte hier ein.
      </h2>
      <div className="infocard">
        <div className="header">
          <span>Ein Anliegen ablehnen</span>
        </div>
        <div className="content">
          <div className="formwrap">
            <Form formMethods={dcase} onSubmit={sendDismissedCase}>
              <Label htmlFor="timestamp">Datum und Uhrzeit</Label>
              <DatetimeLocalField
                name="timestamp"
                label="Datum und Uhrzeit"
              />
              <Label htmlFor="userName">Name des Melders</Label>
              <TextField
                name="userName"
                label="Name"
                placeholder="Nick Gage"
              />
              <Label htmlFor="userId">DB-ID des Melders</Label>
              <NumberField
                name="userId"
                label="DB-ID"
                placeholder="106083"
              />
              <Label htmlFor="evidence">
                Beweise - mehrere mit einem Komma trennen
              </Label>
              <TextField
                name="evidence"
                label="Beweise"
                placeholder="www.youtu.be/..."
              />
              <Label htmlFor="reason">Grund für Ablehnung</Label>
              <TextAreaField
                name="reason"
                label="Grund"
                placeholder="..."
                ref={DCaseReasonRef}
              />
              {hasRole(["Operator", "Administrator", "Entwickler"]) && (
                <>
                  <Label name='side'>Fallart</Label>
                  <SelectField name="side">
                    <option selected hidden>
                      Seite wählen
                    </option>
                    <option value={"Support"}>Supportfall</option>
                    <option value={"Moderation"}>Moderationtiontionsfallll</option>
                  </SelectField>
                </>
              )}
              {/* <span>Benutzer verlinken</span>
                  <div className="addusertag">
                    {activeusers.map((val) => {
                      return (
                        <h6
                          key={val.name}
                          className={val.role.toLowerCase()}
                          onClick={() => {
                            DCaseReasonRef.current.value =
                              DCaseReasonRef.current.value +
                              ' @' +
                              val.name +
                              ' '
                          }}
                        >
                          {val.name}
                        </h6>
                      )
                    })}
                  </div> */}
              <Submit>Anliegen ablehnen</Submit>
            </Form>
          </div>
        </div>
      </div>
      {/* <div className="form-wrapper">
        <Form
          formMethods={formMethods}
          onSubmit={onSubmit}
          error={error}
          config={{ mode: 'onBlur' }}
        >
          <FormError error={error} />
          <Label name="userName">Spielername</Label>
          <TextField
            name="userName"
            placeholder="Nick Gage"
            validation={{ required: true }}
          />
          <FieldError name="userName" />
          <Label name="userId">Spieler-ID</Label>
          <NumberField
            name="userId"
            placeholder="106083"
            validation={{ required: true }}
          />
          <FieldError name="userId" />
          <Label name="reason">Grund</Label>
          <TextAreaField
            name="reason"
            placeholder="Gib einen gruind für die Ablehnung an"
            validation={{ required: true }}
          />
          <FieldError name="reason" />
          <Label name="evidence">Beweise</Label>
          <TextAreaField
            name="evidence"
            placeholder="https://youtu.be/dQw4w9WgXcQ"
          />
          <Label name="createdAt">Datum und Uhrzeit</Label>
          <DatetimeLocalField
            name="createdAt"
            validation={{ required: true }}
          />
          <hr />
          <Submit disabled={loading}>Fall eintragen</Submit>
        </Form>
      </div> */}
      <div className="infocard">
        <div className="header">
          <span>Abgelehnte Fälle: Support</span>
        </div>
        <div className="content">
          <DismissedCasesCell />
        </div>
      </div>
    </>
  )
}

export default DismissedcasesPage
