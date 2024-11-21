<template>
  <div class="textarea-wrapper">
    <label :for="id" class="label">{{ label }}</label>
    <textarea
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="textarea"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTextarea',
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
      default: () => `textarea-${Math.random().toString(36).substring(2)}`,
    },
  },
});
</script>

<style scoped lang="scss">
.textarea-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  max-width: 50rem;
  min-height: 5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.label {
  font-size: 1rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .textarea-wrapper {
    gap: 10px;
  }

  .textarea {
    max-width: 20rem;
    padding: 8px;
    font-size: 0.9rem;
  }

  .label {
    font-size: 0.9rem;
  }
}
</style>
