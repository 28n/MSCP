import { render } from '@redwoodjs/testing/web'

import AdminDeveloperActionsPage from './AdminDeveloperActionsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminDeveloperActionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminDeveloperActionsPage />)
    }).not.toThrow()
  })
})
