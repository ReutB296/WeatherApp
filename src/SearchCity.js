import {useRef, useState, useContext} from 'react';
import { CityResultContaxt } from "./CityResultContaxt";
import { ForecastContaxt } from "./forcastContaxt";
import CityResult from './CityResult';
import { FavoritesContext } from './FavoritsContext.js';


export function  SearchCity() {
 
    const LocalizedNameRef = useRef();
    const {cities, setCities} = useContext(CityResultContaxt);
    const {setForecast} = useContext(ForecastContaxt);
    const [inputVal, setInputVal] = useState(''); 
    const {favorites, addToFavorites} = useContext(FavoritesContext);

    // const [Favorites, setFavorites] = useState([]);

    const onSearchCity = () =>{
        const value= LocalizedNameRef.current.value;

            fetch(`http://localhost:8080/cities/${value}`) // fetch the searched city
              .then(response => response.json())
              .then(data => setCities(data));

            fetch(`http://localhost:8080/cities/${value}/forcasts`) //fetch 5 daily forecast
                .then(response => response.json())
                .then(data => setForecast(data));
        
            <CityResult/>  //render the searched city to replace TLV default 
    }
    // const addToFavorites = LocalizedName => {
    //     const temp = Favorites;
    //     if ( !(temp.includes(LocalizedName)) ){
    //     temp.push(LocalizedName);
    //     setFavorites( temp);
    //     }
    //   };
      
    
      console.log(cities);
      console.log(favorites);
  
  

    return(
    <div>
        <input ref={LocalizedNameRef} value={inputVal} onChange={e => setInputVal(e.target.value)} placeholder='Tel-aviv'/> 
        <button onClick={onSearchCity}  disabled={!inputVal}>Search City</button>      {/* disable empty search */}
        <button onClick={() => addToFavorites(cities.LocalizedName)} >Add to Favorites</button>
    </div>
    
    )
}

