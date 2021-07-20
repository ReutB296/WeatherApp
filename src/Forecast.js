import './forecast.css';

export default function Forecast({
    date,
    temp,
    day,
  }) {
    const reversedDate = date.split('T')[0].split("-").reverse().join("-");
      return (
            <ul>
              <li>{reversedDate}</li>
              <li>{day}</li>
              <li>Max Temperature {temp}</li>
            </ul>
        );
  }