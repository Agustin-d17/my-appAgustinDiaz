import { Link } from 'react-router-dom';
import './main.css';

function CartWidget({icon}) {
    return <Link to='/cart'>
                 <div>
                    <button className="btn-navbar"><span className='material-icons'>{icon}</span></button>    
                </div>
           </Link>
    
}

export default CartWidget;