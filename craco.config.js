const path = require('path');

const CracoLessPlugin = require('craco-less');
const cracoPluginStyleResourcesLoader = require('craco-plugin-style-resources-loader');

const resolve = (dir) => {
  return path.resolve(__dirname, dir);
};

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    // Less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    },
    //  CSS Module
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: function (lessRule, _context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = /node_modules/;

          return lessRule;
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]_[hash:base64:5]'
          }
        }
      }
    },
    // 自动加载全局变量（CSS）
    // 需要写在上面两个的下面
    {
      plugin: cracoPluginStyleResourcesLoader,
      options: {
        patterns: path.join(__dirname, 'src/styles/variables.less'),
        styleType: 'less'
      }
    }
  ]
};
