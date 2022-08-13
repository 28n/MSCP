import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CreditsPage = () => {
  return (
    <>
      <MetaTags title="Credits" description="Credits page" />

      <h1>Mithelfer und Danksagungen</h1>
      <hr />
      <div className="c">
        <p>
          Ein großes Dankeschön an jeden, der an der Entwicklung des MGCP
          beteiligt war.
        </p>
        <br />
        <p>
          Ein besonderes Dankeschön geht an: Murphy - für die Vorstellung der
          Struktur und Mitarbeit an verschiedenen Elementen. Sternchen - für
          Designtechnische Hilfestellungen und das Design der Karten.
          (Urlaubsanträge und Probe-Bewertungen). Klausi - für die durchgehende
          Motivation und den Beistand bei unlösbaren Fehlern. Ein besonderer
          Dank geht an Bungee - für die große und langwierige Mitarbeit an den
          Forumlaren.
        </p>
        <br />
        <span className="font-thin text-sm italic">
          MGCP - Murphy-Gage Control Panel made by John Gage
        </span>
        <br />
        <br />
        <span className="font-thin text-sm italic">
          © Copyright 2022 John Gage - Sierra SW
        </span>
      </div>
    </>
  )
}

export default CreditsPage
