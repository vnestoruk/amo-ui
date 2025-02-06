<template>
  <div class="relative">
    <!-- Non-floating Label -->
    <label 
      v-if="label && !floating" 
      :for="id" 
      class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
    >
      {{ label }}
    </label>

    <!-- Input Group -->
    <div class="relative">
      <!-- Floating Label -->
      <label
        v-if="label && floating"
        :for="id"
        class="absolute px-2 duration-200 transform -translate-y-1/2 z-10 origin-[0] bg-white dark:bg-zinc-800 rounded pointer-events-none"
        :class="[
          error ? 'text-danger-500' : 'base:text-gray-500 base:dark:text-gray-400',
          disabled ? 'opacity-50' : '',
          variantLabelClasses[variant],
          sizeLabelClasses[size],
          modelValue || focused
            ? ` translate-x-4 scale-75 top-0 peer-focus:text-${variant}-500 dark:peer-focus:text-${variant}-400`
            : ' top-1/2 ms-5 opacity-40 grayscale'
        ]"
      >
        {{ label }}
      </label>

      <!-- Left Icon -->
      <div 
        v-if="$slots.leftIcon" 
        class="absolute inset-y-0 left-0 flex items-center pl-3"
        :class="[
          disabled ? 'opacity-50' : '',
          error ? 'text-danger-500' : 'text-gray-500 dark:text-gray-400'
        ]"
      >
        <slot name="leftIcon" />
      </div>

      <!-- Input Element -->
      <input
        :id="id"
        ref="input"
        v-bind="$attrs"
        :value="modelValue"
        :type="type === 'password' ? (passwordVisible ? 'text' : 'password') : type"
        :disabled="disabled"
        :placeholder="(floating && !focused) ? '' : placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="focused = true"
        @blur="focused = false"
        class="peer text-gray-500 dark:text-gray-400"
        :class="[
          // Base styles
          'block w-full bg-white dark:bg-zinc-800 border transition-all duration-200 focus:outline-none',
          // Size variants
          sizeInputClasses[size],
          // Icon padding
          $slots.leftIcon ? 'pl-10' : '',
          ($slots.rightIcon || type === 'password') ? 'pr-10' : '',
          // Floating label padding adjustment
          floating ? 'pt-4' : '',
          // Variants and states
          error 
            ? 'border-danger-500 focus:border-danger-500 focus:ring-2 focus:ring-danger-500/20 dark:border-danger-500'
            : disabled
              ? 'border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 cursor-not-allowed'
              : variantInputClasses[variant],
          // Full width
          block ? 'w-full' : ''
        ]"
      />

      <!-- Right Icon -->
      <div 
        v-if="$slots.rightIcon || type === 'password'" 
        class="absolute inset-y-0 right-0 flex items-center pr-3"
        :class="[
          disabled ? 'opacity-50' : '',
          error ? 'text-danger-500' : 'text-gray-500 dark:text-gray-400'
        ]"
      >
        <slot name="rightIcon">
          <button
            v-if="type === 'password'"
            type="button"
            @click="togglePasswordVisibility"
            class="focus:outline-none hover:text-gray-700 dark:hover:text-gray-300 transition-colors "
            tabindex="-1"
            :aria-label="passwordVisible ? 'Hide password' : 'Show password'"
          >
            <!-- Eye Icon (Password Visible) -->
            <svg
              v-if="passwordVisible"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <!-- Eye-Off Icon (Password Hidden) -->
            <svg
              v-else
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          </button>
        </slot>
      </div>
    </div>

    <!-- Error Message -->
    <p 
      v-if="error" 
      class="mt-2 text-sm text-danger-500"
    >
      {{ error }}
    </p>

    <!-- Helper Text -->
    <p 
      v-else-if="helper" 
      class="mt-2 text-sm text-gray-500 dark:text-gray-400"
    >
      {{ helper }}
    </p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AmoInput',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    id: {
      type: String,
      default: () => `input-${Math.random().toString(36).substring(2, 9)}`
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    helper: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'success', 'warning', 'danger'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: value => ['sm', 'md', 'lg'].includes(value)
    },
    block: {
      type: Boolean,
      default: false
    },
    floating: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const focused = ref(false)
    const passwordVisible = ref(false)
    
    const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value
    }

    const variantInputClasses = {
      primary: 'border-primary-200 dark:border-zinc-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 selection:bg-primary-500',
      secondary: 'border-secondary-200 dark:border-zinc-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-500/20 dark:focus:border-secondary-400 dark:focus:ring-secondary-400/20 selection:bg-secondary-500',
      success: 'border-success-200 dark:border-zinc-700 focus:border-success-500 focus:ring-2 focus:ring-success-500/20 dark:focus:border-success-400 dark:focus:ring-success-400/20 selection:bg-success-500',
      warning: 'border-warning-200 dark:border-zinc-700 focus:border-warning-500 focus:ring-2 focus:ring-warning-500/20 dark:focus:border-warning-400 dark:focus:ring-warning-400/20 selection:bg-warning-500',
      danger: 'border-danger-200 dark:border-zinc-700 focus:border-danger-500 focus:ring-2 focus:ring-danger-500/20 dark:focus:border-danger-400 dark:focus:ring-danger-400/20 selection:bg-danger-500'
    }

    const variantLabelClasses = {
      primary: 'text-primary-600 dark:text-primary-400',
      secondary: 'text-secondary-600 dark:text-secondary-400',
      success: 'text-success-600 dark:text-success-400',
      warning: 'text-warning-600 dark:text-warning-400',
      danger: 'text-danger-600 dark:text-danger-400'
    }

    const sizeInputClasses = {
      sm: 'px-3 py-2 text-sm rounded-lg',
      md: 'px-4 py-2.5 rounded-xl',
      lg: 'px-4 py-3 text-lg rounded-xl'
    }

    const sizeLabelClasses = {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg'
    }

    return {
      variantInputClasses,
      variantLabelClasses,
      sizeInputClasses,
      sizeLabelClasses,
      focused,
      passwordVisible,
      togglePasswordVisibility
    }
  }
}
</script>
