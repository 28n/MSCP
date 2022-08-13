export const schema = gql`
  type DismissedCaseComment {
    id: Int!
    caseId: Int!
    opName: String!
    opRole: String!
    content: String!
    createdAt: DateTime!
  }

  type Query {
    dismissedCaseComments: [DismissedCaseComment!]! @requireAuth
    dismissedCaseComment(id: Int!): DismissedCaseComment @requireAuth
    dismissedCaseCommentsPerCase(caseId: Int!): [DismissedCaseComment!]
      @requireAuth
  }

  input CreateDismissedCaseCommentInput {
    caseId: Int!
    opName: String!
    opRole: String!
    content: String!
  }

  input UpdateDismissedCaseCommentInput {
    caseId: Int
    opName: String
    opRole: String
    content: String
  }

  type Mutation {
    createDismissedCaseComment(
      input: CreateDismissedCaseCommentInput!
    ): DismissedCaseComment! @requireAuth
    updateDismissedCaseComment(
      id: Int!
      input: UpdateDismissedCaseCommentInput!
    ): DismissedCaseComment! @requireAuth
    deleteDismissedCaseComment(id: Int!): DismissedCaseComment! @requireAuth
  }
`
