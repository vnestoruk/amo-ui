import '../src/styles.scss';
import { withThemeByClassName } from '@storybook/addon-themes';

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        Light: '',
        Dark: 'dark'
      },
      defaultTheme: 'light',
    }),
    (story) => ({
      components: { story },
      template: `
        <div :class="{'bg-white dark:bg-zinc-900': true}" class="transition-colors duration-300 p-4">
          <story />
        </div>
      `
    })
  ]
};

export default preview;
