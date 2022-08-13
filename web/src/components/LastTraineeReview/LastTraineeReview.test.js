import { render } from '@redwoodjs/testing/web'

import LastTraineeReview from './LastTraineeReview'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LastTraineeReview', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LastTraineeReview />)
    }).not.toThrow()
  })
})
