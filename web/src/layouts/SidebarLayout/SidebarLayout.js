import * as FaIcons from 'react-icons/fa'
import { useState } from 'react'
import { routes, Link, NavLink } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Toaster } from '@redwoodjs/web/toast'

const SidebarLayout = ({ children }) => {
  const { currentUser, logOut, hasRole } = useAuth()
  const [dropdown1, setdropdown1] = useState(false)
  const [dropdown2, setdropdown2] = useState(false)
  const [dropdownadmin, setdropdownadmin] = useState(false)
  const [dropdownsystem, setdropdownsystem] = useState(false)
  const [dropdowndeveloper, setdropdowndeveloper] = useState(false)
  const [dropdownhelprules, setdropdownhelprules] = useState(false)
  const [dropdownadmintool, setdropdownadmintool] = useState(false)
  let showall = false
  return (
    <>
      <nav className="sidebar">
        <button
          onClick={() => {
            window.location.reload()
          }}
          className="reloadbtn"
        >
          <FaIcons.FaCircleNotch />
        </button>
        <h1>MSCP - TeamELAN</h1>

        {currentUser.setUp ? (
          <ul>
            <li>
              <h2>Hauptmenü</h2>
            </li>
            <li>
              <NavLink activeClassName="activelink" to={routes.dashboard()}>
                <FaIcons.FaHome />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activelink" to={routes.forms()}>
                <FaIcons.FaPen />
                Formulare
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activelink" to={routes.pricelist()}>
                <FaIcons.FaDollarSign />
                Preislisten
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activelink" to={routes.summary()}>
                <FaIcons.FaPalette />
                Zusammenfassungen
              </NavLink>
            </li>
            {currentUser.roles === 'Supporter' ||
              currentUser.roles === 'Moderator' ||
              currentUser.roles === 'Supportleitung' ||
              currentUser.roles === 'Moderatorleitung' ||
              currentUser.roles === 'Operator' ||
              currentUser.roles === 'Administrator' ||
              currentUser.roles === 'Entwickler' ? (
              <>
                <li>
                  <NavLink activeClassName="activelink" to={routes.acpTags()}>
                    <FaIcons.FaTags />
                    ACP Tags
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.dismissedcases()}
                  >
                    <FaIcons.FaTimesCircle />
                    Abgelehnte Fälle
                  </NavLink>
                </li>
              </>
            ) : null}
            {currentUser.roles === 'Supporter' ||
              currentUser.roles === 'Supportleitung' ||
              currentUser.roles === 'Operator' ||
              currentUser.roles === 'Administrator' ||
              currentUser.roles === 'Entwickler' ? (
              <>
                <li>
                  <h2>Supporter-Bereich</h2>
                </li>
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.rules({ side: 'support' })}
                  >
                    <FaIcons.FaBook />
                    Grundsätze
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.acprules({ side: 'support' })}
                  >
                    <FaIcons.FaTools />
                    ACP-Regeln
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.helprules({ side: 'support' })}
                  >
                    <FaIcons.FaHandHoldingHeart />
                    Hilfestellungen
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.message({ side: 'support' })}
                  >
                    <FaIcons.FaSms />
                    Mitteilungen
                  </NavLink>
                </li>
              </>
            ) : null}
            {currentUser.roles === 'Moderator' ||
              currentUser.roles === 'Moderatorleitung' ||
              currentUser.roles === 'Operator' ||
              currentUser.roles === 'Administrator' ||
              currentUser.roles === 'Entwickler' ? (
              <>
                <li>
                  <h2>Moderations-Bereich</h2>
                </li>
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.rules({ side: 'moderation' })}
                  >
                    <FaIcons.FaBook />
                    Grundsätze
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.acprules({ side: 'moderation' })}
                  >
                    <FaIcons.FaTools />
                    ACP-Regeln
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.helprules({ side: 'moderation' })}
                  >
                    <FaIcons.FaHandHoldingHeart />
                    Hilfestellungen
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.message({ side: 'moderation' })}
                  >
                    <FaIcons.FaSms />
                    Mitteilungen
                  </NavLink>
                </li>
                <li>
                  <button>
                    <FaIcons.FaShieldAlt />
                    Timeban-Reminder
                  </button>
                </li>
              </>
            ) : null}
            {currentUser.roles === 'Supportleitung' ||
              currentUser.roles === 'Moderatorleitung' ||
              currentUser.roles === 'Operator' ||
              currentUser.roles === 'Administrator' ||
              currentUser.roles === 'Entwickler' ? (
              <>
                <li>
                  <h2>Leitungs-Bereich</h2>
                </li>
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.adminDashboard()}
                  >
                    <FaIcons.FaUserTie />
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="activelink" to={routes.adminNews()}>
                    <FaIcons.FaNewspaper />
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.adminInfopanels()}
                  >
                    <FaIcons.FaInfoCircle />
                    Infopanels
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.adminUserSearch()}
                  >
                    <FaIcons.FaUserFriends />
                    Benutzerverwaltung
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="activelink" to={routes.adminForms()}>
                    <FaIcons.FaFile />
                    Formularantworten
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="activelink" to="">
                    <FaIcons.FaUsers />
                    Benutzerliste (Supporter)
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="activelink" to="">
                    <FaIcons.FaUsers />
                    Benutzerliste (Moderatoren)
                  </NavLink>
                </li>
                <li>
                  <a>
                    <FaIcons.FaHeartbeat />
                    Aktivität verwalten
                  </a>
                </li>
              </>
            ) : null}
            {currentUser.roles === 'Entwickler' ? (
              <>
                <li>
                  <h2>Entwickler-Bereich</h2>
                </li>
                <li>
                  <NavLink
                    activeClassName="activeLink"
                    to={routes.developerTodolist()}
                  >
                    <FaIcons.FaTasks />
                    Todoliste
                  </NavLink>
                </li>
                <li>
                  <a>
                    <FaIcons.FaDatabase />
                    Logs
                  </a>
                </li>
                <li>
                  <a>
                    <FaIcons.FaHeartbeat />
                    Status
                  </a>
                </li>
                <li>
                  <a>
                    <FaIcons.FaHammer />
                    Wartungsmodus
                  </a>
                </li>
                <li>
                  <a>
                    <FaIcons.FaTerminal />
                    Debug
                  </a>
                </li>
                <li>
                  <a>
                    <FaIcons.FaTabletAlt />
                    Betafunktionen
                  </a>
                </li>
                <li>
                  <a>
                    <FaIcons.FaRocketchat />
                    MSCP-Chat
                  </a>
                </li>
              </>
            ) : null}
            <li>
              <h2>System-Bereich</h2>
            </li>
            <li>
              <NavLink activeClassName="activelink" to={routes.changelogs()}>
                <FaIcons.FaHistory />
                Changelogs
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activelink" to={routes.bugreport()}>
                <FaIcons.FaBug />
                Bugreport
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activelink" to={routes.credits()}>
                <FaIcons.FaCreditCard />
                Credits
              </NavLink>
            </li>
            {hasRole(["Projektleitung", "Entwickler"]) && (
              <li>
                <NavLink activeClassName='activelink' to={routes.hosterinfo()}>
                  <FaIcons.FaCogs />
                  Hosterinfo
                </NavLink>
              </li>
            )}
            <br />
            {/* ---------------------------------------------------------------------- */}
            <li className="mt-auto">
              <button
                onClick={() => {
                  logOut()
                }}
              >
                <FaIcons.FaSignOutAlt />
                {currentUser.email} - Ausloggen
              </button>
            </li>
          </ul>
        ) : null}
      </nav>
      <main className="content">
        <Toaster />
        {children}
      </main>
    </>
  )
}

function oldNavbar() {
  return (
    <>
      <ul>
        <li>
          <h2>Hauptmenü</h2>
        </li>
        <li>
          <NavLink activeClassName="activelink" to={routes.dashboard()}>
            <FaIcons.FaHome />
            Dashboard
          </NavLink>
        </li>
        <li>
          <button
            className={dropdown1 ? 'open' : null}
            onClick={() => {
              setdropdown1(!dropdown1)
            }}
          >
            <FaIcons.FaEnvelopeOpenText />
            Formulare / Infos
            <i>
              <FaIcons.FaChevronLeft />
            </i>
          </button>
          <ul className={dropdown1 ? 'scale-100 h-auto' : 'scale-0 h-0'}>
            <li>
              <NavLink activeClassName="activelink" to={routes.forms()}>
                <FaIcons.FaPen />
                Formulare
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activelink" to={routes.pricelist()}>
                <FaIcons.FaDollarSign />
                Preislisten
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activelink" to={routes.summary()}>
                <FaIcons.FaPalette />
                Zusammenfassungen
              </NavLink>
            </li>

            {/* <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.vacationrequest()}
                  >
                    <FaIcons.FaUmbrellaBeach />
                    Urlaub
                  </NavLink>
                </li>
                {currentUser.roles === 'Supporter' ||
                currentUser.roles === 'Supportleitung' ||
                currentUser.roles === 'Entwickler' ||
                currentUser.roles === 'Administrator' ? (
                  <li>
                    <NavLink
                      activeClassName="activelink"
                      to={routes.traineereview()}
                    >
                      <FaIcons.FaSchool />
                      Probe-Bewertung
                    </NavLink>
                  </li>
                ) : null} */}
          </ul>
        </li>

        <li>
          <NavLink activeClassName="activelink" to={routes.acpTags()}>
            <FaIcons.FaTags />
            ACP Tags
          </NavLink>
        </li>
        {currentUser.roles === 'Supporter' ||
          currentUser.roles === 'Supportleitung' ||
          currentUser.roles === 'Entwickler' ||
          currentUser.roles === 'Moderatorleitung' ||
          currentUser.roles === 'Administrator' ||
          currentUser.roles === 'Operator' ? (
          <li>
            <NavLink activeClassName="activelink" to={routes.dismissedcases()}>
              <FaIcons.FaTimesCircle />
              Abgelehnte Fälle
            </NavLink>
          </li>
        ) : null}
        <li>
          <h2>Supporter-Bereich</h2>
        </li>

        {/* <li>
              <button
                className={dropdownhelprules ? 'open' : null}
                onClick={() => {
                  setdropdownhelprules(!dropdownhelprules)
                }}
              >
                <FaIcons.FaHandsHelping />
                Hilfestellungen & Regeln
                <i>
                  <FaIcons.FaChevronLeft />
                </i>
              </button>
              <ul
                className={
                  dropdownhelprules ? 'scale-100 h-auto' : 'scale-0 h-0'
                }
              >
                <li>
                  <NavLink activeClassName="activelink" to={routes.rules()}>
                    <FaIcons.FaBook />
                    Grundsätze
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="activelink" to={routes.acprules()}>
                    <FaIcons.FaTools />
                    ACP-Regeln
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="activelink" to={routes.helprules()}>
                    <FaIcons.FaHandHoldingHeart />
                    Hilfestellungen
                  </NavLink>
                </li>
              </ul>
            </li> */}
        <li>
          <NavLink activeClassName="activelink" to={routes.rules()}>
            <FaIcons.FaBook />
            Grundsätze
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activelink" to={routes.acprules()}>
            <FaIcons.FaTools />
            ACP-Regeln
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activelink" to={routes.helprules()}>
            <FaIcons.FaHandHoldingHeart />
            Hilfestellungen
          </NavLink>
        </li>
        <li>
          <button>
            <FaIcons.FaSms />
            Mitteilungen
            {/* <i>
                  <FaIcons.FaChevronLeft />
                </i> */}
          </button>
        </li>
        <li>
          <h2>Moderations-Bereich</h2>
        </li>
        {/* <li>
              <button>
                <FaIcons.FaHandsHelping />
                Hilfestellungen & Regeln
                <i>
                  <FaIcons.FaChevronLeft />
                </i>
              </button>
            </li> */}
        <li>
          <NavLink activeClassName="activelink" to={routes.rules()}>
            <FaIcons.FaBook />
            Grundsätze
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activelink" to={routes.acprules()}>
            <FaIcons.FaTools />
            ACP-Regeln
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activelink" to={routes.helprules()}>
            <FaIcons.FaHandHoldingHeart />
            Hilfestellungen
          </NavLink>
        </li>
        <li>
          <button>
            <FaIcons.FaSms />
            Mitteilungen
            {/* <i>
                  <FaIcons.FaChevronLeft />
                </i> */}
          </button>
        </li>
        <li>
          <button>
            <FaIcons.FaShieldAlt />
            Timeban-Reminder
            {/* <i>
                  <FaIcons.FaChevronLeft />
                </i> */}
          </button>
        </li>
        <li>
          <h2>Leitungs-Bereich</h2>
        </li>
        {/* <li>
              <button
                onClick={() => {
                  setdropdownadmintool(!dropdownadmintool)
                }}
                className={dropdownadmintool ? 'open' : null}
              >
                <FaIcons.FaUserTie />
                Admintool
                <i>
                  <FaIcons.FaChevronLeft />
                </i>
              </button>
              <ul
                className={
                  dropdownadmintool ? 'scale-100 h-auto' : 'scale-0 h-0'
                }
              >

                <li></li>
                <li></li>
              </ul>
            </li> */}
        <li>
          <NavLink activeClassName="activelink" to={routes.adminDashboard()}>
            <FaIcons.FaUserTie />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activelink" to={routes.adminNews()}>
            <FaIcons.FaNewspaper />
            News
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activelink" to={routes.adminInfopanels()}>
            <FaIcons.FaInfoCircle />
            Infopanels
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activelink" to={routes.adminUserSearch()}>
            <FaIcons.FaUserFriends />
            Benutzerverwaltung
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activelink" to="">
            <FaIcons.FaFile />
            Formularantworten
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activelink" to="">
            <FaIcons.FaUsers />
            Benutzerliste (Supporter)
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activelink" to="">
            <FaIcons.FaUsers />
            Benutzerliste (Moderatoren)
          </NavLink>
        </li>
        {/* <li>
              <button
                className={dropdown2 ? 'open' : null}
                onClick={() => {
                  setdropdown2(!dropdown2)
                }}
              >
                <FaIcons.FaInfoCircle />
                Informationen
                <i>
                  <FaIcons.FaChevronLeft />
                </i>
              </button>
              <ul className={dropdown2 ? 'scale-100 h-auto' : 'scale-0 h-0'}>
                <li>
                  <NavLink activeClassName="activelink" to={routes.rules()}>
                    <FaIcons.FaToiletPaper />
                    Grundsätze
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.assistance()}
                  >
                    <FaIcons.FaHireAHelper />
                    Hilfestellungen
                  </NavLink>
                </li>
              </ul>
            </li> */}

        {/* {currentUser.roles === 'Supportleitung' ||
            currentUser.roles === 'Moderatorleitung' ||
            currentUser.roles === 'Operator' ||
            currentUser.roles === 'Administrator' ||
            currentUser.roles === 'Entwickler' ? (
              <li>
                <button
                  className={dropdownadmin ? 'open' : null}
                  onClick={() => {
                    setdropdownadmin(!dropdownadmin)
                  }}
                >
                  <FaIcons.FaKey />
                  Admin
                  <i>
                    <FaIcons.FaChevronLeft />
                  </i>
                </button>
                <ul
                  className={dropdownadmin ? 'scale-100 h-auto' : 'scale-0 h-0'}
                >
                  <li>
                    <NavLink
                      activeClassName="activelink"
                      to={routes.adminDashboard()}
                    >
                      <FaIcons.FaHome />
                      Dashboard - Admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="activelink"
                      to={routes.adminForms()}
                    >
                      <FaIcons.FaEnvelopeOpenText />
                      Formulare - Admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="activelink"
                      to={routes.adminUsers()}
                    >
                      <FaIcons.FaUser />
                      Benutzer - Admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="activelink"
                      to={routes.adminInfopanels()}
                    >
                      <FaIcons.FaInfoCircle />
                      Infopanel - Admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="activelink"
                      to={routes.adminUserSearch()}
                    >
                      <FaIcons.FaSearch />
                      Benutzersuche - Admin
                    </NavLink>
                  </li>
                  {currentUser.roles === 'Entwickler' ? (
                    <li>
                      <NavLink
                        activeClassName="activelink"
                        to={routes.adminDeveloperActions()}
                      >
                        <FaIcons.FaCogs />
                        Entwickleraktionen - Admin
                      </NavLink>
                    </li>
                  ) : null}
                  {currentUser.roles === 'Entwickler' ? (
                    <li>
                      <NavLink
                        activeClassName="activelink"
                        to={routes.hosterinfo()}
                      >
                        <FaIcons.FaInfo />
                        Hosterinfo - Admin
                      </NavLink>
                    </li>
                  ) : null}
                </ul>
              </li>
            ) : null} */}
        {currentUser.roles === 'Entwickler' ? (
          <>
            <li>
              <h2>Entwickler-Bereich</h2>
            </li>

            {/* <li>
                  <button
                    className={dropdowndeveloper ? 'open' : null}
                    onClick={() => {
                      setdropdowndeveloper(!dropdowndeveloper)
                    }}
                  >
                    <FaIcons.FaDove />
                    Entwickler
                    <i>
                      <FaIcons.FaChevronLeft />
                    </i>
                  </button>
                  <ul
                    className={
                      dropdowndeveloper ? 'scale-100 h-auto' : 'scale-0 h-0'
                    }
                  >
                    <li>
                      <NavLink
                        activeClassName="activeLink"
                        to={routes.developerTodolist()}
                      >
                        <FaIcons.FaTasks />
                        Todoliste
                      </NavLink>
                    </li>
                  </ul>
                </li> */}
            <li>
              <NavLink
                activeClassName="activeLink"
                to={routes.developerTodolist()}
              >
                <FaIcons.FaTasks />
                Todoliste
              </NavLink>
            </li>
          </>
        ) : null}
        <li>
          <h2>System-Bereich</h2>
        </li>
        {/* <li>
              <button
                className={dropdownsystem ? 'open' : null}
                onClick={() => {
                  setdropdownsystem(!dropdownsystem)
                }}
              >
                <FaIcons.FaCog />
                System
                <i>
                  <FaIcons.FaChevronLeft />
                </i>
              </button>
              <ul
                className={dropdownsystem ? 'scale-100 h-auto' : 'scale-0 h-0'}
              >
                <li>
                  <NavLink
                    activeClassName="activelink"
                    to={routes.changelogs()}
                  >
                    <FaIcons.FaHistory />
                    Changelogs
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="activelink" to={routes.bugreport()}>
                    <FaIcons.FaBug />
                    Bugreport
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="activelink" to={routes.credits()}>
                    <FaIcons.FaCreditCard />
                    Credits
                  </NavLink>
                </li>
              </ul>
            </li> */}
        <li>
          <NavLink activeClassName="activelink" to={routes.changelogs()}>
            <FaIcons.FaHistory />
            Changelogs
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activelink" to={routes.bugreport()}>
            <FaIcons.FaBug />
            Bugreport
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activelink" to={routes.credits()}>
            <FaIcons.FaCreditCard />
            Credits
          </NavLink>
        </li>

        <li className="mt-auto">
          <button
            onClick={() => {
              logOut()
            }}
          >
            <FaIcons.FaSignOutAlt />
            {currentUser.email} - Ausloggen
          </button>
        </li>
      </ul>
    </>
  )
}

export default SidebarLayout
