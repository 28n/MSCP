import { render } from '@redwoodjs/testing/web'

import NotAuthenticatedPage from './NotAuthenticatedPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NotAuthenticatedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotAuthenticatedPage />)
    }).not.toThrow()
  })
})
