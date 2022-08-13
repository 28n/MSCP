import {
  vacationRequests,
  vacationRequest,
  createVacationRequest,
  updateVacationRequest,
  deleteVacationRequest,
} from './vacationRequests'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('vacationRequests', () => {
  scenario('returns all vacationRequests', async (scenario) => {
    const result = await vacationRequests()

    expect(result.length).toEqual(Object.keys(scenario.vacationRequest).length)
  })

  scenario('returns a single vacationRequest', async (scenario) => {
    const result = await vacationRequest({
      id: scenario.vacationRequest.one.id,
    })

    expect(result).toEqual(scenario.vacationRequest.one)
  })

  scenario('creates a vacationRequest', async () => {
    const result = await createVacationRequest({
      input: { userName: 'String', lengthInDays: 450873, reason: 'String' },
    })

    expect(result.userName).toEqual('String')
    expect(result.lengthInDays).toEqual(450873)
    expect(result.reason).toEqual('String')
  })

  scenario('updates a vacationRequest', async (scenario) => {
    const original = await vacationRequest({
      id: scenario.vacationRequest.one.id,
    })

    const result = await updateVacationRequest({
      id: original.id,
      input: { userName: 'String2' },
    })

    expect(result.userName).toEqual('String2')
  })

  scenario('deletes a vacationRequest', async (scenario) => {
    const original = await deleteVacationRequest({
      id: scenario.vacationRequest.one.id,
    })

    const result = await vacationRequest({ id: original.id })

    expect(result).toEqual(null)
  })
})
