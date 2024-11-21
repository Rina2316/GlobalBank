<template>
  <div class="input-wrapper">
    <label :for="id" class="label">{{ label }}</label>
    <input
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      default: () => `input-${Math.random().toString(36).substring(2)}`,
    },
  },
});
</script>

<style scoped lang="scss">
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 50rem;
  height: 2rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.label {
  font-size: 1rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .input-wrapper {
    gap: 8px;
  }

  .input {
    padding: 8px;
    height: 1.8rem;
    font-size: 1rem;

  max-width: 20rem;
  }

  .label {
    font-size: 0.9rem;
  }
}
</style>
