import Products from "../Run_API/run_api";
import React,{useState} from "react";

function Search() {
    const [showProducts, setShowProducts] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const handleSearchInputChange = (event) => {
      setSearchInput(event.target.value);
      if(event.target.value==="") 
        setShowProducts(false);
      else setShowProducts(true);
    };
    const handleSearchInputBlur = () => {
      setShowProducts(false);
    };
    const handleSearchInputCLick = () => {
      setShowProducts(true);
    };
  
    return (
      <div className="search">
        <input
          className="input"
          type="search"
          name=""
          placeholder="Search..."
          onClick={handleSearchInputCLick}
          value={searchInput}
          onChange={handleSearchInputChange}
          onBlur={handleSearchInputBlur}
        />
        <button className="ser">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        {showProducts && <Products searchInput={searchInput} />}
      </div>
    );
  }

  export default Search;