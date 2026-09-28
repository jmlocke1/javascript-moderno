<script setup>
    import { ref, computed } from 'vue';
    import Header from './components/Header.vue';
    import Button from './components/Button.vue';

    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;
    const cantidadInicial = MAX / 2
    const cantidad = ref(cantidadInicial);
    const meses = ref(6);
    const currentCurrency = ref('EUR');
    const country = ref('es-ES');
    
    const formatearDinero = computed( () => {
        const formatter = new Intl.NumberFormat(country.value, {
            style: 'currency',
            currency: currentCurrency.value
        });

        return formatter.format(cantidad.value);
    });

    const handleChangeDecremento = () => {
        const valor = cantidad.value - STEP;
        if(valor < MIN) {
            // alert('Cantidad no válida');
            return;
        }
        cantidad.value = valor;
    }

    const handleChangeIncremento = () => {
        const valor = cantidad.value + STEP;
        if(valor > MAX) {
            // alert('Cantidad no válida');
            return;
        }
        cantidad.value = valor;
    }
    
</script>

<template>
    <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
        
        <Header />

        <div class="flex justify-between mt-10">
            
            <Button 
                :operador="'-'"
                @fn="handleChangeDecremento"
            />
            <Button
                :operador="'+'"
                @fn="handleChangeIncremento"
            />
            
        </div>

        <div class="my-5">
            <input 
                type="range"
                class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
                :min="MIN"
                :max="MAX"
                :step="STEP"
                v-model.number="cantidad"
            >
            <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">{{formatearDinero}}</p>

            <h2 class="text-2xl font-extrabold text-gray-500 text-center">
                Elige un <span class="text-indigo-600">Plazo</span> a pagar
            </h2>

            <select 
                class="w-full bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500 mt-5"
                :value="meses"
                v-model.number="meses"
            >
                <option value="6">6 Meses</option>
                <option value="12">12 Meses</option>
                <option value="24">24 Meses</option>
            </select>
        </div>
        <div class="my-5 space-y-3 bg-gray-50 p-5">
            <h2 class="text-2xl font-extrabold text-gray-500 text-center">
                Resumen <span class="text-indigo-600">de pagos</span>
            </h2>
        </div>
        <div class="flex justify-around mt-10">
            
            <div class="flex flex-col">
                <h2 class="text-2xl font-extrabold text-gray-500 text-center">Divisa</h2>

                <select 
                    class="w-full bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500 mt-5"
                    :value="currentCurrency"
                    v-model.number="currentCurrency"
                >
                    <option value="EUR">Euros</option>
                    <option value="USD">Dólares</option>
                    <option value="JPY">Yenes</option>
                </select>
            </div>
            <div class="flex flex-col">
                <h2 class="text-2xl font-extrabold text-gray-500 text-center">País</h2>

                 <select 
                    class="flex w-full bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500 mt-5"
                    :value="country"
                    v-model.number="country"
                >
                    <option value="es-ES">España</option>
                    <option value="en-EN">América</option>
                    <option value="ja-JP">Japón</option>
                </select>
            </div>
        </div>
    </div>
</template>
