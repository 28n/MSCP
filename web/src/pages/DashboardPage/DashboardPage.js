import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { useEffect, useState } from 'react'
import UserTraineeReviewsCell from 'src/components/UserTraineeReviewsCell'
import NotificationCell from 'src/components/NotificationCell'
import GlobalNotificationsCell from 'src/components/globalNotificationsCell'
import RemindersCell from 'src/components/RemindersCell'
import * as FaIcons from 'react-icons/fa'
import Axios from 'axios'
import SidenewsesCell from 'src/components/SidenewsesCell'
import UserCitationsCell from 'src/components/UserCitationsCell'
import NewsesCell from 'src/components/NewsesCell'
import 'react-confirm-alert/src/react-confirm-alert.css'

/* http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5 */

const DashboardPage = () => {
  const { currentUser, hasRole } = useAuth()
  useEffect(() => {
    if (currentUser.setUp === false) {
      window.location.href = routes.setup()
    }
  }, [currentUser.setUp])

  const [waitingsupport, setwaitingsupport] = useState(0)
  const [waitinginformation, setwaitinginformation] = useState(0)
  const [waitingverify, setwaitingverify] = useState(0)
  const [waitingmod, setwaitingmod] = useState(0)
  const [waitingeinstellung, setwaitingeinstellung] = useState(0)

  useEffect(() => {
    Axios.get(
      'http://www.randomnumberapi.com/api/v1.0/random?min=0&max=10&count=5'
    ).then((res) => {
      setwaitingsupport(res.data[0])
      setwaitinginformation(res.data[1])
      setwaitingverify(res.data[2])
      setwaitingmod(res.data[3])
      setwaitingeinstellung(res.data[4])
    })
  }, [])

  {/*if (citationactive === true) {
    confirmAlert({
      title: 'Meldeaufforderung erhalten',
      message: `von der Supportleitung: Bitte meld dich mal bei uns!`,
      buttons: [
        {
          label: 'Ich habe sie gelesen und verstanden!',
        }
      ]
    })}*/}
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <h1>Dashboard</h1>
      <h2>Alles wichtige auf einen Blick</h2>
      <div className="flex flex-col gap-6">
        {hasRole(["Probe-Supporter", "Probe-Moderator"]) && (
          <HowManyTraineeReviews />
        )}
        <div className="tsinfo-row">
          <div className="infocard">
            <h3>Spieler Warten auf Support</h3>
            <h1>{waitingsupport}</h1>
            <p>Spieler in High-Prio: 1</p>
          </div>
          <div className="infocard">
            <h3>Spieler Warten auf Moderator</h3>
            <h1>{waitingmod}</h1>
            <p>Spieler in High-Prio: 1</p>
          </div>
          <div className="infocard">
            <h3>Spieler Warten auf Information</h3>
            <h1>{waitinginformation}</h1>
            <span className="text-green-500">
              <FaIcons.FaChevronUp />
            </span>
          </div>
          <div className="infocard">
            <h3>Spieler Warten auf TS Verifizierung</h3>
            <h1>{waitingverify}</h1>
            <span className="text-green-500">
              <FaIcons.FaChevronUp />
            </span>
          </div>
          <div className="infocard">
            <h3>Spieler Warten auf Einstellung</h3>
            <h1>{waitingeinstellung}</h1>
            <p>Mod: {Math.floor(waitingeinstellung / 2)} Sup: {Math.floor(waitingeinstellung / 2)}</p>
          </div>
        </div>
        <div className="dashboard-content">
          <div className="col">
            <div className="infocard">
              <div className="header">
                <span>Benachrichtigungen</span>
              </div>
              <div className="content">
                <NotificationCell userName={currentUser.email} />
              </div>
            </div>
            <div className="infocard">
              <div className="header">
                <span>Meine letzten Meldeaufforderungen</span>
              </div>
              <div className="content">
                <UserCitationsCell userName={currentUser.email} />
              </div>
            </div>
            {currentUser.roles === 'Entwickler' && (
              <div className="infocard">
                <div className="header">
                  <span>Mögliche Rollen (Debug)</span>
                </div>
                <div className="content">
                  Gage{' '}
                  <span className="role" id="entwickler">
                    Entwickler
                  </span>
                  JGat
                  <span className="role" id="administrator">
                    Admin
                  </span>
                  Dime
                  <span className="role" id="operator">
                    Operator
                  </span>
                  IRaubzug
                  <span className="role" id="moderatorleitung">
                    Moderatorleitung
                  </span>
                  PKaul
                  <span className="role" id="supportleitung">
                    Supportleitung
                  </span>
                  PSainz
                  <span className="role" id="moderator">
                    Moderator
                  </span>
                  WWindhelm
                  <span className="role" id="supporter">
                    Supporter
                  </span>
                  <br />
                  <span className="role" id="probe-moderator">
                    Probe-Moderator
                  </span>
                  <br />
                  <span className="role" id="probe-supporter">
                    Probe-Supporter
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="col">
            <div className="infocard">
              <div className="header">
                <span>Neuigkeiten - {currentUser.roles}</span>
              </div>
              {/* <div className="news-card">
                <h1>Überschrift</h1>
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Duis
                  autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat, vel illum dolore eu feugiat nulla
                  facilisis at vero eros et accumsan et iusto odio dignissim qui
                  blandit praesent luptatum zzril delenit augue duis dolore te
                  feugait nulla facilisi. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse
                </span>
                <div className="info">
                  <img
                    src="https://team-elan.de/images/avatars/23/1239-232a929b79e852a14dc512cadad947a666e03968.png"
                    alt="avatar"
                  ></img>
                  <p>Gage</p>
                  <span className="role entwickler">Entwickler</span>
                  <span className="date">22-22-2022, 22:22 Uhr</span>
                </div>
              </div> */}
              {currentUser.roles === 'Administrator' ||
                currentUser.roles === 'Projektleitung' ||
                currentUser.roles === 'Entwickler' ||
                currentUser.roles === 'Operator' ? (
                <NewsesCell />
              ) : (
                <SidenewsesCell side="sup" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const HowManyTraineeReviews = () => {
  const { currentUser } = useAuth()
  return (
    <div className="c">
      <h2>
        Du bist <b>Probe-Mitglied {currentUser.roles === 'Probe-Supporter' && "des Supports"}{currentUser.roles === 'Probe-Moderator' && "der Moderation"}</b>. Du hast insgesamt schon{' '}
        {<UserTraineeReviewsCell userName={currentUser.email} />} Bewertungen zu deiner Arbeit
        erhalten.
      </h2>
    </div>
  )
}

const OldDashboard = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <div className="c">
        <h1>
          Willkommen <span className="font-bold">{currentUser.email}</span>
        </h1>
        <h2>
          Deine Rolle ist{' '}
          <span className="font-bold">
            {currentUser.roles} -{' '}
            {currentUser.setUp === true ? 'SetUp' : 'NotSetUp'}
          </span>
        </h2>
      </div>
      <RemindersCell role={currentUser.roles} />
      <GlobalNotificationsCell />
      <div className="c">
        <NotificationCell userName={currentUser.email} />
      </div>
      {currentUser.roles === 'Probe-Supporter' ||
        currentUser.roles === 'Probe-Moderator' ? (
        <HowManyTraineeReviews />
      ) : null}
    </>
  )
}
export default DashboardPage
