module.exports = {
    root: true,
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['prettier'],
    extends: [
        'plugin:vue/essential',
        'plugin:vue/recommended',
        'plugin:vue/strongly-recommended',
        'eslint:recommended',
        'prettier',
    ],
    rules: {
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
    },
}
