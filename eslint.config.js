// ESLint configuration for the project
// Uses the new flat config system introduced in ESLint 8.x
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  // Ignore specific directories to prevent ESLint from checking them
  {
    ignores: ['dist/', 'node_modules/'],
  },
  // Use Prettier's recommended ESLint configuration
  // This helps maintain consistent code formatting and prevents formatting conflicts
  eslintPluginPrettierRecommended,
];
