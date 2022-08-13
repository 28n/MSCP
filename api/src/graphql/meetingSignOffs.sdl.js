export const schema = gql`
  type MeetingSignOff {
    id: Int!
    userName: String!
    reason: String!
    timestamp: DateTime!
  }

  type Query {
    meetingSignOffs: [MeetingSignOff!]! @requireAuth
    meetingSignOff(id: Int!): MeetingSignOff @requireAuth
  }

  input CreateMeetingSignOffInput {
    userName: String!
    reason: String!
    timestamp: DateTime!
  }

  input UpdateMeetingSignOffInput {
    userName: String
    reason: String
    timestamp: DateTime
  }

  type Mutation {
    createMeetingSignOff(input: CreateMeetingSignOffInput!): MeetingSignOff!
      @requireAuth
    updateMeetingSignOff(
      id: Int!
      input: UpdateMeetingSignOffInput!
    ): MeetingSignOff! @requireAuth
    deleteMeetingSignOff(id: Int!): MeetingSignOff! @requireAuth
  }
`
