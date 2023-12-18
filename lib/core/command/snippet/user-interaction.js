const { consola } = require('consola')

async function getInteractResult(snippetType) {
  snippetType = await consola.prompt('Select a snippet in the specified type file:', {
    type: 'select',
    options: ['html', 'javascript', 'typescript', 'markdown', 'vue'],
    initial: 'html'
  })
  // 没有选择templateType处理
  if (typeof snippetType === 'symbol') {
    consola.warn('You did not select a template type!')
    return
  }

  return snippetType
}

module.exports = {
  getInteractResult
}
