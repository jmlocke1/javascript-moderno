import { useState } from "react"
import Header from "./components/header"

function App() {
    const cantidadInicial = 10000;
    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;
    const [cantidad, setCantidad] = useState(cantidadInicial);
    
    function handleChange(e) {
        setCantidad(parseInt(e.target.value));
    }

    return (
        <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
            <Header/>

            <input 
            type="range"
            className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
            onChange={ handleChange }
            min={MIN}
            max={MAX}
            value={cantidad}
            step={STEP}
            name="" 
            id="" />
            
            <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{ cantidad }</p>
        </div>
    )
}

export default App
