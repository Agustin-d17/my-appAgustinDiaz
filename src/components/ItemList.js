import './ItemList.css';
import Item from './Item';


function ItemList ({ database }) {
    return <div className="item-list">
                {database.map((item) => {
                    return <Item key={item.id} item={item}/>
                })}
            </div>
}

export default ItemList; 