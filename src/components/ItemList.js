import Item from './Item';
import './main.css';

function ItemList ({ database }) {
    return <div className="item-list">
                {database.map((item) => {
                    return <Item key={item.id} item={item}/>
                })}
            </div>
}

export default ItemList; 