<template>
  <div id="app">
    <AppHeader />
    <router-view class="body" />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-color: #f4f6f9;
  color: #333;
  font-family: 'PT Serif', serif;

  > * {
    flex-shrink: 0;
  }
}

.body {
  margin: 0 10rem;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .body {
    margin: 0 2rem;
  }
}
</style>
