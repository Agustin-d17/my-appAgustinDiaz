import './CartForm.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function CartForm({ orderManage }) {
    const [customerData, setCustomerData] = useState({})
    // const [nameError, setNameError] = useState(false)
    // const [emailError, setEmailError] = useState(false)
    // const [phoneError, setphoneError] = useState(false)
    const [errors, setErrors] = useState({})
    const { totalPrice } = useContext(CartContext)

    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        });

    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(customerData))

        console.log(errors)
    }

    const validateForm = (customerData) => {
        let errors = {}

        !customerData.name && (errors.name = "Se esperaba un nombre")

        !customerData.email && (errors.email = "Se esperaba un email")

        !customerData.phoneNumber && (errors.phoneNumber = "Se esperaba un telefono")

        return errors
    } 
    
    const buyItems = () => {
        if(customerData.name.trim() !== "" && customerData.email.trim() !== "" && customerData.phoneNumber.trim() !== ""){
            orderManage(customerData)  
        }
        else{
            alert("s")
        }
    }


    return <div className="cart-form">
               <div className="cart-totals-container">
                    <h2>Total de compra</h2>  
                    <div className="cart-totals">
                        <div className="cart-totals-headers">
                            <span>Items:</span>
                            <span>Envio:</span>
                            <span>Total:</span>
                        </div>
                        <div className="cart-totals-price">
                            <span>${totalPrice}</span>
                            <span>${1000}</span>
                            <span>${totalPrice + 1000}</span>
                        </div>
                    </div>   
               </div>
               <form>
                   <div>
                       <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleBlur(e)}
                        autoComplete="off"
                        placeholder=" "
                        />
                        <label htmlFor="name" className="form-label">Nombre</label>
                        {errors.name && <span className="input-error">{errors.name}</span>}                    
                   </div>

                   <div>
                       <input
                        className="form-input"
                        type="text"
                        id="email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleBlur(e)}
                        autoComplete="off"
                        placeholder=" "
                        />
                        <label htmlFor="email" className="form-label">Email</label>
                        {errors.email && <span className="input-error">{errors.email}</span>}
                   </div>

                   <div>
                       <input
                        className="form-input"
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleBlur(e)}
                        autoComplete="off"
                        placeholder=" "
                        />
                        <label htmlFor="phoneNumber" className="form-label">Telefono</label>
                        {errors.phoneNumber && <span className="input-error">{errors.phoneNumber}</span>}                   
                   </div>

               </form> 

                <Link to="/cart"><button className="btn-order" onClick={buyItems}>Finalizar compra</button></Link>    

           </div>
}