
<template>
  <HeaderComponents  @statusSearch="setParams"/>
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
      setParams() {
        const options = {};
        if(this.store.statusFilter){
          options.params = {
            status: this.store.statusFilter
          }
        }
        this.getCharacters(options);
      },
      getCharacters(){
        //console.log(opt);
        //console.log(val)
        axios.get(this.store.apiUrl,this.store.endPoint.card,this.store.options ).then((res) => {
          this.store.card = res.data.data.map((card) =>{
            return {
              id: card.id,
              title: card.name,
              image: card.card_images[0].image_url,
              status: card.archetype
            }
          });
          console.log(this.store.card);
          this.store.total = res.data.meta.total_rows;
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