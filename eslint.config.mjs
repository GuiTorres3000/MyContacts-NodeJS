import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import airbnbBase from 'eslint-config-airbnb-base';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js,
      import: importPlugin,
    },
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      ...airbnbBase.rules,
      'quotes': ['error', 'single'],
    },
  },
]);
