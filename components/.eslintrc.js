module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'airbnb-base'
  ],
  plugins: [
    '@typescript-eslint',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier'
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
    project: './tsconfig.json',
  },
  rules:  {
    'no-trailing-spaces': 'warn',
    'max-len': 'off',
    'no-tabs': 'off',
    'linebreak-style': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off', // solving redux dependency issue
    'import/prefer-default-export': 'off',
    'arrow-parens': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off', // check this
    'no-return-assign': 'off',
    'class-methods-use-this': 'off', // check this
    'array-callback-return': 'off', // check this
    'no-loop-func': 'off', // check this
    'no-self-assign': 'off', // check this
    'consistent-return': 'off', // check this
    'no-unused-expressions': 'off', // check this
    'no-restricted-syntax': 'off', // check this - disables for-in related error
    'global-require': 'off', // check this
    'import/no-dynamic-require': 'off',
    'func-names': 'off', // check this, you shouldn't use unnamed functions
    'no-console': 'off',
    'no-useless-escape': 'off',
    'prefer-destructuring' : 'off', 
    'prettier/prettier': 'off',
    'comma-dangle': 'off',
    'object-curly-spacing': 'off',
    'semi': 'off',
    'object-shorthand': 'off',
    'space-before-blocks': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'import/extensions': 'off',
    'quotes': 'off',
    'space-infix-ops': 'off',
    'object-curly-newline': 'off',
    'spaced-comment': 'off',
    'comma-spacing': 'off',
    'arrow-spacing': 'off',
    'indent': 'off',
    'dot-notation': 'off',
    'eqeqeq': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'no-multiple-empty-lines': 'off',
    'eol-last': 'off',
    'space-before-function-paren': 'off',
    'lines-between-class-members': 'off',
    'implicit-arrow-linebreak': 'off',
    'prefer-arrow-callback': 'off',
    'arrow-body-style': 'off',
    'prefer-template': 'off',
    'no-var': 'off',
    'import/order': 'off',
    'array-bracket-spacing': 'off',
    'prefer-const': 'off',
    'no-extra-semi': 'off',
    'camelcase': 'off',
    'template-curly-spacing': 'off',
    'no-plusplus': 'off',
    'function-paren-newline': 'off',
    'wrap-iife': 'off',
    'no-empty-pattern' : 'off',
    'no-multi-spaces' : 'off',
    'import/newline-after-import': 'off',
    'vars-on-top': 'off',
    'no-shadow': 'off',
    'block-scoped-var': 'off',
    'brace-style': 'off',
    'no-array-constructor': 'off',
    'prefer-object-spread': 'off',
    'no-nested-ternary': 'off',
    'no-confusing-arrow':'off',
    'no-redeclare': 'off',
    'block-spacing': 'off',
    'space-in-parens': 'off',
    'semi-spacing': 'off',
    'no-restricted-globals': 'off',
    'no-prototype-builtins': 'off',
    'curly': 'off',
    'no-continue': 'off',
    'object-property-newline': 'off',
    'nonblock-statement-body-position': 'off',
    'import/first': 'off',
    'quote-props' : 'off',
    'radix': 'off'
  },
};
