module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    // Aponta as regras que ele não reconhecer como error
    'prettier/prettier': 'error',
    // Remove a obrigação de usar JSX somente em arquivos .JSX, permite usar o JSX em arquivos .JS
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    // Remove a obrigação de colocar o export default em arquivos
    'import/prefer-default-export': 'off'
  }
};
