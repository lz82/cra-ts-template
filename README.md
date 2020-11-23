# 基于 CRA(template=typescript)的项目模板

## 依赖说明

由于`cra`的`4.x`版本和`typescript`的`4.x`版本有冲突，导致必须每次删除`tsconfig.json`才能启动，因此先使用`3.x`的`cra`和`typescript`

## webpack 配置

采用`craco`来代替`react-scrpits`

使用`CSS MODULE`需要在`react-app-env.d.ts`中声明`*.module.less`

使用`Webpack Alias`需要在`tsconfig`中同时为`typescript`指定路径别名。
