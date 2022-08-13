export const schema = gql`
  type InfoPanel {
    id: Int!
    name: String!
    content: String!
    createdAt: DateTime!
    createdBy: String!
    changedBy: String!
    side: String!
  }

  type Query {
    infoPanels: [InfoPanel!]! @requireAuth
    infoPanel(id: Int!): InfoPanel @requireAuth
    OPInfoPanels: [InfoPanel!]! @requireAuth
  }

  input CreateInfoPanelInput {
    name: String!
    content: String!
    createdBy: String!
    changedBy: String!
    side: String!
  }

  input UpdateInfoPanelInput {
    name: String
    content: String
    createdBy: String
    changedBy: String
    side: String
  }

  type Mutation {
    createInfoPanel(input: CreateInfoPanelInput!): InfoPanel! @requireAuth
    updateInfoPanel(id: Int!, input: UpdateInfoPanelInput!): InfoPanel!
      @requireAuth
    deleteInfoPanel(id: Int!): InfoPanel! @requireAuth
  }
`
