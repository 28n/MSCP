import { render } from '@redwoodjs/testing/web'

import EditableRulesPanel from './EditableRulesPanel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditableRulesPanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditableRulesPanel />)
    }).not.toThrow()
  })
})
