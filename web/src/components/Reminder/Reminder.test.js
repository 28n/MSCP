import { render } from '@redwoodjs/testing/web'

import Reminder from './Reminder'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Reminder', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Reminder />)
    }).not.toThrow()
  })
})
