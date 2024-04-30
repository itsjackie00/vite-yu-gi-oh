<template>
    <div class="card mt-3">
        <img :src="image" class="card-img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title text-white ">{{ title }}</h5>
            <p class="card-text">
                <span>{{ status }}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['id', 'title', 'image', 'status']
    }
</script>

<style lang="scss" scoped>
.card{
    text-align: center;
    color: black;
    background-color: #D48F38;
    height: 520px;
    border-radius: 0;
}

</style>