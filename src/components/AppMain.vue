<script>
import PokemonList from './pokemon/Pokemonlist.vue';
export default {
    name: 'AppMain',
    components: { PokemonList }
}
</script>

<template>
    <main class="container mt-5 mx-auto text-center">
        <pokemon-list></pokemon-list>
    </main>
</template>

<style lang="scss">

</style>