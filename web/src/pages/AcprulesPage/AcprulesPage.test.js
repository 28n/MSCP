import { render } from '@redwoodjs/testing/web'

import AcprulesPage from './AcprulesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AcprulesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AcprulesPage />)
    }).not.toThrow()
  })
})
