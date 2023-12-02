const path = require('path')
const ejs = require('ejs')

function compileEjs(moduleType, targetFile, payload) {
  return new Promise((resolve, reject) => {
    const tempPath = `../module/${moduleType}/${targetFile}`
    const absolutePath = path.resolve(__dirname, tempPath)

    ejs.renderFile(absolutePath, payload, (err, result) => {
      if (err) {
        console.log('编译模板失败：', err)
        reject(err)
        return
      }

      resolve(result)
    })
  })
}

module.exports = {
  compileEjs
}
