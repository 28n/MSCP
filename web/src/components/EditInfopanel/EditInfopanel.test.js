import { render } from '@redwoodjs/testing/web'

import EditInfopanel from './EditInfopanel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditInfopanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditInfopanel />)
    }).not.toThrow()
  })
})
