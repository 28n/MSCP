import { db } from 'src/lib/db'

export const infoPanels = () => {
  return db.infoPanel.findMany()
}

export const infoPanel = ({ id }) => {
  return db.infoPanel.findUnique({
    where: { id },
  })
}

export const createInfoPanel = ({ input }) => {
  return db.infoPanel.create({
    data: input,
  })
}

export const updateInfoPanel = ({ id, input }) => {
  return db.infoPanel.update({
    data: input,
    where: { id },
  })
}

export const deleteInfoPanel = ({ id }) => {
  return db.infoPanel.delete({
    where: { id },
  })
}
