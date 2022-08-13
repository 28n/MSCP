export const QUERY = gql`
  query SideSummariesQuery($mode: String!) {
    sideSummaries(side: $mode) {
      id
      content
      createdAt
      side
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import SideSummaries from '../SideSummaries/SideSummaries'

export const Success = ({ sideSummaries }) => {
  return <SideSummaries summaries={sideSummaries} />
}
