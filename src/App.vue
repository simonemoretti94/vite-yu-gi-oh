<script>
import { state } from './state';
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
      state, //store.js variables
    }
  },
  created() {
    this.state.fetchArchetype(this.state.yuGiOhArchetype);
  },
  mounted() {
    this.state.cardsMaker(this.state.yuGiOhAPI);

  },
  methods: {
    filterResults() {
      let url = '';

      console.log('selected value: ', state.selectedArchetype);

      if (state.selectedArchetype === '') {
        url = state.yuGiOhAPI;
      }
      else {
        url = `${state.yuGiOhAPI}?archetype=${state.selectedArchetype}`;
      }

      console.log(url);
      state.cards = [];
      state.cardsMaker(url);
    }
  }


}
</script>

<template>
  <AppHeader></AppHeader>
  <div class="container">
    <select name="status" id="status" v-model="state.selectedArchetype" @change="filterResults()">
      <option value="" selected>All</option>
      <option v-for="archetype in state.archetypeList" :value="archetype.archetype_name">{{ archetype.archetype_name }}
      </option>
    </select>

    <div class="wrapper">
      <div id="card_counter" class="d-flex justify-content-start align-items-center">
        <span>Found {{ state.cards.length }} cards</span>
      </div>
      <div class="row d-flex flex-row justify-content-between">
        <AppMain v-for="element in state.cards" :url="element.card_images[0].image_url" :name="element.name"
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