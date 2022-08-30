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

      <AdminVacationCell />
      <AdminTraineereviewCell />
      <AdminMeetingSignoffCell />
    </>
  )
}

export default AdminFormsPage
