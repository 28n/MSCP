import { render } from '@redwoodjs/testing/web'

import Changelog from './Changelog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Changelog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Changelog />)
    }).not.toThrow()
  })
})
