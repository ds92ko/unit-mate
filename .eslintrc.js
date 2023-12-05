module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    module: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    // 일반적인 ESLint 규칙
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'error',

    // React 규칙
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'error',

    // TypeScript 규칙
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // React Hooks 규칙
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Prettier 규칙
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 120,
        arrowParens: 'always',
      },
    ],

    // 추가적인 규칙
    'comma-dangle': ['error', 'always-multiline'], // 여러 줄의 객체 속성 뒤에 항상 쉼표 사용
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }], // 빈 줄이 연속으로 나타나지 않도록 함
    'eol-last': ['error', 'always'], // 파일 끝에 항상 빈 줄 추가
    'no-trailing-spaces': 'error', // 줄 끝의 공백을 허용하지 않음
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
