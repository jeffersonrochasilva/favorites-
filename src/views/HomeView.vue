<template>
  <div class="home">
    <div class="home__container">
      <h1>Lista de usuarios</h1>
      <div class="home__container__usuarios">
        <div
          class="home__container__usuarios__card"
          v-for="item in listaPessoas"
          :key="item.id"
          @click="carregarFavoritos(item)"
        >
          <div class="home__container__usuarios__card__icon">
            <a href="">
              <span v-if="true">Favorito</span>
              <span v-else>Favoritar</span>
            </a>
          </div>
          <span>{{ item.nome }}</span>
          <span>{{ item.sobrenome }}</span>
          <span>{{ item.idade }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { onMounted } from "vue";
import { usuarioStore } from "../store/usuario";

const nome = "jefferson rocha da silva ";
const store = usuarioStore();
const listaPessoas = store.listaPessoas;

function carregarFavoritos(item) {
  store.adicionarFavoritos(item);
  // console.log("item", item);
}
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
      display: flex;
      &__card {
        width: 350px;
        height: 200px;
        border-radius: 5px;
        margin: 10px;
        background: pink;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        &__icon {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          a {
            width: 50px;
            height: 50px;
            font-size: 10px;
            border-radius: 50%;
            background: red;
            text-decoration: none;
            margin-right: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
