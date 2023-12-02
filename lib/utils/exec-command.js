const { spawn } = require('child_process')

function execCommand(...args) {
  return new Promise((resolve) => {
    // 开启子进程
    const childProcess = spawn(...args)

    // 获取输出和错误信息
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)

    // 监听子进程
    childProcess.on('close', () => {
      resolve()
    })
  })
}

module.exports = {
  execCommand
}
