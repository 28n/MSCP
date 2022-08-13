export const schema = gql`
  type Comment {
    id: Int!
    content: String!
    createdAt: DateTime!
    createdBy: String!
    createdByRole: String!
    userName: String!
    userId: Int!
  }

  type Query {
    comments: [Comment!]! @requireAuth
    comment(id: Int!): Comment @requireAuth
    userComments(userName: String!): [Comment!]! @requireAuth
  }

  input CreateCommentInput {
    content: String!
    createdBy: String!
    createdByRole: String!
    userName: String!
    userId: Int!
  }

  input UpdateCommentInput {
    content: String
    createdBy: String
    createdByRole: String
    userName: String
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateComment(id: Int!, input: UpdateCommentInput!): Comment! @requireAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`
