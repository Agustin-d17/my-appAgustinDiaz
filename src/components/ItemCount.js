import { useState } from 'react';
import './main.css';

function ItemCount({ stock, initial, onAdd }) {
    const [seleccion, setSeleccion] = useState(initial);
    
    const removeItem = () => {
        seleccion > 1 ? setSeleccion(parseInt(seleccion) - 1) : alert('No puedes agregar menos de un item');
    }

    const addItem = () => {
        seleccion < stock ? setSeleccion(parseInt(seleccion) + 1) : alert('No hay suficiente stock');
    }

    const agregarAlCarrito = () => {
        onAdd(seleccion)
    }


    return <div className="item-count">
                <div class="item-title">
                    <p>Item name</p>
                </div>
                <div className="contador">
                    <button onClick={removeItem}>-</button>
                    <p>{seleccion}</p>
                    <button onClick={addItem}>+</button>
                </div>
                <button onClick={agregarAlCarrito}>Add</button>
           </div> 
}

export default ItemCount;
