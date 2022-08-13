import { render } from '@redwoodjs/testing/web'

import PricelistPage from './PricelistPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PricelistPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PricelistPage />)
    }).not.toThrow()
  })
})
