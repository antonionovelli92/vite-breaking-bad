<script>
import axios from 'axios';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Filtred from './components/pokemon/Filtred.vue';

const urlType = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?&type1=';

export default {
    name: 'Pokedex',
    components: { AppHeader, AppMain, Filtred },
    data() {
        return {
            store,
            filtred: '',

        }
    },
    methods: {
        fetchPokemon(url) {
            axios.get(url)
                .then(res => {
                    store.pokemon = res.data.docs;
                })
        }

    },
    created() {
        this.fetchPokemon(store.apiUri)

    }
}
</script>

<template>
    <app-header></app-header>
    <filtred></filtred>
    <app-main></app-main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>