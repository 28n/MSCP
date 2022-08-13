import { render } from '@redwoodjs/testing/web'

import DismissedCases from './DismissedCases'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DismissedCases', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DismissedCases />)
    }).not.toThrow()
  })
})
