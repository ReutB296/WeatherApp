import {useRef, useState, useEffect, useContext} from 'react';
import { CityResultContaxt } from "./CityResultContaxt";
import { ForecastContaxt } from "./forcastContaxt";
import CityResult from './CityResult';

export function  SearchCity() {
    const LocalizedNameRef = useRef();
    const {setCities} = useContext(CityResultContaxt);
    const {setForecast} = useContext(ForecastContaxt);
    const [inputVal, setInputVal] = useState(''); 

    const onSearchCity = () =>{
        const value= LocalizedNameRef.current.value;

            fetch(`http://localhost:8080/cities/${value}`)
              .then(response => response.json())
              .then(data => setCities(data));

            fetch(`http://localhost:8080/cities/${value}/forcasts`)
                .then(response => response.json())
                .then(data => setForecast(data));
        
            <CityResult/>
    }


    return(
    <div>
        <input ref={LocalizedNameRef} value={inputVal} onChange={e => setInputVal(e.target.value)} placeholder='Tel-aviv'/>
        <button onClick={onSearchCity} disabled={!inputVal}>Search City</button>  
    </div>
    
    )
}

