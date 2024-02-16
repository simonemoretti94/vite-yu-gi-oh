<script>
//import * from '';

export default {
  name: 'AppHeader',
  components: { //imported components 
    //*,

  },
  data() { //variables, bool, array, objects and so on

    return {}
  },
}
</script>

<template>
  <header>
    <div class="wrapper d-flex justify-content-start align-items-center ms-2">
      <img id="logo" src="/logo-main.png" alt="yu-gi-oh_logo">
      <h5>Yu-Gi-Oh Api</h5>
    </div>
  </header>
</template>

<style>
header {
  background-color: var(--header-light);
  min-height: 50px;
  display: flex;
  align-items: center;

  & .wrapper {

    & #logo {
      width: 60px;
      max-height: 30px;
    }

    & h5 {
      margin-left: .5rem;
    }

  }

}
</style>