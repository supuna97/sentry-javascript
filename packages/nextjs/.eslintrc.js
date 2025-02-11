module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    jsx: true,
  },
  ignorePatterns: ['test/integration/**', 'playwright.config.ts'],
  extends: ['../../.eslintrc.js'],
  rules: {
    '@sentry-internal/sdk/no-optional-chaining': 'off',
    '@sentry-internal/sdk/no-nullish-coalescing': 'off',
  },
  overrides: [
    {
      files: ['scripts/**/*.ts'],
      parserOptions: {
        project: ['../../tsconfig.dev.json'],
      },
    },
    {
      files: ['test/buildProcess/**'],
      parserOptions: {
        sourceType: 'module',
      },
      plugins: ['react'],
      extends: ['../../.eslintrc.js', 'plugin:react/recommended'],
      rules: {
        // Prop types validation is not useful in test environments
        'react/prop-types': 'off',
        // Nextjs takes care of including react, so we don't explicitly need to
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
