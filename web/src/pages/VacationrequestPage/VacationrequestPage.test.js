import { render } from '@redwoodjs/testing/web'

import VacationrequestPage from './VacationrequestPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VacationrequestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VacationrequestPage />)
    }).not.toThrow()
  })
})
