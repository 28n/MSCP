import { render } from '@redwoodjs/testing/web'

import Sidenews from './Sidenews'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Sidenews', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sidenews />)
    }).not.toThrow()
  })
})
