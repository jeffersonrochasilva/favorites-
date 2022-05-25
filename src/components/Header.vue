<template>
  <div class="header">
    <div class="header__container">
      <div class="header__container__description">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">Favoritos</router-link>
      </div>
      <div class="header__container__img">
        <h3>{{ listaPessoas }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { usuarioStore } from "../store/usuario";

const store = usuarioStore();
const listaPessoas = computed(() => {
  return store.totalFavoritos;
});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100px;
  background: #2c3e52;
  display: flex;
  justify-content: center;
  &__container {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__description {
      a {
        color: #fff;
        font-size: 20px;
        text-decoration: none;
        // padding: 20px;
      }
    }
    &__img {
      border-radius: 50%;
      background: #fff;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
