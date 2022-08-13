import { render } from '@redwoodjs/testing/web'

import Infopanel from './Infopanel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Infopanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Infopanel />)
    }).not.toThrow()
  })
})
