import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', 'coverage']),

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      globals: globals.browser,
    },

    plugins: {
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Импорты без переменных, например полифиллы.
            ['^\\u0000'],

            // Внешние библиотеки.
            ['^node:', '^@?\\w'],

            // Слои FSD.
            ['^@/app(?:/|$)'],
            ['^@/pages(?:/|$)'],
            ['^@/widgets(?:/|$)'],
            ['^@/features(?:/|$)'],
            ['^@/entities(?:/|$)'],
            ['^@/shared(?:/|$)'],

            // Остальные импорты через алиас.
            ['^@/'],

            // Относительные импорты внутри слайса.
            ['^\\.'],

            // Стили.
            ['^.*\\.(?:css|scss|sass|less)(?:\\u0000)?$'],
          ],
        },
      ],

      'simple-import-sort/exports': 'error',
    },
  },

  // Последним: отключает конфликтующие правила форматирования.
  eslintConfigPrettier,
]);
