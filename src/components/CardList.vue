<template>
    <div>
        card list
        <div v-for="card in store.cards" :key="card.id">

            <!-- <CardComponent :id="card.id" :title="card.name" :image="card.card_images[0].image_url" :status="card.type" :text="card.desc" :subtext="card.atk"/> -->
            <CardComponent/>
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
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>