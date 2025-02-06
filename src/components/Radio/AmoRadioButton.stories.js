import { ref } from 'vue';
import AmoRadioButton from './AmoRadioButton.vue';

const meta = {
  title: 'Components/AmoRadioButton',
  component: AmoRadioButton,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The selected value (v-model)',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'null' },
      },
    },
    value: {
      control: 'text',
      description: 'The value associated with the radio button',
      table: {
        type: { summary: 'string | number | boolean' },
      },
    },
    name: {
      control: 'text',
      description: 'The name attribute for the radio button group',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text for the radio button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'The visual style variant of the radio button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the radio button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    block: {
      control: 'boolean',
      description: 'Whether the radio button should take full width',
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
A customizable radio button component that supports different variants, sizes, and states.

## Features
- Multiple visual variants (primary, secondary, danger, success, warning)
- Different sizes (sm, md, lg)
- Disabled state
- Full width option
- Dark mode support
- Accessible design
- Custom styling support

## Usage
\`\`\`vue
<template>
  <AmoRadioButton
    v-model="selectedOption"
    name="options"
    value="option1"
    label="Option 1"
    variant="primary"
    size="md"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const selectedOption = ref(null)
    return { selectedOption }
  }
}
</script>
\`\`\`
        `
      }
    }
  }
};

export default meta;

// Basic Radio Button
export const Default = {
  render: () => ({
    components: { AmoRadioButton },
    setup() {
      const selected = ref('option1');
      return { selected };
    },
    template: `
      <div class="space-y-4">
        <AmoRadioButton
          v-model="selected"
          name="default"
          value="option1"
          label="Option 1"
        />
        <AmoRadioButton
          v-model="selected"
          name="default"
          value="option2"
          label="Option 2"
        />
      </div>
    `
  })
};

// Variants
export const Variants = {
  render: () => ({
    components: { AmoRadioButton },
    setup() {
      const selected = ref('primary');
      const variants = ['primary', 'secondary', 'success', 'warning', 'danger'];
      return { selected, variants };
    },
    template: `
      <div class="space-y-4">
        <AmoRadioButton
          v-for="variant in variants"
          :key="variant"
          v-model="selected"
          :name="'variants'"
          :value="variant"
          :label="variant.charAt(0).toUpperCase() + variant.slice(1)"
          :variant="variant"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons with different visual variants.'
      }
    }
  }
};

// Sizes
export const Sizes = {
  render: () => ({
    components: { AmoRadioButton },
    setup() {
      const selected = ref('md');
      return { selected };
    },
    template: `
      <div class="space-y-4">
        <AmoRadioButton
          v-model="selected"
          name="sizes"
          value="sm"
          label="Small"
          size="sm"
        />
        <AmoRadioButton
          v-model="selected"
          name="sizes"
          value="md"
          label="Medium"
          size="md"
        />
        <AmoRadioButton
          v-model="selected"
          name="sizes"
          value="lg"
          label="Large"
          size="lg"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons in different sizes.'
      }
    }
  }
};

// States
export const States = {
  render: () => ({
    components: { AmoRadioButton },
    setup() {
      const selected = ref('normal');
      return { selected };
    },
    template: `
      <div class="space-y-4">
        <AmoRadioButton
          v-model="selected"
          name="states"
          value="normal"
          label="Normal"
        />
        <AmoRadioButton
          v-model="selected"
          name="states"
          value="disabled"
          label="Disabled"
          disabled
        />
        <AmoRadioButton
          v-model="selected"
          name="states"
          value="block"
          label="Full Width"
          block
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons in different states: normal, disabled, and full width.'
      }
    }
  }
};

// Radio Group Example
export const RadioGroup = {
  render: () => ({
    components: { AmoRadioButton },
    setup() {
      const selected = ref('apple');
      const fruits = [
        { value: 'apple', label: 'Apple 🍎' },
        { value: 'banana', label: 'Banana 🍌' },
        { value: 'orange', label: 'Orange 🍊' },
        { value: 'grape', label: 'Grape 🍇' }
      ];
      return { selected, fruits };
    },
    template: `
      <div class="space-y-4">
        <div class="space-y-2">
          <AmoRadioButton
            v-for="fruit in fruits"
            :key="fruit.value"
            v-model="selected"
            name="fruits"
            :value="fruit.value"
            :label="fruit.label"
          />
        </div>
        <p class="text-gray-700 dark:text-gray-200 mt-4">
          Selected: {{ selected }}
        </p>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'A practical example of radio buttons in a group with emojis.'
      }
    }
  }
};
