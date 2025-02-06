import AmoCheckbox from './AmoCheckbox.vue';

const meta = {
  title: 'Components/AmoCheckbox',
  component: AmoCheckbox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual style variant',
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Size of the checkbox',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled'
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
A customizable checkbox component with support for different states.

## Features
- Multiple visual variants (primary, secondary, danger, success, warning)
- Three sizes (small, medium, large)
- Disabled state
- Dark mode support

## Usage
\`\`\`vue
<template>
  <AmoCheckbox v-model="checked" label="Accept terms" variant="primary" />
</template>
\`\`\`
        `
      }
    }
  }
};

export default meta;

// Basic Checkbox
export const Default = {
  render: () => ({
    components: { AmoCheckbox },
    template: '<AmoCheckbox label="Basic checkbox" />'
  }),
  parameters: {
    docs: {
      source: {
        code: '<AmoCheckbox label="Basic checkbox" />'
      }
    }
  }
};

// Checked State
export const Checked = {
  render: () => ({
    components: { AmoCheckbox },
    template: '<AmoCheckbox label="Checked" :modelValue="true" />'
  }),
  parameters: {
    docs: {
      source: {
        code: '<AmoCheckbox label="Checked" :modelValue="true" />'
      }
    }
  }
};

// Disabled State
export const Disabled = {
  render: () => ({
    components: { AmoCheckbox },
    template: '<AmoCheckbox label="Disabled" disabled />'
  }),
  parameters: {
    docs: {
      source: {
        code: '<AmoCheckbox label="Disabled" disabled />'
      }
    }
  }
};

// Variants
export const Variants = {
  render: () => ({
    components: { AmoCheckbox },
    template: `
      <div class="flex flex-col space-y-4">
        <AmoCheckbox variant="primary" label="Primary" />
        <AmoCheckbox variant="secondary" label="Secondary" />
        <AmoCheckbox variant="danger" label="Danger" />
        <AmoCheckbox variant="success" label="Success" />
        <AmoCheckbox variant="warning" label="Warning" />
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
          <div class="flex flex-col space-y-4">
            <AmoCheckbox variant="primary" label="Primary" />
            <AmoCheckbox variant="secondary" label="Secondary" />
            <AmoCheckbox variant="danger" label="Danger" />
            <AmoCheckbox variant="success" label="Success" />
            <AmoCheckbox variant="warning" label="Warning" />
          </div>
        `
      }
    }
  }
};

// Sizes
export const Sizes = {
  render: () => ({
    components: { AmoCheckbox },
    template: `
      <div class="flex flex-col space-y-4">
        <AmoCheckbox size="sm" label="Small" />
        <AmoCheckbox size="md" label="Medium" />
        <AmoCheckbox size="lg" label="Large" />
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
          <div class="flex flex-col space-y-4">
            <AmoCheckbox size="sm" label="Small" />
            <AmoCheckbox size="md" label="Medium" />
            <AmoCheckbox size="lg" label="Large" />
          </div>
        `
      }
    }
  }
};
