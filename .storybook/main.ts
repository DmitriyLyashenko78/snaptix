import type { StorybookConfig } from '@storybook/nextjs-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-actions', 'storybook-addon-pseudo-states'],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],

  async viteFinal(config) {
    return {
      ...config,
      css: {
        modules: {
          localsConvention: 'camelCaseOnly',
        },
      },
    }
  },
}

export default config
