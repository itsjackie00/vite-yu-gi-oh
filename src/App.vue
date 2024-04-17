<template>
  <HeaderComponents @statusSearch="setParams" />
  <MainComponent />
</template>


<script>
import { store } from './store.js';
import axios from 'axios';

import HeaderComponents from './components/HeaderComponents.vue'
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponents,
    MainComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    setParams() {
      const options = {};
      if (this.store.statusFilter) {
        options.params = {
          status: this.store.statusFilter
        }
      }
      this.getCharacters(options);
    },
    getCharacters() {
      axios.get(this.store.apiUrl + this.store.endPoint.cards).then((res) => {
        //console.log(res.data);
        this.store.cards = res.data.data.map((card) => {
          return {
            id: card.id,
            title: card.name,
            image: card.card_images[0].image_url,
            status: card.archetype
          }
        })
        console.log(this.store.cards);
      })
    },
    getArchetype() {
      axios.get(this.store.apiUrl + this.store.endPoint.archetype).then((res) => {
         this.store.archetypeList = res.data.data.slice(0, 10);
        console.log(this.store.archetypeList);
      })
    }
  },
  created() {
    this.getCharacters();
    this.getArchetype();
  },
  mounted() {
    //console.log(this.store)

  }
}
</script>

<style lang="scss" scoped></style>