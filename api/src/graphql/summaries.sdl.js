export const schema = gql`
  type Summary {
    id: Int!
    content: String!
    createdAt: DateTime!
    side: String!
    title: String!
  }

  type Query {
    summaries: [Summary!]! @requireAuth
    summary(id: Int!): Summary @requireAuth
    sideSummaries(side: String!): [Summary!] @requireAuth
  }

  input CreateSummaryInput {
    content: String!
    side: String!
    title: String!
  }

  input UpdateSummaryInput {
    content: String
    side: String
    title: String
  }

  type Mutation {
    createSummary(input: CreateSummaryInput!): Summary! @requireAuth
    updateSummary(id: Int!, input: UpdateSummaryInput!): Summary! @requireAuth
    deleteSummary(id: Int!): Summary! @requireAuth
  }
`
