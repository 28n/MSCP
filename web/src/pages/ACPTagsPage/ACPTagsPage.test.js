import { render } from '@redwoodjs/testing/web'

import AcpTagsPage from './AcpTagsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AcpTagsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AcpTagsPage />)
    }).not.toThrow()
  })
})
