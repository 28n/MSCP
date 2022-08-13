import {
  infoPanels,
  infoPanel,
  createInfoPanel,
  updateInfoPanel,
  deleteInfoPanel,
} from './infoPanels'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('infoPanels', () => {
  scenario('returns all infoPanels', async (scenario) => {
    const result = await infoPanels()

    expect(result.length).toEqual(Object.keys(scenario.infoPanel).length)
  })

  scenario('returns a single infoPanel', async (scenario) => {
    const result = await infoPanel({ id: scenario.infoPanel.one.id })

    expect(result).toEqual(scenario.infoPanel.one)
  })

  scenario('creates a infoPanel', async () => {
    const result = await createInfoPanel({
      input: {
        name: 'String',
        content: 'String',
        createdBy: 'String',
        changedBy: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.content).toEqual('String')
    expect(result.createdBy).toEqual('String')
    expect(result.changedBy).toEqual('String')
  })

  scenario('updates a infoPanel', async (scenario) => {
    const original = await infoPanel({ id: scenario.infoPanel.one.id })
    const result = await updateInfoPanel({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a infoPanel', async (scenario) => {
    const original = await deleteInfoPanel({ id: scenario.infoPanel.one.id })
    const result = await infoPanel({ id: original.id })

    expect(result).toEqual(null)
  })
})
