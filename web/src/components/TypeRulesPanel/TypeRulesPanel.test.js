import { render } from '@redwoodjs/testing/web'

import TypeRulesPanel from './TypeRulesPanel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TypeRulesPanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TypeRulesPanel />)
    }).not.toThrow()
  })
})
