module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaVersion: 6
    },
    env: {
        es6: true,
        node: true,
        jest: true
    },
    plugins: [
        'flowtype-errors',
        'jest'
    ],
    extends: [
        'eslint:recommended',
        'plugin:jest/recommended'
    ],
    rules: {
        'flowtype-errors/show-errors': 1,
        'no-console': 0
    }
};
