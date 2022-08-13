export const schema = gql`
  type VacationRequest {
    id: Int!
    userName: String!
    startDate: DateTime!
    endDate: DateTime!
    status: String!
    createdAt: DateTime!
    reason: String!
  }

  type Query {
    vacationRequests: [VacationRequest!]! @requireAuth
    vacationRequest(id: Int!): VacationRequest @requireAuth
    userVacationRequests(userName: String!): [VacationRequest!]! @requireAuth
  }

  input CreateVacationRequestInput {
    userName: String!
    startDate: DateTime!
    endDate: DateTime!
    reason: String!
  }

  input UpdateVacationRequestInput {
    userName: String
    lengthInDays: Int
    status: String
    reason: String
  }

  type Mutation {
    createVacationRequest(input: CreateVacationRequestInput!): VacationRequest!
      @requireAuth
    updateVacationRequest(
      id: Int!
      input: UpdateVacationRequestInput!
    ): VacationRequest! @requireAuth
    deleteVacationRequest(id: Int!): VacationRequest! @requireAuth
  }
`
