import { render } from '@redwoodjs/testing/web'

import CreditsPage from './CreditsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreditsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreditsPage />)
    }).not.toThrow()
  })
})
