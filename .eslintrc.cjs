module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    './.eslintrc-auto-import.json',
    'standard-with-typescript', // standard风格
    'plugin:vue/vue3-recommended', // eslint-plugin-vue 风格规范
    'plugin:@typescript-eslint/recommended', // ts风格
    'plugin:prettier/recommended', // 配置prettier风格插件
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser', // ts解析器
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint', // ts插件
  ],
  rules: {
    'space-before-function-paren': 0,
    camelcase: 0,
    'vue/attribute-hyphenation': 0,
    'vue/multi-word-component-names': 0,
  },
}
