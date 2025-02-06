import AmoDropdown from './AmoDropdown.vue';
import AmoButton from '../Button/AmoButton.vue';

const meta = {
  title: 'Components/AmoDropdown',
  component: AmoDropdown,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      description: 'The preferred placement of the dropdown',
      control: 'select',
      options: ['auto', 'top', 'bottom'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    closeOnClick: {
      description: 'Whether to close the dropdown when clicking on its content',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      description: 'Custom width for the dropdown (Tailwind class)',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    minWidth: {
      description: 'Minimum width for the dropdown (CSS value)',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '180px' },
      },
    },
    contentClass: {
      description: 'Additional classes for the dropdown content',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    offset: {
      description: 'Offset from the trigger element (in pixels)',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 8 },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
A versatile dropdown component that provides a toggleable menu or content panel.

## Features
- Customizable trigger element (using slots)
- Multiple placement options (auto, top, bottom)
- Smooth animations
- Responsive positioning
- Click outside to close
- Optional close on content click
- Dark mode support
- Custom width and minimum width
- Customizable content using slots

## Usage
\`\`\`vue
<template>
  <AmoDropdown placement="bottom" close-on-click>
    <!-- Trigger slot -->
    <template #trigger="{ open }">
      <AmoButton :variant="open ? 'primary' : 'secondary'">
        Menu
      </AmoButton>
    </template>

    <!-- Content -->
    <div class="py-2">
      <button 
        v-for="item in menuItems" 
        :key="item"
        class="block w-full px-4 py-2 text-left hover:bg-gray-100"
      >
        {{ item }}
      </button>
    </div>
  </AmoDropdown>
</template>
\`\`\`

## Slots
- \`trigger\` - The element that triggers the dropdown. Receives \`open\` prop.
- default - The content of the dropdown. Receives \`close\` method.

## Events
- \`open\` - Emitted when the dropdown opens
- \`close\` - Emitted when the dropdown closes
        `
      }
    }
  }
};

export default meta;

// Basic Dropdown
export const Default = {
  render: () => ({
    components: { AmoDropdown, AmoButton },
    template: `
      <div class="h-64 flex items-center justify-center">
        <AmoDropdown>
          <template #trigger="{ open }">
            <AmoButton :variant="open ? 'primary' : 'secondary'">
              Click me
            </AmoButton>
          </template>
          <div class="p-4">
            <p class="text-gray-700 dark:text-gray-200">Dropdown content</p>
          </div>
        </AmoDropdown>
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<AmoDropdown>
  <template #trigger="{ open }">
    <AmoButton :variant="open ? 'primary' : 'secondary'">
      Click me
    </AmoButton>
  </template>
  <div class="p-4">
    <p class="text-gray-700 dark:text-gray-200">Dropdown content</p>
  </div>
</AmoDropdown>
        `
      }
    }
  }
};

// Placement Options
export const Placement = {
  render: () => ({
    components: { AmoDropdown, AmoButton },
    template: `
      <div class="h-64 flex items-center justify-center space-x-4">
        <AmoDropdown placement="top">
          <template #trigger="{ open }">
            <AmoButton :variant="open ? 'primary' : 'secondary'">
              Top
            </AmoButton>
          </template>
          <div class="p-4">
            <p class="text-gray-700 dark:text-gray-200">Dropdown content</p>
          </div>
        </AmoDropdown>

        <AmoDropdown placement="bottom">
          <template #trigger="{ open }">
            <AmoButton :variant="open ? 'primary' : 'secondary'">
              Bottom
            </AmoButton>
          </template>
          <div class="p-4">
            <p class="text-gray-700 dark:text-gray-200">Dropdown content</p>
          </div>
        </AmoDropdown>

        <AmoDropdown placement="auto">
          <template #trigger="{ open }">
            <AmoButton :variant="open ? 'primary' : 'secondary'">
              Auto
            </AmoButton>
          </template>
          <div class="p-4">
            <p class="text-gray-700 dark:text-gray-200">Dropdown content</p>
          </div>
        </AmoDropdown>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'A dropdown with a custom width and close-on-click.'
      },
      source: {
        code: `
<AmoDropdown width="96" close-on-click>
  <template #trigger="{ open }">
    <AmoButton :variant="open ? 'primary' : 'secondary'">
      Wide Dropdown
    </AmoButton>
  </template>
  <div class="p-4">
    <p class="text-gray-700 dark:text-gray-200">Dropdown content</p>
  </div>
</AmoDropdown>
        `
      }
    }
  }
};

// Custom Width
export const CustomWidth = {
  render: () => ({
    components: { AmoDropdown, AmoButton },
    template: `
      <div class="h-64 flex items-center justify-center">
        <AmoDropdown width="96" min-width="300px">
          <template #trigger="{ open }">
            <AmoButton :variant="open ? 'primary' : 'secondary'">
              Wide Dropdown
            </AmoButton>
          </template>
          <div class="p-4">
            <p class="text-gray-700 dark:text-gray-200">
              This dropdown has a custom width of 24rem (w-96) and a minimum width of 300px.
            </p>
          </div>
        </AmoDropdown>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'A dropdown with a custom width and close-on-click.'
      },
      source: {
        code: `
<AmoDropdown width="96" close-on-click>
  <template #trigger="{ open }">
    <AmoButton :variant="open ? 'primary' : 'secondary'">
      Wide Dropdown
    </AmoButton>
  </template>
  <div class="p-4">
    <p class="text-gray-700 dark:text-gray-200">Dropdown content</p>
  </div>
</AmoDropdown>
        `
      }
    }
  }
};

// Menu Example
export const MenuExample = {
  render: () => ({
    components: { AmoDropdown, AmoButton },
    template: `
      <div class="h-64 flex items-center justify-center">
        <AmoDropdown close-on-click>
          <template #trigger="{ open }">
            <AmoButton :variant="open ? 'primary' : 'secondary'">
              Menu (Click to Close)
            </AmoButton>
          </template>
          <div class="py-2">
            <button 
              v-for="item in ['Profile', 'Settings', 'Help', 'Sign out']" 
              :key="item"
              class="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200"
              @click="() => console.log('Clicked:', item)"
            >
              {{ item }}
            </button>
          </div>
        </AmoDropdown>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'A menu example that closes when an item is clicked using the `close-on-click` prop.'
      },
      source: {
        code: `
        <div class="h-64 flex items-center justify-center">
          <AmoDropdown close-on-click>
            <template #trigger="{ open }">
              <AmoButton :variant="open ? 'primary' : 'secondary'">
                Menu (Click to Close)
              </AmoButton>
            </template>
            <div class="py-2">
              <button 
                v-for="item in ['Profile', 'Settings', 'Help', 'Sign out']" 
                :key="item"
                class="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200"
                @click="() => console.log('Clicked:', item)"
              >
                {{ item }}
              </button>
            </div>
          </AmoDropdown>
        </div>
        `
      }
    }
  }
};

import { ref } from 'vue';
// Interactive Menu
export const InteractiveMenu = {
  render: () => ({
    components: { AmoDropdown, AmoButton },
    setup() {
      const selectedItem = ref(null);
      const handleSelect = (item) => {
        selectedItem.value = item;
      };
      return { selectedItem, handleSelect };
    },
    template: `
      <div class="h-64 flex flex-col items-center justify-center gap-4">
        <AmoDropdown close-on-click>
          <template #trigger="{ open }">
            <AmoButton :variant="open ? 'primary' : 'secondary'">
              Select Item
            </AmoButton>
          </template>
          <div class="py-2">
            <button 
              v-for="item in ['Option 1', 'Option 2', 'Option 3', 'Option 4']" 
              :key="item"
              class="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200"
              @click="handleSelect(item)"
            >
              {{ item }}
            </button>
          </div>
        </AmoDropdown>
        <p class="text-gray-700 dark:text-gray-200">
          Selected: {{ selectedItem ?? '(none)' }}
        </p>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'An interactive menu that demonstrates handling item selection with automatic closing.'
      },
      source: {
        code: `
<AmoDropdown close-on-click>
  <template #trigger="{ open }">
    <AmoButton :variant="open ? 'primary' : 'secondary'">
      Select Item
    </AmoButton>
  </template>
  <div class="py-2">
    <button 
      v-for="item in ['Option 1', 'Option 2', 'Option 3', 'Option 4']" 
      :key="item"
      class="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200"
      @click="handleSelect(item)"
    >
      {{ item }}
    </button>
  </div>
</AmoDropdown>
        `
      }
    }
  }
};
