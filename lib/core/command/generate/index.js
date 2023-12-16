const { program } = require('commander')

const { consola } = require('consola')

const version = require('../../../../package.json').version
const { generateTingModule } = require('./ting-module.js')

async function generateFileAction(project, options) {
  const pageSuper = program.args[1]
  const pageName = program.args[2]

  let moduleType = program.opts().module

  // 没有moduleType处理
  if (!moduleType) {
    moduleType = await consola.prompt('Select a module that you want to generate:', {
      type: 'select',
      options: [{ label: 'ting', value: 'ting', hint: 'Applicable to project vue3-ting-admin' }],
      initial: 'ting'
    })
    // 没有选择moduleType处理
    if (typeof moduleType === 'symbol') {
      consola.warn('You did not select a module type!')
      return
    }
  }

  // 使用提示
  consola.info(`Using lencamo-cli ${version}`)
  consola.start('Executing...')

  switch (moduleType) {
    case 'ting':
      await generateTingModule(pageSuper, pageName, moduleType)
      break

    default:
      await generateTingModule(pageSuper, pageName, 'ting') // 默认使用 ting
  }

  // 使用提示
  consola.success('Execute Success!')
}

module.exports = {
  generateFileAction
}
