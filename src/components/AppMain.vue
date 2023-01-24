<script>
import PokemonList from './pokemon/Pokemonlist.vue';
export default {
    name: 'AppMain',
    components: { PokemonList }
}
</script>

<template>
    <main class="container mt-5 mx-auto text-center overflow-auto">
        <pokemon-list></pokemon-list>
    </main>
</template>

<style lang="scss">
main {
    height: 500px;
}
</style>