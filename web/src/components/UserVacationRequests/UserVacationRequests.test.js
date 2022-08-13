import { render } from '@redwoodjs/testing/web'

import UserVacationRequests from './UserVacationRequests'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserVacationRequests', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserVacationRequests />)
    }).not.toThrow()
  })
})
