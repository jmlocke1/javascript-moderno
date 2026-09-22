import { useState } from "react"
import Header from "./components/header"

function App() {
    const cantidadInicial = 10000;
    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;
    const [cantidad, setCantidad] = useState(cantidadInicial);
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mensajeAlerta, setMensajeAlerta] = useState('');
    
    function handleChange(e) {
        setCantidad(parseInt(e.target.value));
    }

    function crearAlerta() {
        setMensajeAlerta('Cantidad no válida');
        setMostrarAlerta(true);
        setTimeout(() => {
            setMostrarAlerta(false)
        }, 3000);
        return;
    }

    function handleClickDecremento() {
        const valor = cantidad - STEP;
        if(valor < MIN) {
            crearAlerta();
            return;
        }
        setCantidad(valor);
    }

    function handleClickIncremento() {
        const valor = cantidad + STEP;
        if(valor > MAX) {
            crearAlerta();
            return;
        }
        setCantidad(valor);
    }

    return (
        <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
            <Header/>

            <div className="flex justify-between my-6">
                <button
                    type="button"
                    className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:ouline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
                    onClick={handleClickDecremento}
                >-</button>
                <button
                    type="button"
                    className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:ouline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
                    onClick={handleClickIncremento}
                >+</button>
            </div>
            <input 
                type="range"
                className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
                onChange={ handleChange }
                min={MIN}
                max={MAX}
                value={cantidad}
                step={STEP} 
            />

            <p className="text-center mt-2">
                {mostrarAlerta && <span className="text2x1 py-2 px-4 border rounded bg-red-200 border-red-500 text-red-700">{mensajeAlerta}</span>}
            </p>
            
            <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{ cantidad }</p>
        </div>
    )
}

export default App
