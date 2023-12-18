const { promisify } = require('node:util')
const download = promisify(require('download-git-repo'))

const { program } = require('commander')
const { consola } = require('consola')

const { getInteractResult } = require('./user-interaction.js')

const version = require('../../../../package.json').version
const {
  KOA2_TEMPLATE,
  VUE_INIT_TEMPLATE,
  VUE_START_TEMPLATE,
  KOA2_WXCLOUD_TEMPLATE
} = require('../../../config/repo.js')
// const { execCommand } = require('../utils/exec-command.js')

async function createProjectAction(project, options) {
  try {
    let templateType = program.opts().template

    // 用户控制台交互
    templateType = await getInteractResult(templateType)
    // 没有选择templateType处理
    if (typeof templateType === 'symbol') {
      consola.warn('You did not select a template type!')
      return
    }

    // 使用提示
    consola.info(`Using lencamo-cli ${version}`)
    consola.start('Cloning...')

    switch (templateType) {
      case 'koa2-simple':
        await download(KOA2_TEMPLATE, project, { clone: true })
        break
      case 'koa2-wx_cloud':
        await download(KOA2_WXCLOUD_TEMPLATE, project, { clone: true })
        break
      case 'vue3-init':
        await download(VUE_INIT_TEMPLATE, project, { clone: true })
        break
      case 'vue3-start':
        await download(VUE_START_TEMPLATE, project, { clone: true })
        break
      default:
        consola.error('The current template type does not exist!')
        return
    }

    // 使用提示
    consola.success('Clone Success!')
    consola.box(
      `You can use template quickly by following these steps:\n   cd ${project}\n   npm install\n   npm run dev`
    )

    // 帮助执行
    // const command = process.platform === 'win32' ? 'npm:cmd' : 'npm'
    // await execCommand(command, ['install'], { cwd: `./${project}` })
    // await execCommand(command, ['run', 'dev'], { cwd: `./${project}` })
  } catch (error) {
    consola.error('连接失败', error)
  }
}

module.exports = {
  createProjectAction
}