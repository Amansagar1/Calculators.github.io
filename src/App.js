import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faXmark,
  faMoon,
  faSun,
  faEquals,
  faPercent,
  faDivide,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
const [DarkMode, setDarkMode] = useState("false")
const [inputValue, setinputValue] = useState('')



const  toggleDarkMode = (state) =>{
  setDarkMode(!DarkMode)
}

const handleClick = (value) =>{
  if (value === 'C'){
    setinputValue('');
   }
   else if(value === 'DEL'){
    setinputValue(inputValue.slice(0, -1));
   }
   else if (value === '%'){
    setinputValue(inputValue + '%');
   } else if (value === '='){
try{
  setinputValue(eval (inputValue).toString());
}
catch(error){
  setinputValue('');
}
} else {
  setinputValue(inputValue + value)
}
    };
  



  return (
    <>
      <div className={`calc__main ${DarkMode ? 'light-mode ': 'dark-mode'}`}>


        <button className="toggle__btn" onClick={toggleDarkMode}>
          {DarkMode ? (
          <FontAwesomeIcon icon={faMoon} />
        
          ):(
          <FontAwesomeIcon icon={faSun} />
          )}
        </button>

        <div className="calculater">
          <input type="text" placeholder="0" className="calc__input" value={inputValue} />
        </div>
        <div className="calc__btn">
          <div className="calculator__btn1">
            <button className="calc__numbers" onClick={()=> handleClick ('C')}>C</button>
            <button className="calc__numbers" onClick={()=> handleClick ('%')}>
              <FontAwesomeIcon icon={faPercent} />
            </button>
            <button className="calc__numbers" onClick={()=> handleClick ('DEL')}>
              <FontAwesomeIcon icon={faDeleteLeft} />
            </button>
            <button className="calc__numbers" onClick={()=> handleClick ('/')}>
              <FontAwesomeIcon icon={faDivide} />
            </button>
          </div>
          <div className="calculator__btn1">
            <button className="calc__numbers" onClick={()=> handleClick ('7')}>7</button>
            <button className="calc__numbers" onClick={()=> handleClick ('8')}>8</button>
            <button className="calc__numbers" onClick={()=> handleClick ('9')}>9</button>
            <button className="calc__numbers" onClick={()=> handleClick ('*')}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="calculator__btn1">
            <button className="calc__numbers" onClick={()=> handleClick ('4')}>4</button>
            <button className="calc__numbers" onClick={()=> handleClick ('5')}>5</button>
            <button className="calc__numbers" onClick={()=> handleClick ('6')}>6</button>
            <button className="calc__numbers" onClick={()=> handleClick ('-')}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <div className="calculator__btn1">
            <button className="calc__numbers" onClick={()=> handleClick ('1')}>1</button>
            <button className="calc__numbers" onClick={()=> handleClick ('2')}>2</button>
            <button className="calc__numbers" onClick={()=> handleClick ('3')}>3</button>
            <button className="calc__numbers" onClick={()=> handleClick ('+')}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="calculator__btn1">
            <button className="calc__numbers" onClick={()=> handleClick ('00')}>00</button>
            <button className="calc__numbers" onClick={()=> handleClick ('0')}>0</button>
            <button className="calc__numbers" onClick={()=> handleClick ('.')}>.</button>
            <button className="calc__numbers" onClick={()=> handleClick ('=')}>
              <FontAwesomeIcon icon={faEquals} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
