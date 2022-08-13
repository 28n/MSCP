export const schema = gql`
  type RulesPanel {
    id: Int!
    title: String!
    sortOrder: Int!
    content: String!
    createdAt: DateTime!
    createdBy: String!
    side: String!
    type: String!
  }

  type Query {
    rulesPanels: [RulesPanel!]! @requireAuth
    rulesPanel(id: Int!): RulesPanel @requireAuth
    typeRulesPanel(side: String!, type: String!): [RulesPanel!]! @requireAuth
  }

  input CreateRulesPanelInput {
    title: String!
    sortOrder: Int!
    content: String!
    createdBy: String!
    side: String!
    type: String!
  }

  input UpdateRulesPanelInput {
    title: String
    sortOrder: Int
    content: String
    createdBy: String
    side: String
    type: String
  }

  type Mutation {
    createRulesPanel(input: CreateRulesPanelInput!): RulesPanel! @requireAuth
    updateRulesPanel(id: Int!, input: UpdateRulesPanelInput!): RulesPanel!
      @requireAuth
    deleteRulesPanel(id: Int!): RulesPanel! @requireAuth
  }
`
