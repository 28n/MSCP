import { render } from '@redwoodjs/testing/web'

import Newses from './Newses'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Newses', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Newses />)
    }).not.toThrow()
  })
})
