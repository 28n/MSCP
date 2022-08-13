import { render } from '@redwoodjs/testing/web'

import UserCitations from './UserCitations'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserCitations', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserCitations />)
    }).not.toThrow()
  })
})
