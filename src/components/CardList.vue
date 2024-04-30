<template>
    <div class="container">
        <h4 class="bg-dark text-white p-3 ">Found  cards</h4>
        <div class="row" id="card-container" >
            <div class="col-12 col-md-6 col-lg-3 " v-for="card in store.card" :key="card.id">
                <CardComponent :id="card.id" :title="card.title" :status="card.status" :image="card.image" /> 
                
            </div>
        </div>
        
    </div>
</template>

<script>
import {store} from '../store.js';
import CardComponent from './CardComponent.vue';

    export default {
        name: 'CardList',
        components:{
            CardComponent
        },
        data() {
            return {
                store,
                
            }
        },
        mounted(){
            console.log(this.store.cards);
        }
    }
</script>

<style lang="scss" scoped>
#card-container{
    padding: 50px;
    background-color: white;

   
}
</style>