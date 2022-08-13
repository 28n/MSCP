import { render } from '@redwoodjs/testing/web'

import AdminUserProfilePage from './AdminUserProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminUserProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminUserProfilePage />)
    }).not.toThrow()
  })
})
