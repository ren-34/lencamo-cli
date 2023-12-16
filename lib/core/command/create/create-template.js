const { promisify } = require('node:util')
const download = promisify(require('download-git-repo'))

const { program } = require('commander')
const { consola } = require('consola')

const version = require('../../../../package.json').version
const { KOA2_TEMPLATE, VUE_INIT_TEMPLATE, VUE_START_TEMPLATE } = require('../../../config/repo.js')
// const { execCommand } = require('../utils/exec-command.js')

async function createProjectAction(project, options) {
  try {
    let templateType = program.opts().template

    // 没有templateType处理
    if (!templateType) {
      templateType = await consola.prompt('Select a template that you want to create:', {
        type: 'select',
        options: [
          { label: 'koa2', value: 'koa2', hint: 'koa project initialization template' },
          { label: 'vue3-init', value: 'vue3-init', hint: 'vue3 project initialization template' },
          {
            label: 'vue3-start',
            value: 'vue3-start',
            hint: 'vue3 Background management system initialization project'
          }
        ],
        initial: 'koa2'
      })
      // 没有选择templateType处理
      if (typeof templateType === 'symbol') {
        consola.warn('You did not select a template type!')
        return
      }
    }

    // 使用提示
    consola.info(`Using lencamo-cli ${version}`)
    consola.start('Cloning...')

    switch (templateType) {
      case 'koa2':
        await download(KOA2_TEMPLATE, project, { clone: true })
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
