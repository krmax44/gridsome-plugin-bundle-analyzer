# Gridsome Bundle Analyzer

[![npm version](https://img.shields.io/npm/v/gridsome-plugin-bundle-analyzer)](https://www.npmjs.com/package/gridsome-plugin-bundle-analyzer)

Analyses your Gridsome bundle using [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer).

![webpack bundle analyzer zoomable treemap](https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif)

## Usage

```bash
yarn add -D gridsome-plugin-bundle-analyzer
```

```js
// gridsome.config.js

module.exports = {
  plugins: ['gridsome-plugin-bundle-analyzer'],
};

// or with options
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-bundle-analyzer',
      options: {
        onlyProduction: true, // only production bundle will be analyzed by default
        analyzerOptions: {}, // see https://github.com/webpack-contrib/webpack-bundle-analyzer
      },
    },
  ],
};
```

## TODO

- sometimes, the plugin is runs twice for some reason
