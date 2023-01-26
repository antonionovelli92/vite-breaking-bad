<script>
import { store } from '../../data/store';

export default {
    name: 'Filtred',
    data() {
        return {
            store,
            type: ''
        }
    }, emits: ['term-change', 'search']

}
</script>


<template>
    <div class="container d-flex justify-content-end shadow  w-50 form-floating">
        <select v-model.trim="type" class="form-select " id="floatingSelect" @change="$emit('term-change', type)"
            @keyup.enter="$emit('search', type)">
            <option selected>Tutti</option>
            <option v-for="poke in store.type" :key="poke" :value="poke">{{ poke }}</option>
        </select>
        <label for="floatingSelect">Scegli il tipo</label>

    </div>

</template>



<script></script>

