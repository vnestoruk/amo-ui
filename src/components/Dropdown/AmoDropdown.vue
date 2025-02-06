<template>
  <div class="relative" ref="container">
    <div @click="toggle">
      <slot name="trigger" :open="isOpen" />
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-if="isOpen"
        class="absolute z-50 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700"
        :class="[
          width ? `w-${width}` : '',
          dropdownPosition.class,
          contentClass
        ]"
        :style="[
          dropdownPosition.style,
          { minWidth: minWidth || '180px' }
        ]"
        @click="handleContentClick"
      >
        <slot :close="close" />
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'

export default {
  name: 'AmoDropdown',
  props: {
    width: {
      type: String,
      default: null
    },
    minWidth: {
      type: String,
      default: null
    },
    contentClass: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'auto', // 'auto', 'top', 'bottom'
      validator: (value) => ['auto', 'top', 'bottom'].includes(value)
    },
    offset: {
      type: Number,
      default: 8
    },
    closeOnClick: {
      type: Boolean,
      default: false
    }
  },
  emits: ['open', 'close'],
  setup(props, { emit }) {
    const isOpen = ref(false)
    const container = ref(null)

    const dropdownPosition = computed(() => {
      if (!container.value) return { class: '', style: '' }

      const rect = container.value.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      const spaceAbove = rect.top
      const dropdownHeight = 150 // Approximate height of dropdown

      // Force top placement
      if (props.placement === 'top') {
        return {
          class: 'bottom-full mb-2',
          style: 'max-height: ' + (spaceAbove - 20) + 'px; overflow-y: auto;'
        }
      }

      // Force bottom placement
      if (props.placement === 'bottom') {
        return {
          class: 'top-full mt-2',
          style: 'max-height: ' + (spaceBelow - 20) + 'px; overflow-y: auto;'
        }
      }

      // Auto placement
      if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
        return {
          class: 'bottom-full mb-2',
          style: 'max-height: ' + (spaceAbove - 20) + 'px; overflow-y: auto;'
        }
      }
      
      return {
        class: 'top-full mt-2',
        style: 'max-height: ' + (spaceBelow - 20) + 'px; overflow-y: auto;'
      }
    })

    const toggle = () => {
      isOpen.value = !isOpen.value
      emit(isOpen.value ? 'open' : 'close')
    }

    const close = () => {
      if (isOpen.value) {
        isOpen.value = false
        emit('close')
      }
    }

    const handleClickOutside = (event) => {
      if (container.value && !container.value.contains(event.target)) {
        close()
      }
    }

    const handleContentClick = (event) => {
      // Only close if closeOnClick is true and the click target is not the dropdown container
      if (props.closeOnClick && event.target !== container.value) {
        close()
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      isOpen,
      container,
      dropdownPosition,
      toggle,
      close,
      handleContentClick
    }
  }
}
</script>
