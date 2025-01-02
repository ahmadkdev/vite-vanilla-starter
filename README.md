![Vite Vanilla Starter](./public/banner.svg)

# Vite Vanilla Starter

![Version](https://img.shields.io/github/package-json/v/ahmadkdev/vite-vanilla-starter)
![License](https://img.shields.io/github/license/ahmadkdev/vite-vanilla-starter)
![Vite Version](https://img.shields.io/github/package-json/dependency-version/ahmadkdev/vite-vanilla-starter/dev/vite)
![Eslint Version](https://img.shields.io/github/package-json/dependency-version/ahmadkdev/vite-vanilla-starter/dev/eslint)
![Prettier Version](https://img.shields.io/github/package-json/dependency-version/ahmadkdev/vite-vanilla-starter/dev/prettier)

Inspired by [@Barata-Ribeiro](https://github.com/Barata-Ribeiro)'s [vite-vanilla-js-template](https://github.com/Barata-Ribeiro/vite-vanilla-js-template).

A lightweight, modern Vite starter template with PostCSS, ESLint, and Prettier for vanilla JavaScript projects.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Modern development server with lightning-fast HMR.
- 🎨 [PostCSS](https://postcss.org/) - Transform CSS with JS plugins.
- 🪄 [PostCSS Preset Env Plugin](https://preset-env.cssdb.org/) - Enables modern CSS features like nesting, custom media queries, and custom selectors.
- 🔍 [ESLint](https://eslint.org/) - Enforces code consistency and catches errors.
- ✨ [Prettier](https://prettier.io/) - Automatic code formatting to keep everything neat.

## Roadmap

- [ ] Add [rollap-plugin-critical](https://github.com/nystudio107/rollup-plugin-critical) for generating critical CSS.
- [ ] Add TypeScript support.
- [ ] Add testing integration (e.g., Jest, Vitest).
- [ ] Create a CLI tool for project setup.
- [ ] Add Tailwind CSS integration.

## Cloning

This project uses [pnpm](https://pnpm.io/) for faster and more efficient dependency management.
If you don’t have it installed, run:

```bash
npm install -g pnpm
```

Follow these steps to set up the project:

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmadkdev/vite-vanilla-starter.git
   cd vite-vanilla-starter
   ```
2. **Install dependencies**

   ```bash
   pnpm install
   ```

   - Optional: For ESLint integration with Vite
     ```bash
     pnpm add -D vite-plugin-eslint2
     ```

## Post-Cloning Steps

After cloning the template, follow these steps to set it up for your own project:

1. **Clean Commit History**
   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. **Update Project Details**

   - Edit `package.json` to include your project's name, version, and description.
   - Replace the contents of the `README.md` file with details about your project.
   - Adapt the LICENSE file to your project.

3. **Delete unnecessary files**

   - ```bash
     rm public/vite.svg src/assets/icons/javascript.svg src/assets/fonts/ src/styles/*.css src/js/*.js
     ```

   - Remove the placeholder code in index.html and src/main.js. (Leave the css file import `import "./main.css";`)

4. **Add Your Content**

   - Add or/and import your styles to src/main.css.
   - Add or/and import your JavaScript logic to src/main.js.

## Project Structure

```
vite-vanilla-starter/
├── .github             # Github actions and workflows
├── public/             # Public assets (served as-is, e.g., favicon, robots.txt)
├── src/
│   ├── assets/         # Static assets
│   │   ├── fonts/      # Font files
│   │   ├── icons/      # Icon files (e.g., SVGs)
│   │   └── images/     # Images and graphics
│   ├── js/             # JavaScript modules
│   ├── styles/         # CSS stylesheets
│   ├── main.js         # Main JavaScript entry point
│   └── main.css        # Main CSS stylesheet
├── .browserslistrc     # Supported browsers
├── .gitignore          # Git ignores
├── .prettierignore     # Prettier ignores
├── .prettierrc         # Prettier formatting rules
├── index.html          # HTML entry point
├── LICENSE             # The project's license
├── eslint.config.js    # ESLint rules and settings
├── package.json        # Project dependencies and scripts
├── pnpm-lock.yaml      # Lockfile for project's dependencies
├── postcss.config.js   # PostCSS configuration
├── README.md           # This file
└── vite.config.js      # Vite configuration
```

## Available Scripts

- `pnpm dev`: Start the development server with hot-reloading.
- `pnpm build`: Create a production build.
- `pnpm preview`: Preview the production build locally.
- `pnpm lint`: Run ESLint to check for code issues.
- `pnpm lint:fix`: Automatically fix ESLint errors.
- `pnpm format`: Format your code using Prettier.

## VS Code Setup

1. Install required extensions:

   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

2. Add the following to your `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.requireConfig": true
}
```

## Configuration Files

### PostCSS

`postcss.config.js`:

```javascript
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssPresetEnv({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'custom-selectors': true,
      },
    }),
  ],
};
```

### ESLint

`eslint.config.js`:

```javascript
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['dist/', 'node_modules/'],
  },
  eslintPluginPrettierRecommended,
];
```

### Prettier

`.prettierrc`:

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "always",
  "bracketSpacing": true,
  "useTabs": false,
  "endOfLine": "lf",
  "semi": true
}
```

### Vite

Basic `vite.config.js`:

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  // Your config here
});
```

With optional ESLint plugin:

```javascript
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';

export default defineConfig({
  plugins: [
    eslint({
      include: ['src/**/*.js'],
      cache: false,
    }),
  ],
});
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project as per the terms of the license.
See the [LICENSE](LICENSE) file for details.
