<template>
  <button
    :type="type"
    :class="[
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-900',
      sizeClasses[size],
      variantClasses[variant],
      { 
        'opacity-50 cursor-not-allowed pointer-events-none': disabled,
        'w-full': block,
      },
      className
    ]"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <!-- Loading Spinner -->
    <svg
      v-if="loading"
      class="animate-spin absolute"
      :class="[spinnerSizeClasses[size]]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>

    <!-- Left Icon -->
    <span v-if="$slots.icon && !iconRight" class="icon">
      <slot name="icon" />
    </span>

    <!-- Content -->
    <span :class="{ 'opacity-0': loading }">
      <slot />
    </span>

    <!-- Right Icon -->
    <span v-if="$slots.icon && iconRight" class="icon">
      <slot name="icon" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'AmoButton',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'button'
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => [
        'primary',
        'secondary',
        'outline',
        'ghost',
        'danger',
        'success',
        'warning'
      ].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    iconRight: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup() {
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-5 py-2.5 text-base'
    }

    const spinnerSizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-4 w-4',
      lg: 'h-5 w-5'
    }

    const variantClasses = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600',
      secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 dark:bg-secondary-500 dark:hover:bg-secondary-600',
      outline: 'border border-gray-200 text-primary-600 hover:bg-zinc-100 focus:ring-primary-500 dark:border-zinc-700 dark:text-primary-400 dark:hover:bg-zinc-950/50',
      ghost: 'text-primary-600 hover:bg-zinc-100 focus:ring-primary-500 dark:text-primary-400 dark:hover:bg-zinc-950/50',
      danger: 'bg-danger-600 text-white hover:bg-danger-700 focus:ring-danger-500 dark:bg-danger-500 dark:hover:bg-danger-600',
      success: 'bg-success-600 text-white hover:bg-success-700 focus:ring-success-500 dark:bg-success-500 dark:hover:bg-success-600',
      warning: 'bg-warning-600 text-white hover:bg-warning-700 focus:ring-warning-500 dark:bg-warning-500 dark:hover:bg-warning-600'
    }

    return {
      sizeClasses,
      spinnerSizeClasses,
      variantClasses
    }
  }
}
</script>
