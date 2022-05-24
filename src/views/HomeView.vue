<template>
  <div class="home">
    <div class="home__container">
      <h1>Lista de usuários</h1>
      <div class="home__container__usuarios">
        <div class="home__container__usuarios__card">
          <img src="" alt="" />
          <span>hello word</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__container{
    &__usuarios{
      &__card{
        width: 350px;
        height: 200px;
        border-radius: 5px;
        background: pink;
      }
    }
  }
}
</style>
