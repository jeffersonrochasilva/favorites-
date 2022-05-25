<template>
  <div class="home">
    <div class="home__container">
      <h1>favoritos</h1>
      <div class="home__container__favoritos">
        <div
          class="home__container__favoritos__usuarios"
          v-for="item in listaPessoas"
          :key="item.id"
        >
          <div class="home__container__favoritos__usuarios__card">
            <div class="home__container__favoritos__usuarios__card__icon">
              <a>
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
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { usuarioStore } from "../store/usuario";

const store = usuarioStore();
const listaPessoas = store.ListaFavoritos;
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
    &__favoritos {
      display: flex;
      &__usuarios {
        &__card {
          width: 350px;
          height: 200px;
          border-radius: 5px;
          background: pink;
          margin: 10px;
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
              background: #fff;
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
}
</style>
