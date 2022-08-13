import { render } from '@redwoodjs/testing/web'

import HosterinfoPage from './HosterinfoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HosterinfoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HosterinfoPage />)
    }).not.toThrow()
  })
})
