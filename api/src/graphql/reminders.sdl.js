export const schema = gql`
  type Reminder {
    id: Int!
    role: String!
    date: DateTime!
    createdAt: DateTime!
    createdBy: String!
    content: String!
    isRead: Boolean!
  }

  type Query {
    reminders: [Reminder!]! @requireAuth
    reminder(id: Int!): Reminder @requireAuth
    roleReminders(role: String!): [Reminder!] @requireAuth
  }

  input CreateReminderInput {
    role: String!
    date: DateTime!
    createdBy: String!
  }

  input UpdateReminderInput {
    role: String
    date: DateTime
    createdBy: String
    isRead: Boolean
  }

  type Mutation {
    createReminder(input: CreateReminderInput!): Reminder! @requireAuth
    updateReminder(id: Int!, input: UpdateReminderInput!): Reminder!
      @requireAuth
    deleteReminder(id: Int!): Reminder! @requireAuth
  }
`
