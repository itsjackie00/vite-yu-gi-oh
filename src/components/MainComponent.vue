<template>
    <main>
        <div class="container p-5 ">
            <select  class="form-select w-25" >
                <option selected>Alien</option>
                <option value="1">Noble Knight</option>
                <option value="2">Archfiend</option>
            </select>
        </div>
        <CardList />
    </main>
</template>

<script>
import CardList from './CardList.vue';

export default {
    name: 'MainComponent',
    components: {
        CardList
    }
}
</script>

<style lang="scss" scoped>
main {
    background-color: #D48F38;
}
</style>