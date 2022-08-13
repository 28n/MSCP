import { render } from '@redwoodjs/testing/web'

import DeveloperTodolistPage from './DeveloperTodolistPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DeveloperTodolistPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeveloperTodolistPage />)
    }).not.toThrow()
  })
})
