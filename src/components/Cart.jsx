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

  const { totalItems } = useCart();

  const { cart, removeFromCart } = useCart();
  

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
                    item && item.name && item.price && item.image ? (
                        <div className='cartProduct' key={index}>
                            <div className='cartProduct-sub'>
                              <img src={item.image} style={{width: '50px',
                                                            height: '50px'
                              }}/><div className='item-name'>{item.name}</div> <div className='item-price'>- ${item.price}</div>
                              <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                            <hr />
                        </div>
                    ) : (
                        <div key={index}>
                            <p>Invalid item in cart</p>
                        </div>
                    )
                ))
            )}
        </div>
    </Modal>
  </>)
}

export default Cart