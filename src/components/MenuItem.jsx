import AddIcon from '@mui/icons-material/Add';

// eslint-disable-next-line react/prop-types
function MenuItem({image, name, price, tag}) {
  return (
    <div className="menuItem">
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <div className="priceNTag">
          <div className='mini-box'>
            <p>{price}$</p>
            <p>{tag}</p>
          </div>
          <AddIcon style={{color: '#4f4f4e',
                           position: 'relative',
                           bottom: '32%'
          }}/>
        </div>  
    </div>
  )
}

export default MenuItem