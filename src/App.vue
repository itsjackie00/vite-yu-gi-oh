
<template>
  <HeaderComponents/>
  <MainComponent/>
</template>


<script>
import {store} from './store.js';
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
      getCharacters(){
        axios.get(this.store.apiUrl ).then((res) => {
          this.store.card = res.data.data,
          console.log(this.store)
          
        })
      },
    },
    created(){
    this.getCharacters();
  },
    mounted() {
      //console.log(this.store)
     
    }
  }
</script>

<style lang="scss" scoped>

</style>