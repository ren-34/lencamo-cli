const { program } = require('commander')

const { generateTingModule } = require('./ting-module.js')

async function generateFileAction(project, options) {
  const pageSuper = program.args[1]
  const pageName = program.args[2]

  const moduleType = program.opts().module

  switch (moduleType) {
    case 'ting':
      await generateTingModule(pageSuper, pageName, moduleType)
      break

    default:
      await generateTingModule(pageSuper, pageName, 'ting') // 默认使用 ting
  }
}

module.exports = {
  generateFileAction
}
