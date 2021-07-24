import React, {useState} from 'react';

export const FavoritesContext = React.createContext({
  favorites: [],
  addToFavorites: () => {},
  setFavorites: () => {},
});

export default function FavoritesProvider({children}) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = LocalizedName => {
    const temp = favorites;
    if ( !(temp.includes(LocalizedName)) ){
    temp.push(LocalizedName);
    setFavorites( temp);
    }
  };
  console.log(favorites);

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      setFavorites,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}
