const { consola } = require('consola')

async function getInteractResult(templateType) {
  // 没有templateType处理
  if (!templateType) {
    templateType = await consola.prompt('Select a template that you want to create:', {
      type: 'select',
      options: [
        {
          label: 'koa2-simple',
          value: 'koa2-simple',
          hint: 'MySQL database'
        },
        {
          label: 'koa2-wx_cloud',
          value: 'koa2-wx_cloud',
          hint: 'Wechat mini program cloud development database'
        },
        {
          label: 'vue3-init',
          value: 'vue3-init',
          hint: 'vue3 project initialization template'
        },
        {
          label: 'vue3-start',
          value: 'vue3-start',
          hint: 'vue3 Background management system initialization project'
        }
      ],
      initial: 'koa2-simple'
    })
  }

  return templateType
}

module.exports = {
  getInteractResult
}
