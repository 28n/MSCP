import {
  meetingSignOffs,
  meetingSignOff,
  createMeetingSignOff,
  updateMeetingSignOff,
  deleteMeetingSignOff,
} from './meetingSignOffs'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('meetingSignOffs', () => {
  scenario('returns all meetingSignOffs', async (scenario) => {
    const result = await meetingSignOffs()

    expect(result.length).toEqual(Object.keys(scenario.meetingSignOff).length)
  })

  scenario('returns a single meetingSignOff', async (scenario) => {
    const result = await meetingSignOff({
      id: scenario.meetingSignOff.one.id,
    })

    expect(result).toEqual(scenario.meetingSignOff.one)
  })

  scenario('creates a meetingSignOff', async () => {
    const result = await createMeetingSignOff({
      input: {
        userName: 'String',
        reason: 'String',
        timestamp: '2022-08-01T16:59:48Z',
      },
    })

    expect(result.userName).toEqual('String')
    expect(result.reason).toEqual('String')
    expect(result.timestamp).toEqual('2022-08-01T16:59:48Z')
  })

  scenario('updates a meetingSignOff', async (scenario) => {
    const original = await meetingSignOff({
      id: scenario.meetingSignOff.one.id,
    })

    const result = await updateMeetingSignOff({
      id: original.id,
      input: { userName: 'String2' },
    })

    expect(result.userName).toEqual('String2')
  })

  scenario('deletes a meetingSignOff', async (scenario) => {
    const original = await deleteMeetingSignOff({
      id: scenario.meetingSignOff.one.id,
    })

    const result = await meetingSignOff({ id: original.id })

    expect(result).toEqual(null)
  })
})
