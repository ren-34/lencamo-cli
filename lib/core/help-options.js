const { program } = require('commander')

// 命令功能介绍（通过默认提供的 --help查看）
function helpOptions() {
  // - Options 选项处理
  program
    .version(
      require('../../package.json').version,
      '-v, --version',
      "the lencamo-cli's current version"
    )
    .option(
      '-t, --template <type>',
      'Specifies the type of the project template, for example: --template koa2-simple'
    )
    .option(
      '-m, --module <type>',
      'Specify which public template file to use, for example: --module ting'
    )
}

module.exports = {
  helpOptions
}
