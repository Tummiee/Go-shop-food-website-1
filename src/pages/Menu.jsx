import {MenuList} from '../Data/MenuList'
import MenuItem from '../components/MenuItem'
import '../Styles/Menu.css'

function Menu() {
  return (
    <div className="menu">
        <h1 className="menuTitle">Our menu</h1>
        <div className="menuList">
            {MenuList.map((menuItem, key) => {
                return(
                        <MenuItem 
                        key={key}
                        image={menuItem.imageUrl} 
                        name={menuItem.name} 
                        price={menuItem.price}
                        tag={menuItem.tags}
                      />
                )
            })}
        </div>
    </div>
  )
}

export default Menu