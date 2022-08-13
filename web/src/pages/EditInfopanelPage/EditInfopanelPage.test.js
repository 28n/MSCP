import { render } from '@redwoodjs/testing/web'

import EditInfopanelPage from './EditInfopanelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditInfopanelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditInfopanelPage />)
    }).not.toThrow()
  })
})
