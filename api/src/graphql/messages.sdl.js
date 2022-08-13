export const schema = gql`
  type Message {
    id: Int!
    title: String!
    content: String!
    createdAt: DateTime!
    createdBy: String!
    createdByRole: String!
    side: String!
  }

  type Query {
    messages: [Message!]! @requireAuth
    message(id: Int!): Message @requireAuth
    sideMessages(side: String!): [Message!]! @requireAuth
  }

  input CreateMessageInput {
    title: String!
    content: String!
    createdBy: String!
    createdByRole: String!
    side: String!
  }

  input UpdateMessageInput {
    title: String
    content: String
    createdBy: String
    createdByRole: String
    side: String
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message! @requireAuth
    updateMessage(id: Int!, input: UpdateMessageInput!): Message! @requireAuth
    deleteMessage(id: Int!): Message! @requireAuth
  }
`
