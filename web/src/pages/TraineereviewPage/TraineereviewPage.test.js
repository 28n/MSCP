import { render } from '@redwoodjs/testing/web'

import TraineereviewPage from './TraineereviewPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TraineereviewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TraineereviewPage />)
    }).not.toThrow()
  })
})
