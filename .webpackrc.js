export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  theme: './src/theme.js',
  proxy:{
    "/mock/86/api/v1/":{
      "target": "http://192.168.1.9:7080",
      "changeOrigin": true,
    }
  }
};
