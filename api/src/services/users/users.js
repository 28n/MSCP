import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const traineeusers = () => {
  return db.user.findMany({
    where: { OR: [{ roles: 'Probe-Supporter' }, { roles: 'Probe-Moderator' }] },
  })
}

export const activeUsers = () => {
  return db.user.findMany({
    where: { isActive: true },
  })
}

export const acpTags = () => {
  return db.user.findMany({
    where: { isActive: true }
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
