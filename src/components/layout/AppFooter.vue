<template>
  <footer class="footer">
    <p>© 2024 GlobalBank. Все права защищены.</p>
    <p>Свяжитесь с нами: support@bankmodern.ru</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter',
});
</script>

<style scoped lang="scss">
.footer {
  text-align: center;
  padding: 3rem;
  background: #333;
  color: #fff;
  font-size: 1rem;

  p {
    margin: 5px 0;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 1.5rem;
    font-size: 0.9rem;
  }

  p {
    margin: 10px 0;
  }
}
</style>
