#!/usr/bin/env node
const { program } = require('commander')

const { helpOptions } = require('./core/help-options.js')
const { createProjectAction } = require('./core/command/create/create-template.js')
const { generateFileAction } = require('./core/command/generate/index.js')

// ===================
// 一、lencaom-cli --help
// ===================

// 1、Options 选项
helpOptions()

// 2、Commands 选项
program
  .command('create <projectName> [...others]')
  .description('Create a template project in the current directory')
  .action(createProjectAction)

program
  .command('generate <file> [...others]')
  .description('Quickly generate a public module file in your project')
  .action(generateFileAction)

// 3、自定义 选项
// - Notes 追加提示
program.on('--help', () => {
  console.log('')
  console.log('Notes:')
  console.log('  Run these command in the root directory of your project')
})

// ===================
// 二、其他
// ===================

// 1、版权声明信息

// 2、命令错误处理
program.showSuggestionAfterError(true)
program.showHelpAfterError(`
You can get more information by executing the following command:
  lencamo-cli --help
`)

// 3、解析process.argv参数
program.parse(process.argv)
// 使用示例
// console.log(program.args)
// console.log(program.opts())
