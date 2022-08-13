import { render } from '@redwoodjs/testing/web'

import AllUsers from './AllUsers'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AllUsers', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AllUsers />)
    }).not.toThrow()
  })
})
