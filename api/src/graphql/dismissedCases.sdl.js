export const schema = gql`
  type DismissedCase {
    id: Int!
    userName: String!
    userId: Int!
    opName: String!
    opRole: String!
    reason: String!
    evidence: String!
    createdAt: DateTime!
  }

  type Query {
    dismissedCases: [DismissedCase!]! @requireAuth
    dismissedCase(id: Int!): DismissedCase @requireAuth
  }

  input CreateDismissedCaseInput {
    userName: String!
    userId: Int!
    opName: String!
    opRole: String!
    reason: String!
    evidence: String!
    timestamp: DateTime!
  }

  input UpdateDismissedCaseInput {
    userName: String
    userId: Int
    opName: String
    opRole: String
    reason: String
    evidence: String
  }

  type Mutation {
    createDismissedCase(input: CreateDismissedCaseInput!): DismissedCase!
      @requireAuth
    updateDismissedCase(
      id: Int!
      input: UpdateDismissedCaseInput!
    ): DismissedCase! @requireAuth
    deleteDismissedCase(id: Int!): DismissedCase! @requireAuth
  }
`
