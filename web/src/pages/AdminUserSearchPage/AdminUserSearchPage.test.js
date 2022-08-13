import { render } from '@redwoodjs/testing/web'

import AdminUserSearchPage from './AdminUserSearchPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminUserSearchPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminUserSearchPage />)
    }).not.toThrow()
  })
})
