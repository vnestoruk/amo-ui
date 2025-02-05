import AmoInput from './AmoInput.vue';

const meta = {
  title: 'Components/AmoInput',
  component: AmoInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The value of the input (v-model)',
    },
    variant: {
      description: 'The visual style of the input',
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'The size of the input',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    type: {
      description: 'The type of the input',
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    label: {
      description: 'Label text for the input',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    floating: {
      description: 'Whether to use floating label style',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      description: 'Placeholder text',
      control: 'text',
    },
    disabled: {
      description: 'Whether the input is disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    error: {
      description: 'Error message to display',
      control: 'text',
    },
    block: {
      description: 'Makes the input full width',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
A versatile input component that supports multiple variants, sizes, and states.

## Features
- Multiple visual variants (primary, secondary, success, danger, warning)
- Three sizes (small, medium, large)
- Support for different input types (text, password, email, etc.)
- Floating label option
- Error state with message
- Icon support (left and right)
- Password visibility toggle
- Full-width option
- Disabled state

## Accessibility
- Proper input labeling
- ARIA attributes for password visibility toggle
- Error messages properly associated with input
- Focus states with visible indicators

## Usage
\`\`\`vue
<!-- Basic usage -->
<AmoInput
  v-model="value"
  label="Username"
  placeholder="Enter username"
/>

<!-- With floating label -->
<AmoInput
  v-model="password"
  type="password"
  label="Password"
  :floating="true"
/>

<!-- With error state -->
<AmoInput
  v-model="email"
  type="email"
  label="Email"
  error="Please enter a valid email"
/>

<!-- With icons -->
<AmoInput v-model="search">
  <template #leftIcon>
    <SearchIcon />
  </template>
</AmoInput>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

// Basic input
export const Default = {
  render: () => ({
    components: { AmoInput },
    template: '<AmoInput placeholder="Basic input" />'
  }),
  parameters: {
    docs: {
      source: {
        code: '<AmoInput placeholder="Basic input" />'
      }
    }
  }
};

// With label
export const WithLabel = {
  render: () => ({
    components: { AmoInput },
    template: '<AmoInput label="Username" placeholder="Enter username" />'
  }),
  parameters: {
    docs: {
      source: {
        code: '<AmoInput label="Username" placeholder="Enter username" />'
      }
    }
  }
};

// Floating label
export const FloatingLabel = {
  render: () => ({
    components: { AmoInput },
    template: '<AmoInput label="Email" :floating="true" placeholder="Enter email" />'
  }),
  parameters: {
    docs: {
      source: {
        code: '<AmoInput label="Email" :floating="true" placeholder="Enter email" />'
      }
    }
  }
};

// All variants
export const Variants = {
  render: () => ({
    components: { AmoInput },
    template: `
      <div class="flex flex-col space-y-4">
        <AmoInput variant="primary" placeholder="Primary input" />
        <AmoInput variant="secondary" placeholder="Secondary input" />
        <AmoInput variant="success" placeholder="Success input" />
        <AmoInput variant="danger" placeholder="Danger input" />
        <AmoInput variant="warning" placeholder="Warning input" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'All available input variants.',
      },
      source: {
        code: `
<AmoInput variant="primary" placeholder="Primary input" />
<AmoInput variant="secondary" placeholder="Secondary input" />
<AmoInput variant="success" placeholder="Success input" />
<AmoInput variant="danger" placeholder="Danger input" />
<AmoInput variant="warning" placeholder="Warning input" />
`
      }
    }
  }
};

// All sizes
export const Sizes = {
  render: () => ({
    components: { AmoInput },
    template: `
      <div class="flex flex-col space-y-4">
        <AmoInput size="sm" placeholder="Small input" />
        <AmoInput size="md" placeholder="Medium input" />
        <AmoInput size="lg" placeholder="Large input" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Available input sizes: small (sm), medium (md), and large (lg).',
      },
      source: {
        code: `
<AmoInput size="sm" placeholder="Small input" />
<AmoInput size="md" placeholder="Medium input" />
<AmoInput size="lg" placeholder="Large input" />
`
      }
    }
  }
};

// Password input
export const Password = {
  render: () => ({
    components: { AmoInput },
    template: '<AmoInput type="password" label="Password" placeholder="Enter password" />'
  }),
  parameters: {
    docs: {
      description: {
        story: 'Password input with visibility toggle.',
      },
      source: {
        code: '<AmoInput type="password" label="Password" placeholder="Enter password" />'
      }
    }
  }
};

// With error
export const WithError = {
  render: () => ({
    components: { AmoInput },
    template: '<AmoInput label="Email" error="Please enter a valid email address" placeholder="Enter email" />'
  }),
  parameters: {
    docs: {
      description: {
        story: 'Input with error state and message.',
      },
      source: {
        code: '<AmoInput label="Email" error="Please enter a valid email address" placeholder="Enter email" />'
      }
    }
  }
};

// Disabled state
export const Disabled = {
  render: () => ({
    components: { AmoInput },
    template: '<AmoInput label="Username" disabled placeholder="This input is disabled" />'
  }),
  parameters: {
    docs: {
      description: {
        story: 'Disabled input state.',
      },
      source: {
        code: '<AmoInput label="Username" disabled placeholder="This input is disabled" />'
      }
    }
  }
};

// With icons
export const WithIcons = {
  render: () => ({
    components: { AmoInput },
    template: `
      <div class="flex flex-col space-y-4">
        <AmoInput placeholder="Search...">
          <template #leftIcon>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </template>
        </AmoInput>
        <AmoInput placeholder="Enter URL">
          <template #rightIcon>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </template>
        </AmoInput>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Input with left and right icons.',
      },
      source: {
        code: `
<AmoInput placeholder="Search...">
  <template #leftIcon>
    <SearchIcon />
  </template>
</AmoInput>

<AmoInput placeholder="Enter URL">
  <template #rightIcon>
    <LinkIcon />
  </template>
</AmoInput>
`
      }
    }
  }
};
