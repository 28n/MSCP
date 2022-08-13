import { render } from '@redwoodjs/testing/web'

import UpdateBugs from './UpdateBugs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateBugs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateBugs />)
    }).not.toThrow()
  })
})
