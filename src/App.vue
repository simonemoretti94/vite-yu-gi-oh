<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'app',
  components: { //imported components 
    AppHeader,
    AppMain,
  },
  data() { //variables, bool, array, objects and so on

    return {
      store, //store.js variables
    }
  },
  methods: { //functions; all kind of manipulations
    // cardsMaker(url) {
    //   for (let i = 0; i < 15; i++) {
    //     axios.get(this.store.yuGiOhAPI)
    //       .then((response) => {
    //         this.store.cards.push(response.data.data[i]);
    //         //console.log('response.data.data[i].card_images[0]', response.data.data[i].card_images[0]);
    //       })
    //       .catch(function (err) {
    //         console.log(err);
    //       });
    //   };

    // },

  },
  created() {
    //this.cardsMaker(this.store.yuGiOhAPI);
    this.store.cardsMaker(this.store.yuGiOhAPI);
  },


}
</script>

<template>
  <AppHeader></AppHeader>
  <div class="container">
    <select name="status" id="status" v-on:click="store.typeSelect($event)">
      <option value="" selected>All</option>
      <option value="Alien">Alien</option>
      <option value="Noble knight">Noble Knight</option>
      <option value="Infernoble Arms">Infernoble Arms</option>
    </select>

    <div class="wrapper">
      <div id="card_counter" class="d-flex justify-content-start align-items-center">
        <span>Found {{ store.cards.length }} cards</span>
      </div>
      <div class="row d-flex flex-row justify-content-between">
        <AppMain v-for="element in store.cards" :url="element.card_images[0].image_url" :name="element.name"
          :archetype="element.archetype">
        </AppMain>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

select {
  margin: 1rem auto;
  padding: .4rem .2rem;
  border-radius: 8px;
  font-size: medium;
  font-weight: 500;
  box-shadow: 0 0 5px #c97106;
}

#card_counter {
  min-height: 50px;
  background: linear-gradient(#212529, #0f1113, #181818, #0f1113, #212529);

  >span {
    margin-left: 1rem;
    color: white;
    font-weight: 400;
    letter-spacing: .7px;
  }

}

.wrapper {
  padding: 2rem 2rem 1rem 2rem;
  background-color: white;
}

.row {
  background-color: white;
  row-gap: 1rem;
  margin: 0;
  column-gap: .4rem;
}
</style>