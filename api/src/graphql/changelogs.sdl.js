export const schema = gql`
  type Changelog {
    id: Int!
    type: String!
    content: String!
    createdAt: DateTime!
    createdBy: String!
  }

  type Query {
    changelogs: [Changelog!]! @requireAuth
    changelog(id: Int!): Changelog @requireAuth
  }

  input CreateChangelogInput {
    type: String!
    content: String!
    createdBy: String!
    createdAt: DateTime
  }

  input UpdateChangelogInput {
    type: String
    content: String
    createdBy: String
  }

  type Mutation {
    createChangelog(input: CreateChangelogInput!): Changelog! @requireAuth
    updateChangelog(id: Int!, input: UpdateChangelogInput!): Changelog!
      @requireAuth
    deleteChangelog(id: Int!): Changelog! @requireAuth
  }
`
