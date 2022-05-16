import ItemCount from './ItemCount';
import './main.css'

function ItemDetail ({item}) {
    return <div className="item-detail">
                <img className="item-detail-img" src={item.imagenA} alt={item.name}/>
                <div className="item-detail-info">
                    <h3>{item.name}</h3>
                    <p className="detalles-producto">{item.detail}</p>
                    <span>${item.precio}</span>
                    <ItemCount stock={item.stock} initial="1" onAdd={(seleccion) => alert(`Agregaste ${seleccion} unidades al carrito`)}/>
                </div>
           </div>
}

export default ItemDetail;