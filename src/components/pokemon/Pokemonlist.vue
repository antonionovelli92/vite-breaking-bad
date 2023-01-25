<script>
import { store } from '../../data/store';
import PokemonCard from './PokemonCard.vue';
export default {
    name: 'PokemonList',
    components: { PokemonCard },
    data() {
        return {
            store
        }
    }

}
</script>

<template>

    <div class="row g-4 row-cols-2 row-cols-md-3 mx-4">
        <pokemon-card v-for="poke in store.pokemon" :key="poke.id" class="" :name="poke.name" :image="poke.imageUrl"
            :type="poke.type1" :color="poke.color"> </pokemon-card>
    </div>

</template>

