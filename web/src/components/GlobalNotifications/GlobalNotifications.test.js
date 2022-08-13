import { render } from '@redwoodjs/testing/web'

import GlobalNotifications from './GlobalNotifications'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GlobalNotifications', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GlobalNotifications />)
    }).not.toThrow()
  })
})
