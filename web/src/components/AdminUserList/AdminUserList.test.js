import { render } from '@redwoodjs/testing/web'

import AdminUserList from './AdminUserList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminUserList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminUserList />)
    }).not.toThrow()
  })
})
