import {
  traineeReviews,
  traineeReview,
  createTraineeReview,
  updateTraineeReview,
  deleteTraineeReview,
} from './traineeReviews'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('traineeReviews', () => {
  scenario('returns all traineeReviews', async (scenario) => {
    const result = await traineeReviews()

    expect(result.length).toEqual(Object.keys(scenario.traineeReview).length)
  })

  scenario('returns a single traineeReview', async (scenario) => {
    const result = await traineeReview({ id: scenario.traineeReview.one.id })

    expect(result).toEqual(scenario.traineeReview.one)
  })

  scenario('creates a traineeReview', async () => {
    const result = await createTraineeReview({
      input: {
        userName: 'String',
        overallRating: 8099829,
        rulesRating: 7503242,
        communicationRating: 5732528,
        commentRating: 9329804,
        review: 'String',
        creator: 'String',
      },
    })

    expect(result.userName).toEqual('String')
    expect(result.overallRating).toEqual(8099829)
    expect(result.rulesRating).toEqual(7503242)
    expect(result.communicationRating).toEqual(5732528)
    expect(result.commentRating).toEqual(9329804)
    expect(result.review).toEqual('String')
    expect(result.creator).toEqual('String')
  })

  scenario('updates a traineeReview', async (scenario) => {
    const original = await traineeReview({ id: scenario.traineeReview.one.id })
    const result = await updateTraineeReview({
      id: original.id,
      input: { userName: 'String2' },
    })

    expect(result.userName).toEqual('String2')
  })

  scenario('deletes a traineeReview', async (scenario) => {
    const original = await deleteTraineeReview({
      id: scenario.traineeReview.one.id,
    })

    const result = await traineeReview({ id: original.id })

    expect(result).toEqual(null)
  })
})
