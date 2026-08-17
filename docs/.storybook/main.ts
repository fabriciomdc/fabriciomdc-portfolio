import { dirname, join } from 'path'
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': join(__dirname, '../../src'),
      '@lib': join(__dirname, '../../src/lib'),
      '@domain': join(__dirname, '../../src/domain'),
      '@data': join(__dirname, '../../src/data'),
      '@validation': join(__dirname, '../../src/validation'),
      '@infra': join(__dirname, '../../src/infra'),
      '@presentation': join(__dirname, '../../src/presentation'),
      '@main': join(__dirname, '../../src/main')
    }
    return config
  }
}

export default config
