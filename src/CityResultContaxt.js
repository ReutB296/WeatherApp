import React, {useEffect, useState} from 'react';

export const CityResultContaxt = React.createContext({
    cities: [],
    setCities: () => {},
  });

export default function CityResultProvider({children}){
    const [cities, setCities] = useState([]);

    useEffect(() => {// fetch as default TLV 
        fetch('http://localhost:8080/cities/Tel-aviv')
          .then(response => response.json())
          .then(data => setCities(data))
      }, []);


      return (
        <CityResultContaxt.Provider value={{
            cities,
            setCities,
        }}>
          {children}
        </CityResultContaxt.Provider>
      );
}