import cartIcon from '../imagenes/carritocompras.png';
import { useCart } from "../context/CartContext.js";

const styles = {
    width: "50px",
  } 

export const CartWidget = () => {

    const {cart} = useCart();

    return (

        <>
        <img src={cartIcon} alt="Cart" style={styles} />
        {
        cart.length ? (<span className="counter" >{cart.length}</span>) : ("")
        }
        </>
    )
}

export default CartWidget;
