export const QUERY = gql`
  query FindAdminTraineereviewQuery {
    traineeReviews {
      id
      userName
      overallRating
      rulesRating
      communicationRating
      commentRating
      review
      createdAt
      creator
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import AdminTraineereview from '../AdminTraineereview/AdminTraineereview'

export const Success = ({ traineeReviews }) => {
  return <AdminTraineereview traineeReviews={traineeReviews} />
}
