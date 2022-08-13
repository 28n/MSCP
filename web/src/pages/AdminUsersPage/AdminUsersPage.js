import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AdminTraineeUsersCell from 'src/components/AdminTraineeUsersCell'

const AdminUsersPage = () => {
  return (
    <>
      <MetaTags title="AdminUsers" description="AdminUsers page" />

      <h1>AdminUsersPage</h1>
      <AdminTraineeUsersCell />
    </>
  )
}

export default AdminUsersPage
