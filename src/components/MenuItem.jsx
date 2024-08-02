import AddIcon from '@mui/icons-material/Add';
import { useCart } from '../contexts/CartContext';

// eslint-disable-next-line react/prop-types
function MenuItem({image, name, price, tag}) {

  const { addToCart } = useCart();

  const item = {
    name,
    price,
    tag,
    image
  };

  return (
    <div className="menuItem">
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <div className="priceNTag">
          <div className='mini-box'>
            <p>{price}$</p>
            <p>{tag}</p>
          </div>
          <AddIcon onClick={() => addToCart(item)} style={{color: '#4f4f4e',
                           position: 'relative',
                           bottom: '32%'
          }}/>
        </div>  
    </div>
  )
}

export default MenuItem