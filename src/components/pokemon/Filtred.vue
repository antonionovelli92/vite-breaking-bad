<script>
import { store } from '../../data/store';

export default {
    name: 'Filtred',
    data() {
        return {
            store,
            type: []
        }
    }

}
</script>


<template>
    <div class="container d-flex justify-content-end shadow  w-50 form-floating">
        <select class="form-select " id="floatingSelect">
            <option selected>Tutti</option>
            <option v-for="poke in store.pokemon" :key="poke.id" :value="poke.name">{{ poke.type1 }}</option>
        </select>
        <label for="floatingSelect">Scegli il tipo</label>

    </div>

</template>



<script></script>


