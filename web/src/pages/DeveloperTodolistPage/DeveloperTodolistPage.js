import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DeveloperTodolistPage = () => {
  return (
    <>
      <MetaTags
        title="Todoliste"
        description="DeveloperTodolist page"
      />

      <h1>DeveloperTodolistPage</h1>
      <ul>
        <li>
          1. Infopanel editierbar machen <input type={'checkbox'}></input>
        </li>
      </ul>
    </>
  )
}

export default DeveloperTodolistPage
