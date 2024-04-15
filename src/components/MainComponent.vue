<template>
    <main>
        <CardList/>
    </main>
</template>

<script>
import CardList from './CardList.vue';

    export default {
        name: 'MainComponent',
        components:{
            CardList
        }
    }
</script>

<style lang="scss" scoped>
main{
    background-color: #D48F38;
}
</style>