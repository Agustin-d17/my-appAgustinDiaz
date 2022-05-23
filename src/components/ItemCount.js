import { useState } from 'react';
import './main.css';

function ItemCount({ stock, initial, onAdd, handleInputType }) {
    const [seleccion, setSeleccion] = useState(initial);
    
    const removeItem = () => {
        seleccion > 1 ? setSeleccion(parseInt(seleccion) - 1) : alert('No puedes agregar menos de un item');
    }

    const addItem = () => {
        seleccion < stock ? setSeleccion(parseInt(seleccion) + 1) : alert('No hay suficiente stock');
    }

    const agregarAlCarrito = () => {
        onAdd(seleccion);
        handleInputType();
    }


    return <div className="item-count">
                <div className="contador">
                    <button className="btn-count" onClick={removeItem}>-</button>
                    <p>{seleccion}</p>
                    <button className="btn-count" onClick={addItem}>+</button>
                </div>
                <button className="btn-add" onClick={agregarAlCarrito}>Agregar al carrito</button>
           </div> 
}

export default ItemCount;
