import { render } from '@redwoodjs/testing/web'

import AdminUserCitations from './AdminUserCitations'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminUserCitations', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminUserCitations />)
    }).not.toThrow()
  })
})
