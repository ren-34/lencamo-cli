const { consola } = require('consola')
const clipboardy = require('clipboardy')

const path = require('path')
const { readFile } = require('fs').promises

const { getInteractResult } = require('./user-interaction.js')
const version = require('../../../../package.json').version

async function snippetCopyAction() {
  try {
    let snippetType = 'html'

    // 用户控制台交互
    snippetType = await getInteractResult(snippetType)

    // 使用提示
    consola.info(`Using lencamo-cli ${version}`)
    consola.start('Copying...')

    const fileAbsolutePath = path.resolve(__dirname, `../../../snippet/${snippetType}.json`)
    const data = await readFile(fileAbsolutePath, { encoding: 'utf8' })
    await clipboardy.write(data)

    // 使用提示
    consola.success('Copying Success!')
    consola.box(`The content has been written to your clipboard !!!`)
  } catch (error) {
    consola.error('未知错误', error)
  }
}

module.exports = {
  snippetCopyAction
}
