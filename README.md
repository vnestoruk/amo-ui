# Amo UI

A modern Vue.js component library designed for building elegant and consistent user interfaces.

## Installation

```bash
npm install amo-ui
# or
yarn add amo-ui
```

## Usage

```javascript
// Import the component you need
import { AmoButton } from 'amo-ui';

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

- 🎨 Modern and clean design
- 📦 Tree-shakeable components
- 🛠 Built with Vue 3 and Vite
- 🎯 TypeScript support
- 🎭 Tailwind CSS integration

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
amo-ui/
├── dist/           # Built files
├── src/
│   ├── components/ # UI components
│   └── index.js    # Library entry point
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
