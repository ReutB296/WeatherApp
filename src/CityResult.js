import { useContext } from "react";
import { CityResultContaxt } from "./CityResultContaxt";
import { ForecastContaxt } from "./forcastContaxt";
import { CurrentContaxt } from "./currentContext";

import City from './City';
import Forecast from "./Forecast";
import Current from "./Current";


export default function CityResult(){
    const {cities} = useContext(CityResultContaxt);
    const {forecasts} = useContext(ForecastContaxt);
    const {current} = useContext(CurrentContaxt);
   
    return(
        // <div className= "cities">
        //     {Array.isArray(cities) && cities.length > 0
        //         ? cities.map(city => <City key={city.key} country={city.Country.LocalizedName}{...city} />)
        //         : "Loading..."}
        // </div>
        <>
        <div className= "city">
        {Object.keys(cities).length === 0 ? "Loading..." :
                    <City country={cities.Country.LocalizedName}{...cities} />}
                
        {Array.isArray(current) && current.length > 0
                    ? current.map(currentW => <Current text={currentW.WeatherText} temp={currentW.Temperature.Metric.Value}/>)
                    : "Loading..."}
        </div>

        <div  className="forecast">
        {Array.isArray(forecasts) && forecasts.length > 0
                    ? forecasts[0]["DailyForecasts"].map(date => <Forecast date={date.Date} temp={date.Temperature.Minimum.Value} day={date.Day.IconPhrase}/>)
                    : "Loading..."}
        </div>
        </>
    )
}