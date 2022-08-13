export const QUERY = gql`
  query FindDismissedCaseCommentsPerCaseQuery($caseId: Int!) {
    dismissedCaseCommentsPerCase: dismissedCaseCommentsPerCase(
      caseId: $caseId
    ) {
      id
      caseId
      opName
      opRole
      content
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <></>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import DismissedCaseCommentsPerCase from 'src/components/DismissedCaseCommentsPerCase'

export const Success = ({ dismissedCaseCommentsPerCase }) => {
  return (
    <DismissedCaseCommentsPerCase comments={dismissedCaseCommentsPerCase} />
  )
}
