import {
  rulesPanels,
  rulesPanel,
  createRulesPanel,
  updateRulesPanel,
  deleteRulesPanel,
} from './rulesPanels'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('rulesPanels', () => {
  scenario('returns all rulesPanels', async (scenario) => {
    const result = await rulesPanels()

    expect(result.length).toEqual(Object.keys(scenario.rulesPanel).length)
  })

  scenario('returns a single rulesPanel', async (scenario) => {
    const result = await rulesPanel({ id: scenario.rulesPanel.one.id })

    expect(result).toEqual(scenario.rulesPanel.one)
  })

  scenario('creates a rulesPanel', async () => {
    const result = await createRulesPanel({
      input: {
        title: 'String',
        sortOrder: 1721431,
        content: 'String',
        createdBy: 'String',
        side: 'String',
        type: 'String',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.sortOrder).toEqual(1721431)
    expect(result.content).toEqual('String')
    expect(result.createdBy).toEqual('String')
    expect(result.side).toEqual('String')
    expect(result.type).toEqual('String')
  })

  scenario('updates a rulesPanel', async (scenario) => {
    const original = await rulesPanel({ id: scenario.rulesPanel.one.id })
    const result = await updateRulesPanel({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a rulesPanel', async (scenario) => {
    const original = await deleteRulesPanel({ id: scenario.rulesPanel.one.id })
    const result = await rulesPanel({ id: original.id })

    expect(result).toEqual(null)
  })
})
