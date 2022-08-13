import { render } from '@redwoodjs/testing/web'

import AdminVacation from './AdminVacation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminVacation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminVacation />)
    }).not.toThrow()
  })
})
