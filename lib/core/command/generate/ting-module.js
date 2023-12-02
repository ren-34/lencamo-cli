const fs = require('fs')

const { compileEjs } = require('../../../utils/compile-ejs.js')

async function generateTingModule(pageSuper, pageName, moduleType) {
  // 添加 vue 组件
  const pageStr = await compileEjs(moduleType, 'page.vue.ejs', {
    pageName: pageName
  })
  await fs.promises.mkdir(`src/pages/${pageSuper}/${pageName}`, { recursive: true }, (err) => {
    if (err) throw err
  })
  await fs.promises.writeFile(`src/pages/${pageSuper}/${pageName}/${pageName}.vue`, pageStr)

  // 添加 组件路由
  const routerStr = await compileEjs(moduleType, 'router.ts.ejs', {
    pageSuper: pageSuper,
    pageName: pageName
  })
  await fs.promises.mkdir(`src/router/${pageSuper}/${pageName}`, { recursive: true }, (err) => {
    if (err) throw err
  })
  await fs.promises.writeFile(`src/router/${pageSuper}/${pageName}/${pageName}.ts`, routerStr)
}

module.exports = {
  generateTingModule
}
