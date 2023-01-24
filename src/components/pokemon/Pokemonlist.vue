<script>
import axios from 'axios';
import PokemonCard from './PokemonCard.vue';
export default {
    name: 'PokemonList',
    components: { PokemonCard },
    data() {
        return {
            pokemon: []
        }
    },
    created() {
        axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=1')
            .then(res => {
                this.pokemon = res.data.docs;
            })
    }
}
</script>

<template>

    <div class="row g-4 row-cols-2 row-cols-md-3 mx-4">
        <pokemon-card v-for="poke in pokemon" :key="poke.id" class="" :name="poke.name" :image="poke.imageUrl"
            :type="poke.type1" :color="poke.color"> </pokemon-card>
    </div>

</template>

