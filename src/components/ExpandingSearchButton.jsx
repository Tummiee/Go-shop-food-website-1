import { IoIosSearch } from "react-icons/io";
import CloseIcon from '@mui/icons-material/Close';
import  {useState} from 'react';
import './ExpandingSearchButton.css'

function ExpandingSearchButton() {

  const [isInputVisible, setIsInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  return (
    <div className="search">
            <div className={`input-container ${isInputVisible ? 'visible' : 'hidden'}`}>
              <input type="text" placeholder="&#128280;   Search food" className="searchToggle" />
            </div>
              <button type="button" className="btn" id="hideButton" onClick={toggleInputVisibility}>
                {isInputVisible ? <CloseIcon /> : <IoIosSearch />}
              </button>
    </div>
  )
}

export default ExpandingSearchButton