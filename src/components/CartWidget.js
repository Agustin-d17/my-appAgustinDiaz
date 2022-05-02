import './main.css';

function CartWidget({icon}) {
    return <div>
        <button className="btn-navbar"><span className='material-icons'>{icon}</span></button>    
    </div>
}

export default CartWidget;