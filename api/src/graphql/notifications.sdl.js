export const schema = gql`
  type Notification {
    id: Int!
    userName: String!
    createdBy: String!
    createdAt: DateTime!
    title: String!
    content: String!
    isRead: Boolean!
  }

  type Query {
    notifications: [Notification!]! @requireAuth
    notification(id: Int!): Notification @requireAuth
    userNotifications(userName: String!): [Notification!]! @requireAuth
    globalNotifications: [Notification!]! @requireAuth
  }

  input CreateNotificationInput {
    userName: String!
    createdBy: String!
    title: String!
    content: String!
    isRead: Boolean!
  }

  input createForAllActiveUsersInput {
    title: String
    content: String
    isRead: Boolean
    createdBy: String
  }

  input UpdateNotificationInput {
    userName: String
    createdBy: String
    title: String
    content: String
    isRead: Boolean
  }

  type Mutation {
    createNotification(input: CreateNotificationInput!): Notification!
      @requireAuth
    updateNotification(
      id: Int!
      input: UpdateNotificationInput!
    ): Notification! @requireAuth
    deleteNotification(id: Int!): Notification! @requireAuth
  }
`
