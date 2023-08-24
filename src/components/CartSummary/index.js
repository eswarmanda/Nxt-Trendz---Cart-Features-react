import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const quantityPrice = cartList.map(
        eachItem => eachItem.quantity * parseInt(eachItem.price),
      )
      let price
      if (quantityPrice.length > 1) {
        price = quantityPrice.reduce((a, b) => a + b)
      } else {
        price = quantityPrice
      }
      return (
        <div className="order-total">
          <div className="check-out-card">
            <h1 className="total">
              Order Total: <span className="span1">Rs {price}/-</span>
            </h1>
            <p className="total-products">{cartList.length} Items in cart</p>
            <button className="checkout-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
