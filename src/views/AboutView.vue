<template>
  <div class="home">
    <div class="home__container">
      <h1>Favoritos</h1>
      <div class="home__container__usuarios">
        <div
          class="home__container__usuarios__card"
          v-for="item in listaPessoas"
          :key="item.id"
        >
          <!-- <img :src="item.avatar" alt="" /> -->
          <span>{{ item.last_name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
// const listaPessoas = [
//   {
//     id: 7,
//     email: "michael.llawund.com",
//     first_name: "Michael",
//     last_name: "Lawson",
//     avatar:
//       "https://www.google.com/url?sa=i&url=https%3A%2F%2Farita.com.br%2Fportal%2Fpessoa-expansiva-principais-caracteristicas-desta-personalidade%2F&psig=AOvVaw1LmDVxnjrMOff-w_jjY6O2&ust=1653491706001000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjDp-C2-PcCFQAAAAAdAAAAABAV",
//   },
// ];

const nome = "jefferson rocha da silva ";

const carregarnomes = onMounted(() => {
  return listaPessoas.value;
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__container {
    &__usuarios {
      &__card {
        width: 350px;
        height: 200px;
        border-radius: 5px;
        background: pink;
      }
    }
  }
}
</style>
