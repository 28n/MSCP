import { render } from '@redwoodjs/testing/web'

import AssistancePage from './AssistancePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AssistancePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AssistancePage />)
    }).not.toThrow()
  })
})
