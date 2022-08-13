export const schema = gql`
  type TraineeReview {
    id: Int!
    userName: String!
    overallRating: Int!
    rulesRating: Int!
    communicationRating: Int!
    commentRating: Int!
    review: String!
    createdAt: DateTime!
    creator: String!
  }

  type Query {
    traineeReviews: [TraineeReview!]! @requireAuth
    traineeReview(id: Int!): TraineeReview @requireAuth
    userTraineeReviews(userName: String!): [TraineeReview!]! @requireAuth
    lastTraineeReview(creator: String!): [TraineeReview!] @requireAuth
  }

  input CreateTraineeReviewInput {
    userName: String!
    overallRating: Int!
    rulesRating: Int!
    communicationRating: Int!
    commentRating: Int!
    review: String!
    creator: String!
  }

  input UpdateTraineeReviewInput {
    userName: String
    overallRating: Int
    rulesRating: Int
    communicationRating: Int
    commentRating: Int
    review: String
    creator: String
  }

  type Mutation {
    createTraineeReview(input: CreateTraineeReviewInput!): TraineeReview!
      @requireAuth
    updateTraineeReview(
      id: Int!
      input: UpdateTraineeReviewInput!
    ): TraineeReview! @requireAuth
    deleteTraineeReview(id: Int!): TraineeReview! @requireAuth
  }
`
