import React, {useEffect, useState} from 'react';

export const ForecastContaxt = React.createContext({
    forecasts: [],
    setForecast: () => {},
  });

export default function ForecastProvider({children}){
    const [forecasts, setForecast] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/cities/Tel-aviv/forcasts')
          .then(response => response.json())
          .then(data => setForecast(data))
      }, []);

      console.log(forecasts);

      return (
        <ForecastContaxt.Provider value={{
            forecasts,
            setForecast,
        }}>
          {children}
        </ForecastContaxt.Provider>
      );
}