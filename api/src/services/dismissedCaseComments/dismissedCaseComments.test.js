import {
  dismissedCaseComments,
  dismissedCaseComment,
  createDismissedCaseComment,
  updateDismissedCaseComment,
  deleteDismissedCaseComment,
} from './dismissedCaseComments'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('dismissedCaseComments', () => {
  scenario('returns all dismissedCaseComments', async (scenario) => {
    const result = await dismissedCaseComments()

    expect(result.length).toEqual(
      Object.keys(scenario.dismissedCaseComment).length
    )
  })

  scenario('returns a single dismissedCaseComment', async (scenario) => {
    const result = await dismissedCaseComment({
      id: scenario.dismissedCaseComment.one.id,
    })

    expect(result).toEqual(scenario.dismissedCaseComment.one)
  })

  scenario('creates a dismissedCaseComment', async () => {
    const result = await createDismissedCaseComment({
      input: {
        caseId: 5444641,
        opName: 'String',
        opRole: 'String',
        content: 'String',
      },
    })

    expect(result.caseId).toEqual(5444641)
    expect(result.opName).toEqual('String')
    expect(result.opRole).toEqual('String')
    expect(result.content).toEqual('String')
  })

  scenario('updates a dismissedCaseComment', async (scenario) => {
    const original = await dismissedCaseComment({
      id: scenario.dismissedCaseComment.one.id,
    })

    const result = await updateDismissedCaseComment({
      id: original.id,
      input: { caseId: 9393258 },
    })

    expect(result.caseId).toEqual(9393258)
  })

  scenario('deletes a dismissedCaseComment', async (scenario) => {
    const original = await deleteDismissedCaseComment({
      id: scenario.dismissedCaseComment.one.id,
    })

    const result = await dismissedCaseComment({ id: original.id })

    expect(result).toEqual(null)
  })
})
