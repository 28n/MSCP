import { render } from '@redwoodjs/testing/web'

import AdminInfopanelsPage from './AdminInfopanelsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminInfopanelsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminInfopanelsPage />)
    }).not.toThrow()
  })
})
