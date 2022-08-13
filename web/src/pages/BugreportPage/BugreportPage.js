import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
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
import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import KnownBugsCell from 'src/components/KnownBugsCell'
import { toast } from '@redwoodjs/web/toast'
import UpdateBugsCell from 'src/components/UpdateBugsCell'

const CREATE_BUGREPORT = gql`
  mutation CreateBug($input: CreateBugInput!) {
    createBug(input: $input) {
      id
    }
  }
`

const BugreportPage = () => {
  const formMethods = useForm()
  const { currentUser } = useAuth()
  const [create, { loading, error }] = useMutation(CREATE_BUGREPORT, {
    onCompleted: () => {
      toast.success('Fall erstellt.')
      formMethods.reset()
    },
    onError: () => {
      toast.error('Fehler beim Erstellen. Überprüfe die eingegebenen Werte.')
    },
  })
  const onSubmit = (data) => {
    let obj = {
      title: data.title,
      description: data.description,
      createdBy: currentUser.email,
    }
    create({ variables: { input: obj } })
  }
  return (
    <>
      <MetaTags title="Bugreport" description="Bugreport page" />

      <h1>Bugreport</h1>
      <h2>
        Sollte dir ein Fehler an den Systemen aufgefallen sein, melde diesen
        hier. Missbrauch wird bestraft.
      </h2>
      <div className="dashboard-content">
        <div className="col">
          <div className="infocard">
            <div className="header">
              <span>Wie schreibe ich einen guten Bugreport?</span>
            </div>
            <div className="content">
              <span>
                Zuerst sollte einmal gesagt sein, dass die Bugreports uns sehr
                wichtig sind. Fehler und womöglich sogar Sicherheitslücken
                können mit der Zeit sehr bedrohlich werden. Deshalb bitten wir:
                Solltet ihr eine Sicherheitslücke gefunden haben, melde die. Wir
                wären euch sehr dankbar. Als kleines Extra können wir mit euch
                zusammenarbeiten, um diese Fehler zu beheben. Wenn du also etwas
                von der Marterie verstehst und Lust auf Entwicklung hast, kannst
                du dich gerne bei uns melden.
                <br />
                Wenn du einen Bug reporten willst, dann solltest du folgende
                Punkte beinhalten:
              </span>
              <br />
              <br />
              <ul className="list-disc ml-5">
                <li>
                  Einen konkreten Titel, der den Bug zusammenfasst (nicht mehr
                  als 15 Wörter)
                </li>
                <li>
                  Eine detaillierte Beschreibung, die auch wirklich den Bug
                  beschreibt. Diese sollte einige Dinge beinhalten:
                  <ul className="list-disc ml-10">
                    <li>Wie kann man den Bug reproduzieren?</li>
                    <li>Was genau tut der Bug?</li>
                    <li>Wann tritt er auf? (Uhrzeit, Datum Wochentag)</li>
                    <li>Haben andere Personen den selben Fehler?</li>
                    <li>
                      Technische Informationen (Browser, Version,
                      Betriebssystem)
                    </li>
                  </ul>
                </li>
                <li>
                  Wenn möglich einen Screenshot, der den Bug visualisiert.
                </li>
              </ul>
              <br />
              <span>Na dann, ab ans schreiben.</span>
            </div>
          </div>
          <div className="infocard">
            <div className="header">Bugreport verfassen</div>
            <div className="content">
              <div className="formwrap">
                <Form
                  formMethods={formMethods}
                  onSubmit={onSubmit}
                  config={{ mode: 'onBlur' }}
                >
                  <Label label="Titel" name="title">
                    Titel
                  </Label>
                  <TextField
                    name="title"
                    placeholder="..."
                    validation={{ required: true }}
                    errorClassName="error"
                  />
                  <FieldError name="title" className="fielderror" />
                  <Label label="Beschreibung" name="description">
                    Beschreibung
                  </Label>
                  <TextAreaField
                    name="description"
                    placeholder="..."
                    validation={{ required: true }}
                    errorClassName="error"
                  />
                  <FieldError name="description" className="fielderror" />
                  <Submit disabled={loading}>Bugreport absenden</Submit>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="c">
        <h2>Bereits bekannte Bugs</h2>
        <KnownBugsCell />
      </div>
      {currentUser.roles === 'Entwickler' ||
      currentUser.roles === 'Administrator' ? (
        <UpdateBugsCell />
      ) : null}
    </>
  )
}

export default BugreportPage
