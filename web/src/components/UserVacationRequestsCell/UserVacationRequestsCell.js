export const QUERY = gql`
  query UserVacationRequestsQuery($userName: String!) {
    userVacationRequests(userName: $userName) {
      id
      userName
      startDate
      endDate
      status
      createdAt
      reason
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import UserVacationRequests from '../UserVacationRequests/UserVacationRequests'

export const Success = ({ userVacationRequests, refetch }) => {
  return (
    <UserVacationRequests
      userVacationRequests={userVacationRequests}
      refetch={refetch}
    />
  )
}
