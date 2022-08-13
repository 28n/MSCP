import { render } from '@redwoodjs/testing/web'

import ChangelogsPage from './ChangelogsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChangelogsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChangelogsPage />)
    }).not.toThrow()
  })
})
