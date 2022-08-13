import DismissedCases from '../DismissedCases/DismissedCases'

export const QUERY = gql`
  query DismissedCasesQuery {
    cases: dismissedCases {
      id
      userName
      userId
      reason
      evidence
      opName
      opRole
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ cases }) => {
  return <DismissedCases cases={cases} />
}
