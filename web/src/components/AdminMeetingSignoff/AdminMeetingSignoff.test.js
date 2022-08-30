import { render } from '@redwoodjs/testing/web'

import AdminMeetingSignoff from './AdminMeetingSignoff'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminMeetingSignoff', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminMeetingSignoff />)
    }).not.toThrow()
  })
})
