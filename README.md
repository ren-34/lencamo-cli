## 开发中

- 测试

```sh
npm link
lencamo-cli

npm list
```

- 发表

```sh
# nrm ls
# nrm use npm

npm login
npm public
```

## 已完成

- 基础命令实现

```sh
lencamo-cli --version
lencamo-cli --help
```

- 使用项目基础模板

```sh
# 使用koa2模板
lencamo-cli create koa-template --template koa2

# 使用vue3模板
lencamo-cli create vue3-init-template --template vue3-init # 初始化模板
lencamo-cli create vue3-start-template --template vue3-start  # 基础模板
```

- 为项目添加新模块

```sh
# vue3-ting-admin添加新模块
lencamo-cli generate product order --module ting
```
