import { Link, routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import EditInfopanelCell from 'src/components/EditInfopanelCell/EditInfopanelCell'
import {useParams} from '@redwoodjs/router'

const EditInfopanelPage = () => {
  const { id } = useParams()
  const returnToHome = () => {
    navigate(routes.adminInfopanels())
  }
  return (
    <>
      <MetaTags title="EditInfopanel" description="EditInfopanel page" />

      <h1>Panel editieren</h1>
      <button onClick={()=>{returnToHome()}} className='button w-fit' id="black">Zurück zur Übersicht</button>
      <EditInfopanelCell id={id} />
    </>
  )
}

export default EditInfopanelPage
