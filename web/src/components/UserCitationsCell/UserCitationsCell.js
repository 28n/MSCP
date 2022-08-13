export const QUERY = gql`
  query UserCitationsQuery($userName: String!) {
    userCitations(userName: $userName) {
      id
      content
      createdAt
      createdBy
      createdByRole
      userName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Du hattest in der letzten Zeit keine Meldeaufforderung.</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import UserCitations from '../UserCitations/UserCitations'

export const Success = ({ userCitations }) => {
  return <UserCitations userCitations={userCitations} />
}
