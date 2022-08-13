import { render } from '@redwoodjs/testing/web'

import UserTraineeReviews from './UserTraineeReviews'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserTraineeReviews', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserTraineeReviews />)
    }).not.toThrow()
  })
})
