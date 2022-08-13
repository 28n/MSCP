import { render } from '@redwoodjs/testing/web'

import SideMessages from './SideMessages'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SideMessages', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SideMessages />)
    }).not.toThrow()
  })
})
