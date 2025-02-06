<template>
  <label :class="[
    'flex items-center cursor-pointer',
    disabled && 'opacity-50 cursor-not-allowed',
    block && 'w-full',
    className
  ]">
    <input
      ref="radioRef"
      type="radio"
      :class="[
        'form-radio border-2 focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-900',
        sizeClasses[size],
        variantClasses[variant],
        { 'cursor-not-allowed': disabled }
      ]"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      @change="updateValue"
    >
    <span 
      v-if="label"
      :class="[
        'ml-2',
        textSizeClasses[size],
        disabled ? 'text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-200'
      ]"
    >
      {{ label }}
    </span>
  </label>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'AmoRadioButton',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    value: {
      type: [String, Number, Boolean],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'danger', 'success', 'warning'].includes(value)
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
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const radioRef = ref(null)

    const sizeClasses = computed(() => ({
      'sm': 'h-3 w-3',
      'md': 'h-4 w-4',
      'lg': 'h-5 w-5'
    }))

    const textSizeClasses = computed(() => ({
      'sm': 'text-sm',
      'md': 'text-base',
      'lg': 'text-lg'
    }))

    const variantClasses = computed(() => ({
      'primary': 'text-primary-500 border-gray-300 dark:border-zinc-600 focus:ring-primary-500',
      'secondary': 'text-gray-500 border-gray-300 dark:border-zinc-600 focus:ring-gray-500',
      'danger': 'text-danger-500 border-gray-300 dark:border-zinc-600 focus:ring-danger-500',
      'success': 'text-success-500 border-gray-300 dark:border-zinc-600 focus:ring-success-500',
      'warning': 'text-warning-500 border-gray-300 dark:border-zinc-600 focus:ring-warning-500'
    }))

    const updateValue = () => {
      if (!props.disabled) {
        emit('update:modelValue', props.value)
      }
    }

    return {
      radioRef,
      sizeClasses,
      textSizeClasses,
      variantClasses,
      updateValue
    }
  }
}
</script>

<style>
input[type="radio"] {
  @apply appearance-none;
  @apply rounded-full;
  @apply checked:bg-current;
  @apply checked:border-transparent;
  @apply transition-all duration-200;
  @apply bg-center bg-no-repeat;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

.dark input[type="radio"] {
  @apply bg-zinc-900;
}
</style>
