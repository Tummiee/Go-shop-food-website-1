import { useState } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import '../Styles/Cart.css'
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { useCart } from '../contexts/CartContext';

function Cart() {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { totalItems } = useCart();
  

  return (<>
    <div className='cart-box' onClick={onOpenModal}>
        <p>{totalItems}</p>
        <ShoppingCartCheckoutIcon />
    </div>

    <Modal open={open} onClose={onCloseModal} center>
        <h2>Minicart preview</h2>
        <p>{totalItems}</p>
        <hr/>

    </Modal>
  </>)
}

export default Cart