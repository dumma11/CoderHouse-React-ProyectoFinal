import { useCart } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Cart.css";

function Cart() {
    const { cart, getTotal, clearCart, removeFromCart } = useCart();

    return (
        <div className="cart-container">
            <h1 className="cart-title">Carrito de Compras</h1>

            {/* Lista de productos */}
            <div className="cart-items">
                {cart.length > 0 ? (
                    cart.map((prod) => (
                        <CartItem 
                            key={prod.id} 
                            prod={prod} 
                            removeFromCart={removeFromCart} 
                        />
                    ))
                ) : (
                    <p className="cart-empty">Tu carrito está vacío.</p>
                )}
            </div>

            {/* Botón para vaciar el carrito */}
            {cart.length > 0 && (
                <button className="cart-clear-btn" onClick={clearCart}>
                    Vaciar Carrito
                </button>
            )}

            {/* Formulario de checkout */}
            <CheckoutForm cart={cart} total={getTotal()} />
        </div>
    );
}

export default Cart;