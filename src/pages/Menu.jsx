import {MenuList} from '../Data/MenuList'
import MenuItem from '../components/MenuItem'
import '../Styles/Menu.css'

function Menu() {
  return (
    <div className="menu">
        <h1 className="menuTitle">Our menu</h1>
        <div className="menuList">
            {MenuList.map(({id, imageUrl, name, price, tags} ) => {
                return(
                        <MenuItem 
                        key={id}
                        image={imageUrl} 
                        name={name} 
                        price={price}
                        tag={tags}
                      />
                )
            })}

        </div>
    </div>
  )
}

export default Menu