
<template>
  <HeaderComponents/>
</template>

<script>
import {store} from './store.js';

  import HeaderComponents from './components/HeaderComponents.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponents
    },
    data() {
      return {
        store
      }
    },
    mounted() {
      console.log(this.store);
    }
  }
</script>

<style lang="scss" scoped>

</style>