import { useState } from "react"
import Header from "./components/header"

function App() {
    const [cantidad, setCantidad] = useState(10000);
    
    function handleChange(e) {
        console.log(parseInt(e.target.value));
    }

    return (
        <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
            <Header/>

            <input 
            type="range"
            className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
            onChange={ handleChange }
            name="" 
            id="" />
        </div>
    )
}

export default App
