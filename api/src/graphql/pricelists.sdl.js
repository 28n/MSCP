export const schema = gql`
  type Pricelist {
    id: Int!
    title: String!
    content: String!
    createdAt: DateTime!
    createdBy: String!
    createdByRole: String!
    sortOrder: Int!
  }

  type Query {
    pricelists: [Pricelist!]! @requireAuth
    pricelist(id: Int!): Pricelist @requireAuth
  }

  input CreatePricelistInput {
    title: String!
    content: String!
    createdBy: String!
    createdByRole: String!
    sortOrder: Int!
  }

  input UpdatePricelistInput {
    title: String
    content: String
    createdBy: String
    createdByRole: String
    sortOrder: Int
  }

  type Mutation {
    createPricelist(input: CreatePricelistInput!): Pricelist! @requireAuth
    updatePricelist(id: Int!, input: UpdatePricelistInput!): Pricelist!
      @requireAuth
    deletePricelist(id: Int!): Pricelist! @requireAuth
  }
`
