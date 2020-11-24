# 基于 CRA(template=typescript)的项目模板

## 依赖说明

由于`cra`的`4.x`版本和`typescript`的`4.x`版本有冲突，导致必须每次删除`tsconfig.json`才能启动，因此先使用`3.x`的`cra`和`typescript`

## webpack 配置

采用`craco`来代替`react-scrpits`

使用`CSS MODULE`需要在`react-app-env.d.ts`中声明`*.module.less`

使用`Webpack Alias`需要在`tsconfig`中同时为`typescript`指定路径别名。（目前采用指定`extends`文件的方式）

## husky

提供`git`的钩子，以便在`git commit`前做检查

```json
"lint:js": "eslint --ext .js --ext .tsx --ext .jsx src/ --fix", // 使用eslint 检查语法
"lint:style": "prettier -c --write src",                        // 使用prettier检查格式
"lint": "concurrently yarn:lint:*",                             // 并行同时检查语法和格式
```

[husky](https://typicode.github.io/husky/#/)
安装`husky`之后先执行`npx husky install`或`yarn husky install`,来添加`Git hooks`
同时在`package.json`的`scripts`中添加`"postinstall": "husky install"`

使用`npx husky add pre-commit "yarn lint"`来添加钩子

上面命令意思是在`pre-commit`时，执行`yarn lint`命令

## git-cz

使用[commitizen](https://github.com/commitizen)来规范`git commit message`
该版本使用了`git-cz`

## craco

- 设置了`@`这一个别名，指向`src`目录
- 添加`less`
- 添加`less module`
- 在每个 less 文件中自动引入全局变量`src/styles/variables.less`

## scripts

可用脚本：

- `yarn start`: 启动 dev
- `yarn build`: 打生产打包
- `yarn lint`: 检查语法和样式
- `yarn cz`: 提交代码
- `yarn cloc`: 统计代码量
