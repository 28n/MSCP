import React from "react"
import { useState, useEffect } from "react"
import * as FaIcons from 'react-icons/fa'

const Pricelists = ({ pricelists }) => {
  let len = pricelists.length
  let oddlists = []
  let evenlists = []
  for (let i = 0; i < len; i++) {
    if (pricelists[i].id % 2) {
      oddlists.push(pricelists[i])
    } else {
      evenlists.push(pricelists[i])
    }
  }
  return (
    <>
      <div className="dashboard-content">
        <div className="col">
          {oddlists.map((val) => {
            const [open, setOpen] = useState(false)
            const setContent = (content) => {
              return { __html: content }
            }
            return (
              <div className="infocard">
                <div className="header">
                  <span>{val.title}</span>
                </div>
                <div className="content">
                  <div className={open ? "h-100 w-full flex" : "h-0 w-full hidden"} dangerouslySetInnerHTML={setContent(val.content)}>
                  </div>
                  <button className="mt-2" onClick={() => { setOpen(!open) }}>{open ? <FaIcons.FaChevronUp /> : <FaIcons.FaChevronDown />}</button>
                </div>
              </div>
            )
          })}
        </div>
        <div className="col">
          {evenlists.map((val) => {
            const [open, setOpen] = useState(false)
            const setContent = (content) => {
              return { __html: content }
            }
            return (
              <div className="infocard">
                <div className="header">
                  <span>{val.title}</span>
                </div>
                <div className="content">
                  <div className={open ? "h-100 w-full flex" : "h-0 w-full hidden"} dangerouslySetInnerHTML={setContent(val.content)}></div>
                  <button className="mt-2" onClick={() => { setOpen(!open) }}>{open ? <FaIcons.FaChevronUp /> : <FaIcons.FaChevronDown />}</button>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default Pricelists

{/*

      <div className="grid grid-cols-2 gap-4 h-fit w-full">
        {pricelists.map((val) => {
          const [open, setOpen] = useState(false)
          const setContent = (content) => {
            return { __html: content }
          }
          return (
            <div className="infocard">
              <div className="header">
                <span>{val.title}</span>
              </div>
              <div className="content">
                <div className={open ? "h-100 flex" : "h-0 hidden"} dangerouslySetInnerHTML={setContent(val.content)}></div>
                <button className="mt-2" onClick={() => { setOpen(!open) }}>{open ? <FaIcons.FaChevronUp /> : <FaIcons.FaChevronDown />}</button>
              </div>
            </div>
          )
        })}
      </div>

*/}
