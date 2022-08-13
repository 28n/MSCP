import { MetaTags } from '@redwoodjs/web'

const HosterinfoPage = () => {
  return (
    <>
      <MetaTags title="Hoster-Info" description="Hosterinfo page" />

      <h1>Informationen für den Hoster</h1>
      <div className='dashboard-content'>
        <div className='col'>
          <div className='infocard'>
            <div className='header'>
              <span>Willkommen</span>
            </div>
            <div className='content'>
              <div className='w-full text-left'>
                <h2>Hey!</h2>
                <span>Danke, dass ihr dieser Software eine Chance gibt. Es sind viele Stunden an Arbeiter hier hinein geflossen, und anscheinend hat diese ja zu euch gefunden. Naja, kommen wir direkt zum Eingemachten. Hier gibts alle Features aus dem alten MSCP und sogar noch ein paar mehr. Rollenverteilung ist automatisch geregelt, jeder kann auf sein Zeug zugreifen, andere dann eben nicht. Ich habe für euch Benutzeraccounts eingericht, mit denen ihr die Features von den verschiedenen Posten aus testen könnt. Die Passwörter sind jeweils der Accountname. Dieser hingegen ist der Name der Rolle. Alle sind vertreten, einfach mal rumprobieren. </span>
                <br /><br />
                <span>Joa, so ein paar technische Sachen kann ich auch noch ablassen. Die Software hier wurde mit einem Bootstrap-Tool für React, Prisma und GraphQL erstellt. <a className='text-blue-500' href='https://redwoodjs.com'>Redwood</a> ist meiner Meinung nach eines der besten Tools für Javascript. Jetzt könnt man meinen: "Oh, ja. Du hast ja hier alles assistiert programmiert, du hast ja im Prinzip garnichts selber programmiert. Lalalalalala, ich bin so viel besser als du weil ich immer mehr und mehr Stunden meiner Lebenszeit in eine Programmiersprache investiere, die bald sowieso obsolet wird jajajajajaj." Das ist übrigens ein Zitat. Egal, ich mag Redwood, ich kann mit dem System gut arbeiten und es ist performant.</span>
                <br /><br />
                <span>Viel mehr gibts eigentlich nicht zu sagen. Ich denk' mal, die Menüs sind selbsterklärend. Es gibt in dieser Software viele Eastereggs, aber bitte cheatet nicht und guckt in den Sourcecode :( Das wär' ja mal voll unfair. Wenns Anfragen für neue Features gibt einfach als Bugreport an mich! In dieser "Sondierungsphase" habt sowieso erstmal nur ihr Zugriff auf die Bugrepots, das ändere ich bald aber ab.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

{/*
        <h2>
        Hier findest du Infos über Rollenverteilung, Konfigurationsmöglichkeiten
        und generelle Arbeitsweisen des Programms.
      </h2>
      <div className="c row">
        <div className="card">
          <h1>Rollenverteilung</h1>
          <ul className="list-disc ml-5">
            <h2>Gruppe 3</h2>
            <li>Entwickler</li>
            <li>Administrator</li>
            <li>Hoster</li>
            <h2>Gruppe 2</h2>
            <li>Operator</li>
            <li>Moderatorleitung</li>
            <li>Supportleitung</li>
            <h2>Gruppe 1</h2>
            <li>Moderator</li>
            <li>Supporter</li>
            <h2>Gruppe 0</h2>
            <li>Probe-Moderator</li>
            <li>Probe-Supporter</li>
          </ul>
        </div>
        <div className="card">
          <h1>Gruppe 0</h1>
          <span>
            Benutzer der Gruppe 0 (null) haben zwar einen aktivierten und
            eingetragenen Account, genießen aber allerdings keine Vorteile und
            Möglichkeiten der Reaktivität des MSCPs. Jeder Benutzer mit der
            Gruppe 0 wird automatisch bewertbar gemacht.{' '}
            <Link to={routes.traineereview()}>zur Probe-Bewertung</Link>{' '}
            Benutzer der Gruppe 0 können jederzeit auf das MSCP zugreifen,
            allerdings nur die statischen Inhalte sichten. Formulare, wie der
            Uralubsantrag, werden nicht angezeigt. Gruppe 0 ist aus den
            Monatsrechnungen ausgenommen. Benutzer der Gruppe 0 müssen keine
            Mindestfälle erbringen.
          </span>
        </div>
        <div className="card">
          <h1>Gruppe 1</h1>
          <span>
            Benutzer der Gruppe 1 (eins) entspringen der Gruppe 0. Eine direkte
            Beförderung ist dein einzige Weg, um Gruppe 1 zu erreichen. Gruppe 1
            hat die Möglichkeit Formulare zu verwenden. Darunter{' '}
            <Link to={routes.vacationrequest()}>der Urlaubsantrag,</Link>{' '}
            <Link to={routes.traineereview}>die Probebewertung</Link> und{' '}
            <Link to={routes.dismissedcases}>die abgelehnten Fälle.</Link>
            Nutzer der Gruppe 1 haben die Möglichkeit Mitglieder der Gruppe 0 zu
            bewerten. Außerdem müssen Mitglieder der Gruppe 1 monatliche
            Leistungen erbringen. Diese können von den
          </span>
        </div>
      </div>
*/}

export default HosterinfoPage
