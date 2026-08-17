import type { Preview } from '@storybook/react'
import '../../src/presentation/styles/global.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#080A10'
        },
        {
          name: 'surface',
          value: '#10131C'
        },
        {
          name: 'surface-2',
          value: '#161A25'
        }
      ]
    }
  }
}

export default preview
