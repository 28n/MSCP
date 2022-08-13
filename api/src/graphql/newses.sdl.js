export const schema = gql`
  type News {
    id: Int!
    title: String!
    content: String!
    createdAt: DateTime!
    createdBy: String!
    createdByRole: String!
    side: String!
  }

  type Query {
    newses: [News!]! @requireAuth
    news(id: Int!): News @requireAuth
    sidenewses(side: String!): [News!]! @requireAuth
  }

  input CreateNewsInput {
    title: String!
    content: String!
    createdBy: String!
    createdByRole: String!
    side: String!
  }

  input UpdateNewsInput {
    title: String
    content: String
    createdBy: String
    createdByRole: String
    side: String
  }

  type Mutation {
    createNews(input: CreateNewsInput!): News! @requireAuth
    updateNews(id: Int!, input: UpdateNewsInput!): News! @requireAuth
    deleteNews(id: Int!): News! @requireAuth
  }
`
