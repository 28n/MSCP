import { db } from 'src/lib/db'

export const rulesPanels = () => {
  return db.rulesPanel.findMany()
}

export const rulesPanel = ({ id }) => {
  return db.rulesPanel.findUnique({
    where: { id },
  })
}

export const typeRulesPanel = ({ side, type }) => {
  return db.rulesPanel.findMany({
    where: {
      side,
      type,
    },
    orderBy: {
      sortOrder: 'asc',
    },
  })
}

export const createRulesPanel = ({ input }) => {
  return db.rulesPanel.create({
    data: input,
  })
}

export const updateRulesPanel = ({ id, input }) => {
  return db.rulesPanel.update({
    data: input,
    where: { id },
  })
}

export const deleteRulesPanel = ({ id }) => {
  return db.rulesPanel.delete({
    where: { id },
  })
}
