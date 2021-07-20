import React, {useEffect, useState} from 'react';

export const CurrentContaxt = React.createContext({
    current: [],
    setCurrent: () => {},
  });

export default function CurrentProvider({children}){
    const [current, setCurrent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/cities/Tel-aviv/current')
          .then(response => response.json())
          .then(data => setCurrent(data))
      }, []);


      return (
        <CurrentContaxt.Provider value={{
            current,
            setCurrent,
        }}>
          {children}
        </CurrentContaxt.Provider>
      );
}