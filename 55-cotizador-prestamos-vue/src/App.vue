<script setup>
    import { ref } from 'vue';
    import Header from './components/Header.vue';

    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;

    const cantidad = ref(MIN);
    cantidad.value = MAX / 2;
    
    function handleChange(e) {
        cantidad.value = +e.target.value;
    }
</script>

<template>
    <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
        <Header />

        <div class="my-5">
            <input 
                type="range"
                class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
                @input="handleChange"
            >
            <p>{{cantidad}} €</p>
            <p v-text="`${cantidad} €`"></p>
        </div>
    </div>
</template>
