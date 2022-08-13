import { render } from '@redwoodjs/testing/web'

import AdminNewsPage from './AdminNewsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminNewsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminNewsPage />)
    }).not.toThrow()
  })
})
