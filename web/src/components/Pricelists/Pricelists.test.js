import { render } from '@redwoodjs/testing/web'

import Pricelists from './Pricelists'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Pricelists', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Pricelists />)
    }).not.toThrow()
  })
})
