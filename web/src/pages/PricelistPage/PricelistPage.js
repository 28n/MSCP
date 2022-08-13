import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import * as FaIcons from 'react-icons/fa'
import { useState } from 'react'

const PricelistPage = () => {
  const [ctrl, setCtrl] = useState(false)

  const [panel1, setpanel1] = useState(false)

  const openPanels = () => {
    setCtrl(true)

    setpanel1(true)
  }
  const closePanels = () => {
    setCtrl(false)

    setpanel1(false)
  }
  return (
    <>
      <MetaTags title="Preislisten" description="Pricelist page" />

      <h1>Preislisten</h1>
      <h2>Hier findest du alle Preislisten!</h2>

      <button onClick={ctrl ? (() => closePanels()) : (() => openPanels())} className="button" id="black">
        Alle Panels umschalten (Suche mit STRG+F möglich)
      </button>
      <div className="dashboard-content pricelists">
        <div className="col">
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content">
              {panel1 ? (
                <>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Preis</th>
                        <th>Klasse</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Kaldwin</td>
                        <td>69,42$</td>
                        <td>MRaave</td>
                      </tr>
                    </tbody>
                  </table>
                </>
              ) : null}
              <button
                className="mt-1"
                onClick={() => {
                  setpanel1(!panel1)
                }}
              >
                {panel1 ? <FaIcons.FaChevronUp /> : <FaIcons.FaChevronDown />}
              </button>
            </div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
        </div>
        <div className="col">
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content">ok</div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Preise</span>
            </div>
            <div className="content"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricelistPage
