<script>
export default {
    name: 'PokemonCard',
    props: {
        name: String,
        type: String,
        color: String,
        image: String
    }
};

</script>

<template>
    <div class="pokemon-table">
        <img class="shadow-lg" :src="image" :alt="name">
        <div class="pokemon-schedule">
            <h4>Tipo: {{ type }}</h4>
            <h4>Color: {{ color }}</h4>
            <h4> Name: {{ name }}</h4>
        </div>

    </div>
</template>


<style scoped lang="scss">
.pokemon-table {
    margin-top: 30px;
    background-color: rgba(239, 237, 237, 0.518);
    border: 1px solid black;

    &:hover {
        box-shadow: 0 0 6px 3px red;
        cursor: pointer;

    }

    img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        border: 3px solid red;


    }

    .pokemon-schedule {
        background-color: rgba(220, 221, 162, 0.518);
        border-radius: 20px;
    }
}
</style>