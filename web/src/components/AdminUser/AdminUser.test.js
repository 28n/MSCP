import { render } from '@redwoodjs/testing/web'

import AdminUser from './AdminUser'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminUser', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminUser />)
    }).not.toThrow()
  })
})
