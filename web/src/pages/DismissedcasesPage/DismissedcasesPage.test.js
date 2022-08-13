import { render } from '@redwoodjs/testing/web'

import DismissedcasesPage from './DismissedcasesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DismissedcasesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DismissedcasesPage />)
    }).not.toThrow()
  })
})
