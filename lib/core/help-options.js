const { program } = require('commander')

// 命令功能介绍（通过默认提供的 --help查看）
function helpOptions() {
  // - Options 选项处理
  program.version(
    require('../../package.json').version,
    '-v, --version',
    "the lencamo-cli's current version"
  )
}

module.exports = {
  helpOptions
}
