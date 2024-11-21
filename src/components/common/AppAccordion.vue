<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion__item"
    >
      <div
        class="accordion__question"
        @click="toggle(index)"
      >
        {{ item.question }}
        <span class="accordion__icon">
          {{ activeIndex === index ? '-' : '+' }}
        </span>
      </div>
      <div
        v-show="activeIndex === index"
        class="accordion__answer"
      >
        {{ item.answer }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppAccordion',
  props: {
    items: {
      type: Array as () => { question: string; answer: string }[],
      required: true,
    },
  },
  setup() {
    const activeIndex = ref<null | number>(null);

    const toggle = (index: number) => {
      activeIndex.value = activeIndex.value === index ? null : index;
    };

    return { activeIndex, toggle };
  },
});
</script>

<style scoped lang="scss">
.accordion {
  .accordion__item {
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;

    .accordion__question {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      color: #2c3e50;

      &:hover {
        color: #ddb00c;
      }
    }

    .accordion__answer {
      margin-top: 5px;
      color: #555;
    }

    .accordion__icon {
      font-size: 1.2rem;
    }
  }
}

@media (max-width: 768px) {
  .accordion__item {
    padding: 8px 0;
  }

  .accordion__question {
    font-size: 1rem;
    gap: 8px;
  }

  .accordion__icon {
    font-size: 1rem;
  }

  .accordion__answer {
    font-size: 0.9rem;
    margin-top: 5px;
  }
}
</style>
