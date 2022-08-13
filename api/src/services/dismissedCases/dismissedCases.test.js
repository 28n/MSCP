import {
  dismissedCases,
  dismissedCase,
  createDismissedCase,
  updateDismissedCase,
  deleteDismissedCase,
} from './dismissedCases'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('dismissedCases', () => {
  scenario('returns all dismissedCases', async (scenario) => {
    const result = await dismissedCases()

    expect(result.length).toEqual(Object.keys(scenario.dismissedCase).length)
  })

  scenario('returns a single dismissedCase', async (scenario) => {
    const result = await dismissedCase({ id: scenario.dismissedCase.one.id })

    expect(result).toEqual(scenario.dismissedCase.one)
  })

  scenario('creates a dismissedCase', async () => {
    const result = await createDismissedCase({
      input: {
        userName: 'String',
        userId: 2936923,
        opName: 'String',
        opRole: 'String',
        reason: 'String',
        evidence: 'String',
      },
    })

    expect(result.userName).toEqual('String')
    expect(result.userId).toEqual(2936923)
    expect(result.opName).toEqual('String')
    expect(result.opRole).toEqual('String')
    expect(result.reason).toEqual('String')
    expect(result.evidence).toEqual('String')
  })

  scenario('updates a dismissedCase', async (scenario) => {
    const original = await dismissedCase({ id: scenario.dismissedCase.one.id })
    const result = await updateDismissedCase({
      id: original.id,
      input: { userName: 'String2' },
    })

    expect(result.userName).toEqual('String2')
  })

  scenario('deletes a dismissedCase', async (scenario) => {
    const original = await deleteDismissedCase({
      id: scenario.dismissedCase.one.id,
    })

    const result = await dismissedCase({ id: original.id })

    expect(result).toEqual(null)
  })
})
