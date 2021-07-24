import {useContext} from 'react';
import { FavoritesContext } from './FavoritsContext';
import City from './City';

export default function Favorites(){
    const {favorites} = useContext(FavoritesContext);

    return (
        <div className="Favorites">
             <h1>Favorites</h1>
             {favorites.map(city => <City LocalizedName={city} />)}
        </div>
    )
}