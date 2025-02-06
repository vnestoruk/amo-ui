<template>
  <label :class="[
    'flex items-center cursor-pointer',
    disabled && 'opacity-50 cursor-not-allowed',
    block && 'w-full',
    className
  ]">
    <input
      ref="checkboxRef"
      type="checkbox"
      :class="[
        'rounded transition-colors duration-200',
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'cursor-not-allowed'
      ]"
      :disabled="disabled"
      :checked="modelValue"
      @change="handleChange"
      v-bind="$attrs"
    />
    <span :class="[
      'ml-2 select-none transition-colors duration-200',
      disabled ? 'text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-200',
      sizeTextClasses[size]
    ]">
      <template v-if="label">{{ label }}</template>
      <slot v-else />
    </span>
  </label>
</template>

<script>
import { ref, watch, onMounted } from 'vue'

export default {
  name: 'AmoCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => [
        'primary',
        'secondary',
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
    block: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const checkboxRef = ref(null)

    const sizeClasses = {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5'
    }

    const sizeTextClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    }

    const variantClasses = {
      primary: 'text-primary-600 dark:text-primary-400 border-primary-300 dark:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-400',
      secondary: 'text-secondary-600 dark:text-secondary-400 border-secondary-300 dark:border-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-400',
      danger: 'text-danger-600 dark:text-danger-400 border-danger-300 dark:border-danger-600 focus:ring-danger-500 dark:focus:ring-danger-400',
      success: 'text-success-600 dark:text-success-400 border-success-300 dark:border-success-600 focus:ring-success-500 dark:focus:ring-success-400',
      warning: 'text-warning-600 dark:text-warning-400 border-warning-300 dark:border-warning-600 focus:ring-warning-500 dark:focus:ring-warning-400'
    }

    const handleChange = (event) => {
      const checked = event.target.checked
      emit('update:modelValue', checked)
      emit('change', checked)
    }

    // Watch for indeterminate prop changes
    watch(() => props.indeterminate, (value) => {
      if (checkboxRef.value) {
        checkboxRef.value.indeterminate = value
      }
    })

    // Set initial indeterminate state
    onMounted(() => {
      if (checkboxRef.value && props.indeterminate) {
        checkboxRef.value.indeterminate = true
      }
    })

    return {
      checkboxRef,
      sizeClasses,
      sizeTextClasses,
      variantClasses,
      handleChange
    }
  }
}
</script>

<style>
input[type="checkbox"] {
  @apply appearance-none border;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-900;
  @apply transition-all duration-200;
}

input[type="checkbox"]:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  @apply bg-current border-transparent;
}

input[type="checkbox"]:not(:disabled):not(:checked):hover {
  @apply border-current;
}
</style>
