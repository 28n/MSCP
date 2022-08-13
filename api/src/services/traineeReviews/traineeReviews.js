import { db } from 'src/lib/db'

export const traineeReviews = () => {
  return db.traineeReview.findMany()
}

export const traineeReview = ({ id }) => {
  return db.traineeReview.findUnique({
    where: { id },
  })
}

export const userTraineeReviews = ({ userName }) => {
  return db.traineeReview.findMany({
    where: { userName },
    orderBy: { createdAt: 'desc' },
  })
}

export const lastTraineeReview = ({ creator }) => {
  return db.traineeReview.findMany({
    take: 3,
    where: { creator },
    orderBy: { createdAt: 'desc' },
  })
}

export const createTraineeReview = ({ input }) => {
  return db.traineeReview.create({
    data: input,
  })
}

export const updateTraineeReview = ({ id, input }) => {
  return db.traineeReview.update({
    data: input,
    where: { id },
  })
}

export const deleteTraineeReview = ({ id }) => {
  return db.traineeReview.delete({
    where: { id },
  })
}
