<script>
//import * from '';

export default {
    name: 'AppMain',
    data() { //variables, bool, array, objects and so on

        return {
            tempUrl: this.url,
        }
    },
    props: {
        url: String,
        name: String,
        archetype: String,

    },
}
</script>

<template>
    <div id="col-card"
        class="col-sm-12 col-md-3 col-lg-3 col-xl-2 col-xxl-2 d-flex flex-column justify-content-between align-items-center">
        <img :src="url" :alt="name">
        <div id="p_wrapper" class="d-flex flex-column justify-content-evenly">
            <p>{{ name }}</p>
            <p>{{ archetype }}</p>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 100%;
}

#col-card {
    background-color: var(--body-back);
    margin: 0;
    padding: 0;

    & #p_wrapper {
        align-items: center;

        & p:first-of-type {
            width: 80%;
            flex-wrap: wrap;
            color: white;
            text-align: center;
        }

        & p:nth-of-type(2) {
            color: black;
            text-align: center;
        }
    }

}
</style>