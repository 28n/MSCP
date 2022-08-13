import { Link, routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const NotActivePage = () => {
  const { logOut } = useAuth()
  const click = async () => {
    console.log('logout');
    logOut()
    navigate(routes.login())
  }
  return (
    <>
      <MetaTags title="NotActive" description="NotActive page" />

      <div className='flex flex-col items-center p-2'>
        <h1 className='text-red-500 font-bold text-lg'>Dein Account ist nicht aktiviert</h1>
        <fieldset className='flex flex-col items-center mt-4 border rounded p-1'>
          <legend className='ml-4'>
            Woran kanns liegen?
          </legend>
          Du bist wahrscheinlich kein Mitglied der Operative mehr. Deine Anmeldedaten werden behalten, damit sie eben ... nicht verloren gehen.
          <br />
          Wenn du wieder Lust hast anzufangen, meld dich bei einer der Leitungen. Vielleicht wird dein MSCP dann sogar wieder freigeschaltet.
        </fieldset>
        <button onClick={() => { click() }} className='button mt-8' id="red">Abmelden</button>
      </div>
    </>
  )
}

export default NotActivePage
