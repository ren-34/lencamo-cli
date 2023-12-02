const { promisify } = require('node:util')
const download = promisify(require('download-git-repo'))

const { program } = require('commander')

const { KOA2_TEMPLATE } = require('../../../config/repo.js')
// const { execCommand } = require('../utils/exec-command.js')

async function createProjectAction(project, options) {
  try {
    const templateType = program.opts().template

    switch (templateType) {
      case 'koa2':
        await download(KOA2_TEMPLATE, project, { clone: true })
        break

      default:
        await download(KOA2_TEMPLATE, project, { clone: true }) // 默认使用 koa2
    }

    // 使用提示
    console.log('You can use it quickly by following these steps:')
    console.log(`   cd ${project}`)
    console.log(`   npm install`)
    console.log(`   npm run dev`)

    // 帮助执行
    // const command = process.platform === 'win32' ? 'npm:cmd' : 'npm'
    // await execCommand(command, ['install'], { cwd: `./${project}` })
    // await execCommand(command, ['run', 'dev'], { cwd: `./${project}` })
  } catch (error) {
    console.log('连接失败')
    console.log(error)
  }
}

module.exports = {
  createProjectAction
}
