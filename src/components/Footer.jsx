import { Instagram } from "@mui/icons-material"
import { Twitter } from "@mui/icons-material"
import { Facebook } from "@mui/icons-material"
import { LinkedIn } from "@mui/icons-material"
import { IoIosSearch } from "react-icons/io";
import "../Styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footerSearch">
            <div className="Footer-input-container">
              <input type="text" placeholder="&#128280;   Search food" className="footerSearchBar" />
            </div>
              <button type="button" className="footerbtn">
                <IoIosSearch />
              </button>
    </div>
        <div className="socialMedia">
            <Instagram />
            <Twitter />
            <Facebook />
            <LinkedIn />
        </div>
        <p>&copy; 2024 EliDev</p>
    </div>
  )
}

export default Footer