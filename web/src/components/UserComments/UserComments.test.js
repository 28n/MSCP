import { render } from '@redwoodjs/testing/web'

import UserComments from './UserComments'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserComments', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserComments />)
    }).not.toThrow()
  })
})
