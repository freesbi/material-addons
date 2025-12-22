import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      options: {
        projectConfig: {
          root: './',
          sourceRoot: 'src',
          buildOptions: {
            outputPath: 'dist/browser',
            assets: ['src/favicon.ico', 'src/assets', 'src/app/example-components'],
            styles: [
              'node_modules/roboto-fontface/css/roboto/roboto-fontface.css',
              'node_modules/material-icons/iconfont/filled.css',
              'node_modules/highlight.js/styles/github.css',
              'src/styles.scss',
            ],
          },
        },
      },
    },
    specPattern: '**/*.cy.ts',
  },
});
