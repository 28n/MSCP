import { render } from '@redwoodjs/testing/web'

import AdminFormsPage from './AdminFormsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminFormsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminFormsPage />)
    }).not.toThrow()
  })
})
