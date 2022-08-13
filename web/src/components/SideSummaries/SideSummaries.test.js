import { render } from '@redwoodjs/testing/web'

import SideSummaries from './SideSummaries'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SideSummaries', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SideSummaries />)
    }).not.toThrow()
  })
})
