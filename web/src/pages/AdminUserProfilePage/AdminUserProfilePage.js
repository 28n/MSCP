import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import * as FaIcons from 'react-icons/fa'
import { Form, TextAreaField, Submit } from '@redwoodjs/forms'
import AdminUserCell from 'src/components/AdminUserCell'
import { useEffect } from 'react'

const AdminUserProfilePage = ({ id }) => {
  return (
    <>
      <MetaTags title="AdminUserProfile" description="AdminUserProfile page" />

      <AdminUserCell id={parseInt(id)} />
    </>
  )
}

export default AdminUserProfilePage
