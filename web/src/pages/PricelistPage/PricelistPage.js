import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import * as FaIcons from 'react-icons/fa'
import { useState } from 'react'
import PricelistsCell from 'src/components/PricelistsCell'

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

      <PricelistsCell />
    </>
  )
}

export default PricelistPage
