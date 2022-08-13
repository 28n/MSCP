import { render } from '@redwoodjs/testing/web'

import BugreportPage from './BugreportPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BugreportPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BugreportPage />)
    }).not.toThrow()
  })
})
