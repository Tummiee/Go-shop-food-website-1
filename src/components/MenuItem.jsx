

function MenuItem({image, name, price, tag}) {
  return (
    <div className="menuItem">
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <div className="priceNTag">
          <p>{price}$</p>
          <p>{tag}</p>
        </div>
    </div>
  )
}

export default MenuItem