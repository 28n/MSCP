import { render } from '@redwoodjs/testing/web'

import AdminTraineereview from './AdminTraineereview'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminTraineereview', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminTraineereview />)
    }).not.toThrow()
  })
})
