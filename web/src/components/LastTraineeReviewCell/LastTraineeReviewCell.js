export const QUERY = gql`
  query LastTraineeReviewQuery($creator: String!) {
    lastTraineeReview(creator: $creator) {
      userName
      overallRating
      rulesRating
      communicationRating
      commentRating
      review
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import LastTraineeReview from 'src/components/LastTraineeReview/LastTraineeReview'

export const Success = ({ lastTraineeReview }) => {
  return <LastTraineeReview lastTraineeReview={lastTraineeReview} />
}
