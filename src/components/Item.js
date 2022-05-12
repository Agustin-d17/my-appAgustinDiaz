import ItemCount from './ItemCount';
import './main.css';

function Item({item}) {
    return <div className="item-card">
                <div className="item-info">
                    <img src={item.imagenA}/>
                    <span className="item-title">{item.name}</span>
                    <div>
                        <span>Stock: {item.stock}</span>
                        <span>Precio: ${item.precio}</span>
                    </div>
                </div>
                <ItemCount stock={item.stock} initial="1" onAdd={(seleccion) => alert(`Agregaste ${seleccion} unidades al carrito`)}/>
           </div>
}

export default Item;