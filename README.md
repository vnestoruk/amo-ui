# Amo UI

A modern Vue.js component library designed for building elegant and consistent user interfaces.

## Installation

```bash
npm install @amokit/amo-ui
```

## Usage

```javascript
// Import the component you need
import { AmoButton } from '@amokit/amo-ui';

// Use it in your Vue component
export default {
  components: {
    AmoButton
  }
}
```

```vue
<template>
  <AmoButton>Click me</AmoButton>
</template>
```

## Features

- Modern and clean design
- Tree-shakeable components
- Built with Vue 3 and Vite
- TypeScript support
- Tailwind CSS integration
- Comprehensive Storybook documentation
- Dark mode support

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start Storybook development server
npm run storybook

# Build Storybook as static app
npm run build-storybook
```

## Documentation

The component documentation is available through Storybook. Run `npm run storybook` to start the Storybook development server and view the interactive documentation, examples, and component playground.

## Project Structure

```
amo-ui/
├── .storybook/     # Storybook configuration
├── dist/           # Built files
├── src/
│   ├── components/ # UI components
│   │   └── */     # Each component with its stories
│   └── index.js   # Library entry point
├── vite.config.js  # Vite configuration
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

Vasyl Nestoruk
