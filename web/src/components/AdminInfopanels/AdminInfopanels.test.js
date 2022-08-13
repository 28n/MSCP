import { render } from '@redwoodjs/testing/web'

import AdminInfopanels from './AdminInfopanels'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminInfopanels', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminInfopanels />)
    }).not.toThrow()
  })
})
