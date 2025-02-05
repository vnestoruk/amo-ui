import { Meta, Story, Canvas, Controls } from '@storybook/blocks';
import AmoButton from './AmoButton.vue';

const meta = {
  title: 'Components/AmoButton',
  component: AmoButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The visual style of the button',
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success', 'warning'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'The size of the button',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      description: 'Whether the button is disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      description: 'Shows a loading spinner and disables the button',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    block: {
      description: 'Makes the button full width',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    type: {
      description: 'The HTML type attribute',
      control: 'select',
      options: ['button', 'submit', 'reset'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
    },
    iconRight: {
      description: 'Places the icon on the right side of the text',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    className: {
      description: 'Additional CSS classes to apply',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
A versatile button component that supports multiple variants, sizes, and states.

## Features
- Multiple visual variants (primary, secondary, outline, ghost, etc.)
- Three sizes (small, medium, large)
- Loading state with spinner
- Icon support (left or right position)
- Full-width option
- Disabled state
- Customizable via className

## Accessibility
- Proper button semantics with type attribute
- Focus ring for keyboard navigation
- Disabled state properly handled
- Loading state properly communicated

## Usage
\`\`\`vue
<AmoButton
  variant="primary"
  size="md"
  :loading="false"
  :disabled="false"
>
  Click me
</AmoButton>

<!-- With icon -->
<AmoButton variant="primary">
  <template #icon>
    <YourIcon />
  </template>
  With Icon
</AmoButton>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

// Base template
const Template = (args) => ({
  components: { AmoButton },
  setup() {
    return { args };
  },
  template: '<AmoButton v-bind="args">{{ args.default || "Button" }}</AmoButton>',
});

// Default button
export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 'md',
  default: 'Default Button',
};

// All variants
export const Variants = {
  render: () => ({
    components: { AmoButton },
    template: `
      <div class="flex flex-wrap gap-4">
        <AmoButton variant="primary">Primary</AmoButton>
        <AmoButton variant="secondary">Secondary</AmoButton>
        <AmoButton variant="outline">Outline</AmoButton>
        <AmoButton variant="ghost">Ghost</AmoButton>
        <AmoButton variant="danger">Danger</AmoButton>
        <AmoButton variant="success">Success</AmoButton>
        <AmoButton variant="warning">Warning</AmoButton>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants.',
      },
    },
  },
};

// All sizes
export const Sizes = {
  render: () => ({
    components: { AmoButton },
    template: `
      <div class="flex items-center gap-4">
        <AmoButton size="sm">Small</AmoButton>
        <AmoButton size="md">Medium</AmoButton>
        <AmoButton size="lg">Large</AmoButton>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Available button sizes: small (sm), medium (md), and large (lg).',
      },
    },
  },
};

// Loading state
export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  default: 'Loading Button',
};
Loading.parameters = {
  docs: {
    description: {
      story: 'Button in loading state shows a spinner and disables interactions.',
    },
  },
};

// Disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  default: 'Disabled Button',
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'Disabled button state prevents user interaction.',
    },
  },
};

// Block button
export const Block = Template.bind({});
Block.args = {
  block: true,
  default: 'Full Width Button',
};
Block.parameters = {
  docs: {
    description: {
      story: 'Block buttons span the full width of their container.',
    },
  },
};
