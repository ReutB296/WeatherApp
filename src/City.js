import './city.css';

export default function City({
  LocalizedName,
  country,
}) {
    return (
    <>
          <h3>{LocalizedName}</h3>
          <h3>{country}</h3>
    </>
      );
}