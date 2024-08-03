import { useState } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import '../Styles/Cart.css'
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../Styles/CustomModal.css';

import { useCart } from '../contexts/CartContext';

function Cart() {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { totalItems, cart, removeFromCart, totalPrice, checkout } = useCart();
  

  return (<>
    <div className='cart-box' onClick={onOpenModal}>
        <p>{totalItems}</p>
        <ShoppingCartCheckoutIcon />
    </div>

    <Modal open={open} onClose={onCloseModal} center classNames={{ modal: 'customModal' }}>
        <div className='heading'>
          <h2>Minicart preview</h2>
          <p className='item-count'>{totalItems}</p>
        </div>
        <hr/>
        <div className='inCart'>
          {cart.length === 0 ? (
                <p className='cartEmpty'>Your cart is empty</p>
            ) : (
                cart.map((item, index) => (
                        <div className='cartProduct' key={index}>
                            <div className='cartProduct-sub'>
                              <img src={item.image} style={{width: 'clamp(30px, 5vw, 100px)',
                                                            height: 'clamp(30px, 5vw, 100px)'
                              }}/><div className='item-name'>{item.name}</div> <div className='item-price'>- ${item.price}</div>
                              <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                            <hr />
                        </div>
                ))
            )}
        </div>

        <div className='total-items'>
          <h3>Total:</h3>
          <div className='total-price'>${totalPrice.toFixed(2)}</div>
        </div>
        <button className='checkout-btn' onClick={checkout}>Checkout</button>
    </Modal>
  </>)
}

export default Cart