export const QUERY = gql`
  query UserTraineeReviewsQuery($userName: String!) {
    userTraineeReviews(userName: $userName) {
      id
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

export const Empty = () => <>0</>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import UserTraineeReviews from 'src/components/UserTraineeReviews'

export const Success = ({ userTraineeReviews }) => {
  return <UserTraineeReviews userTraineeReviews={userTraineeReviews} />
}
