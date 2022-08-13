import { render } from '@redwoodjs/testing/web'

import AdminRecentCommentsPage from './AdminRecentCommentsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminRecentCommentsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminRecentCommentsPage />)
    }).not.toThrow()
  })
})
