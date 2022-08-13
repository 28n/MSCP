export const schema = gql`
  type Bug {
    id: Int!
    title: String!
    description: String!
    createdAt: DateTime!
    createdBy: String!
    isValid: Boolean!
    isKnown: Boolean!
    isFixed: Boolean!
  }

  type Query {
    bugs: [Bug!]! @requireAuth
    bug(id: Int!): Bug @requireAuth
    knownBugs: [Bug!]! @requireAuth
    nonFixedBugs: [Bug!]! @requireAuth
  }

  input CreateBugInput {
    title: String!
    description: String!
    createdBy: String!
  }

  input UpdateBugInput {
    title: String
    description: String
    createdBy: String
    isValid: Boolean
    isKnown: Boolean
    isFixed: Boolean
  }

  type Mutation {
    createBug(input: CreateBugInput!): Bug! @requireAuth
    updateBug(id: Int!, input: UpdateBugInput!): Bug! @requireAuth
    deleteBug(id: Int!): Bug! @requireAuth
  }
`
