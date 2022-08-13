import { render } from '@redwoodjs/testing/web'

import AdminRecentComments from './AdminRecentComments'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminRecentComments', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminRecentComments />)
    }).not.toThrow()
  })
})
