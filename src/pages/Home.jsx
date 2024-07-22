import {Link} from 'react-router-dom'
import "../Styles/Home.css"
import BannerImage from '../assets/Order-now.jpg'

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
      
      <div className="headerContainer" >
        <h1>Go shop</h1>
        <p>FOOD FOR YOUR DELIGHT</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home