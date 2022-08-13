export const QUERY = gql`
  query SummariesQuery {
    summaries {
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

import Summaries from '../Summaries/Summaries'

export const Success = ({ summaries }) => {
  return <Summaries summaries={summaries} />
}
