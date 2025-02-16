<template>
  <div
    class="amo-card"
    :class="[
      {
        'hover:shadow-lg transition-shadow duration-200': hoverable,
        'border border-gray-200 dark:border-zinc-700':
          bordered && variant === 'default',
        'shadow-sm': variant !== 'ghost',
      },
      sizeClasses[size],
      variantClasses[variant],
      className,
    ]"
  >
    <div
      v-if="$slots.header"
      class="px-6 py-4 border-b border-gray-200 dark:border-zinc-700"
    >
      <slot name="header" />
    </div>

    <div v-if="$slots.cover" class="w-full">
      <slot name="cover" />
    </div>

    <div :class="contentClasses[size]">
      <slot />
    </div>

    <div
      v-if="$slots.footer"
      class="px-6 py-4 border-t border-gray-200 dark:border-zinc-700"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AmoCard",
  props: {
    hoverable: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg"].includes(value),
    },
    variant: {
      type: String,
      default: "default",
      validator: (value) =>
        [
          "default",
          "primary",
          "secondary",
          "success",
          "warning",
          "danger",
          "ghost",
        ].includes(value),
    },
    className: {
      type: String,
      default: "",
    },
  },
  setup() {
    const sizeClasses = {
      sm: "rounded",
      md: "rounded-lg",
      lg: "rounded-xl",
    };

    const contentClasses = {
      sm: "px-4 py-3",
      md: "px-6 py-4",
      lg: "px-8 py-6",
    };

    const variantClasses = {
      default: "bg-white dark:bg-zinc-800",
      primary:
        "bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-900",
      secondary:
        "bg-secondary-50 dark:bg-secondary-950 border border-secondary-200 dark:border-secondary-900",
      success:
        "bg-success-50 dark:bg-success-950 border border-success-200 dark:border-success-900",
      warning:
        "bg-warning-50 dark:bg-warning-950 border border-warning-200 dark:border-warning-900",
      danger:
        "bg-danger-50 dark:bg-danger-950 border border-danger-200 dark:border-danger-900",
      ghost: "bg-transparent",
    };

    return {
      sizeClasses,
      contentClasses,
      variantClasses,
    };
  },
};
</script>

<style scoped>
.amo-card {
  @apply overflow-hidden backdrop-blur-sm;
}
</style>
