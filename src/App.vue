<script>
import axios from 'axios';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: 'Pokedex',
    components: { AppHeader, AppMain },
    data() {
        return {
            store
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
    <app-main></app-main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>