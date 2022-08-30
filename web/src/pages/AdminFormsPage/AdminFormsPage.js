import { MetaTags } from '@redwoodjs/web'
import AdminVacationCell from 'src/components/AdminVacationCell/AdminVacationCell.js'
import AdminTraineereviewCell from 'src/components/AdminTraineereviewCell/AdminTraineereviewCell.js'
import AdminMeetingSignoffCell from 'src/components/AdminMeetingSignoffCell/AdminMeetingSignoffCell'

const AdminFormsPage = () => {
  return (
    <>
      <MetaTags title="AdminForms" description="AdminForms page" />

      <h1>Formularantworten</h1>
      <h2>Hier findest du alle Kontaktaufnahmen chronologisch aufgelistet</h2>

      <div className='dashboard-content'>
        <div className='col'>
          <div className='infocard'>
            <div className='header'>
              <span>Die letzten 50 Formularantworten</span>
            </div>
            <div className='content'>
              <div className='grid grid-cols-3 adminforms'>
                <div>
                  <AdminVacationCell />
                </div>
                <div> 
                  <AdminTraineereviewCell />  
                </div>
                <div> 
                  <AdminMeetingSignoffCell />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminFormsPage
