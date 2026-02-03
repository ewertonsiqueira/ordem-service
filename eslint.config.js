import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 'warn',
      'vue/no-unused-vars': 'error',
      // Indentação
      'indent': ['error', 2], // 2 espaços
      'vue/html-indent': ['error', 2], // 2 espaços no template
      'vue/script-indent': ['error', 2, { baseIndent: 0 }],

      // Espaçamento
      'no-trailing-spaces': 'error', // Remove espaços no final da linha
      'space-before-function-paren': ['error', 'always'], // Espaço antes de ()
      'space-infix-ops': 'error', // Espaço em operadores (x = y + z)
      'object-curly-spacing': ['error', 'always'], // { x } não {x}
      'array-bracket-spacing': ['error', 'never'], // [x] não [ x ]
      'comma-spacing': ['error', { before: false, after: true }], // x, y não x,y
      'key-spacing': ['error', { afterColon: true }], // { x: 1 } não { x:1 }

      // Quebras de linha
      'eol-last': ['error', 'always'], // Linha vazia no final do arquivo
      'no-multiple-empty-lines': ['error', { max: 1 }], // Máx 1 linha vazia
      'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: 1 }]
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    }
  }
]
