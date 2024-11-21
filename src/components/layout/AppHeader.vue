<template>
  <header class="header">
    <div class="logo">GlobalBank</div>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/apply">Оставить заявку</router-link>
      <router-link to="/profile">Профиль</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHeader',
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #4caf50;
  color: white;

  .logo {
    font-size: 2rem;
    font-weight: bold;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  nav {
    display: flex;
    gap: 3rem;
    margin-right: 5rem;
    font-size: 1.2rem;
    font-weight: 550;

    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #d3f9d8;
      }
    }
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .logo {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  nav {
    display: block;
    width: 100%;
    gap: 1rem;

    a {
      display: block;
      font-size: 1.1rem;
      padding: 0.5rem 0;
    }
  }
}
</style>
