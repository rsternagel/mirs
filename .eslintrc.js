module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    quotes: 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        arrowParens: 'always'
      }
    ]
  }
}
