export const schema = gql`
  type Citation {
    id: Int!
    content: String!
    createdAt: DateTime!
    createdBy: String!
    createdByRole: String!
    userName: String!
  }

  type Query {
    citations: [Citation!]! @requireAuth
    citation(id: Int!): Citation @requireAuth
    userCitations(userName: String!): [Citation!] @requireAuth
  }

  input CreateCitationInput {
    content: String!
    createdBy: String!
    createdByRole: String!
    userName: String!
  }

  input UpdateCitationInput {
    content: String
    createdBy: String
    createdByRole: String
    userName: String
  }

  type Mutation {
    createCitation(input: CreateCitationInput!): Citation! @requireAuth
    updateCitation(id: Int!, input: UpdateCitationInput!): Citation!
      @requireAuth
    deleteCitation(id: Int!): Citation! @requireAuth
  }
`
