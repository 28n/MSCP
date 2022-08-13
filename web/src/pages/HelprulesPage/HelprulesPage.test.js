import { render } from '@redwoodjs/testing/web'

import HelprulesPage from './HelprulesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HelprulesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HelprulesPage />)
    }).not.toThrow()
  })
})
