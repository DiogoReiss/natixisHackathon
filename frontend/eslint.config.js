import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
export default [
  { ignores: ['dist'] }, // Ignore the dist folder
  {
    files: ['**/*.{ts,tsx}'], // Apply to TypeScript files
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript version
      globals: globals.browser, // Global variables for browser environments
      parser: tsParser, // Use TypeScript parser
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
        sourceType: 'module', // Use ES modules
        project: './tsconfig.json', // Ensure it uses your tsconfig.json
      },
    },
    settings: {
      react: { version: '18.3' }, // Set React version
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsPlugin, // Add TypeScript ESLint plugin
    },
    rules: {
      ...js.configs.recommended.rules, // Base ESLint rules
      ...react.configs.recommended.rules, // React recommended rules
      ...react.configs['jsx-runtime'].rules, // JSX runtime-specific rules
      ...reactHooks.configs.recommended.rules, // React hooks rules
      ...tsPlugin.configs.recommended.rules, // TypeScript-specific rules

      // Custom rules
      'react/jsx-no-target-blank': 'off', // Disable target="_blank" warnings
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused vars starting with _
      '@typescript-eslint/no-explicit-any': 'warn', // Warn against `any`
    },
  },
];

