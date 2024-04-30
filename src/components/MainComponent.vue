<template>
    <main>
        <div class="container p-5 ">
            <!-- <select class="form-select w-25" @change="$emit('statusSearch')" v-model="status">
                <option value="">All</option>
                <option value="type">By Type</option>
                <option value="name">By Name</option>
                <option value="desc">By Description</option>
                <option value="atk">By Attack</option>
                <option value="def">By Defense</option>
                <option value="level">By Level</option>
                <option value="race">By Race</option>
                <option value="attribute">By Attribute</option>
            </select> -->
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
    },
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    background-color: #D48F38;
}
</style>