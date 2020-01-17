// ref: https://umijs.org/config/
import plugins from './plugin.config'
import pageRoutes from './router.config';
import ENV from '../src/config/env';

export default {
  outputPath: './dist/admin',
  publicPath: '/',
  plugins: plugins,
  targets: {
    ie: 11,
  },
  proxy: {
    '/api': {
      target: ENV.api.test,
      changeOrigin: true,
      // pathRewrite: { '^/api' : '' }
    },
  },

  /**
   * 路由相关配置
   */
  routes: pageRoutes,
  disableRedirectHoist: true,

  /**
   * webpack 相关配置
   */
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: './src/theme/theme.js',
  externals: {
    '@antv/data-set': 'DataSet',
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
};
