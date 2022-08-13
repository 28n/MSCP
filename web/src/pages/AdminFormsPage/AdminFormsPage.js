import { MetaTags } from '@redwoodjs/web'
import AdminVacationCell from 'src/components/AdminVacationCell/AdminVacationCell.js'
import AdminTraineereviewCell from 'src/components/AdminTraineereviewCell/AdminTraineereviewCell.js'

const AdminFormsPage = () => {
  return (
    <>
      <MetaTags title="AdminForms" description="AdminForms page" />

      <h1>Formulare verwalten</h1>
      <h2>Hier siehst du nur das, was du sehen darfst. </h2>
      <div className="c">
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </div>
      <div className="c">
        <div className="grid grid-cols-2 gap-1 adminforms">
          <AdminVacationCell />
          <AdminTraineereviewCell />
        </div>
      </div>
    </>
  )
}

export default AdminFormsPage
