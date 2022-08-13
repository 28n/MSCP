import { db } from 'src/lib/db'

export const notifications = () => {
  return db.notification.findMany()
}

export const notification = ({ id }) => {
  return db.notification.findUnique({
    where: { id },
  })
}

export const createNotification = ({ input }) => {
  return db.notification.create({
    data: input,
  })
}

export const globalNotifications = () => {
  return db.notification.findMany({
    where: {
      AND: [{ userName: 'global' }, { isRead: false }],
    },
  })
}

export const updateNotification = ({ id, input }) => {
  return db.notification.update({
    data: input,
    where: { id },
  })
}

export const deleteNotification = ({ id }) => {
  return db.notification.delete({
    where: { id },
  })
}

export const userNotifications = ({ userName }) => {
  return db.notification.findMany({
    where: { AND: [{ userName }, { isRead: false }] },
  })
}
