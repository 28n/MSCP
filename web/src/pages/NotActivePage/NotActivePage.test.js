import { render } from '@redwoodjs/testing/web'

import NotActivePage from './NotActivePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NotActivePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotActivePage />)
    }).not.toThrow()
  })
})
