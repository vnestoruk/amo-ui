import AmoCard from "./AmoCard.vue";
import AmoButton from "../Button/AmoButton.vue";

export default {
  title: "Components/AmoCard",
  component: AmoCard,
  tags: ["autodocs"],
  argTypes: {
    hoverable: {
      control: "boolean",
      description: "Whether the card should have hover effects",
    },
    bordered: {
      control: "boolean",
      description: "Whether to show the border",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the card",
    },
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "ghost",
      ],
      description: "Visual style variant of the card",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { AmoCard },
    setup() {
      return { args };
    },
    template: `
      <AmoCard v-bind="args">
        <p class="text-gray-700 dark:text-gray-300">
          This is the card content
        </p>
      </AmoCard>
    `,
  }),
  args: {
    hoverable: false,
    bordered: true,
    size: "md",
    variant: "default",
  },
};

export const Variants = {
  render: (args) => ({
    components: { AmoCard },
    setup() {
      const variants = [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "ghost",
      ];
      return { args, variants };
    },
    template: `
      <div class="space-y-4">
        <AmoCard v-for="variant in variants" :key="variant" v-bind="args" :variant="variant">
          <template #header>
            <h3 class="text-lg font-semibold capitalize">{{ variant }} Card</h3>
          </template>
          <p class="text-gray-700 dark:text-gray-300">
            This is a {{ variant }} variant card example.
          </p>
        </AmoCard>
      </div>
    `,
  }),
  args: {
    hoverable: true,
    bordered: true,
    size: "md",
  },
};

export const WithHeaderAndFooter = {
  render: (args) => ({
    components: { AmoCard, AmoButton },
    setup() {
      return { args };
    },
    template: `
      <AmoCard v-bind="args">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Card Title</h3>
            <AmoButton size="sm" variant="ghost">Action</AmoButton>
          </div>
        </template>
        <p class="text-gray-700 dark:text-gray-300">
          This is the main content of the card with a more complex header and footer.
        </p>
        <template #footer>
          <div class="flex justify-end space-x-2">
            <AmoButton size="sm" variant="ghost">Cancel</AmoButton>
            <AmoButton size="sm">Submit</AmoButton>
          </div>
        </template>
      </AmoCard>
    `,
  }),
  args: {
    hoverable: true,
    bordered: true,
    size: "md",
    variant: "default",
  },
};

export const WithCover = {
  render: (args) => ({
    components: { AmoCard },
    setup() {
      return { args };
    },
    template: `
      <AmoCard v-bind="args">
        <template #cover>
          <img 
            src="https://picsum.photos/600/300" 
            alt="Cover image"
            class="w-full h-auto object-cover"
          />
        </template>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Card with Cover</h3>
        </template>
        <p class="text-gray-700 dark:text-gray-300">
          This card includes a cover image and demonstrates the card's versatility.
        </p>
      </AmoCard>
    `,
  }),
  args: {
    hoverable: true,
    bordered: true,
    size: "md",
    variant: "default",
  },
};
