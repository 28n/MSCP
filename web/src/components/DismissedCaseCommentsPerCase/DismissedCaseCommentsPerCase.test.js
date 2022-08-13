import { render } from '@redwoodjs/testing/web'

import DismissedCaseCommentsPerCase from './DismissedCaseCommentsPerCase'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DismissedCaseCommentsPerCase', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DismissedCaseCommentsPerCase />)
    }).not.toThrow()
  })
})
