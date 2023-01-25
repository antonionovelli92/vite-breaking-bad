<script>
import { store } from '../../data/store';

export default {
    name: 'Filtred',
    data() {
        return {
            store,

        }
    }, methods: {

    }

}
</script>


<template>
    <div class="container d-flex justify-content-end shadow  w-50 form-floating">
        <select class="form-select " id="floatingSelect">
            <option selected>Tutti</option>
            <option v-for="poke in store.type" :key="poke" :value="poke">{{ poke }}</option>
        </select>
        <label for="floatingSelect">Scegli il tipo</label>

    </div>

</template>



<script></script>

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [];
chars.forEach((element) => {
    if (!uniqueChars.includes(element)) {
        uniqueChars.push(element);
    }
});
