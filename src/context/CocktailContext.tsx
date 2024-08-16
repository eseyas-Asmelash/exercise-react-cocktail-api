import { createContext, useState, ReactNode } from 'react';

interface CocktailContextProps {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

const CocktailContext = createContext<CocktailContextProps | undefined>(undefined);

export const CocktailProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addFavorite = (id: string) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, id];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(fav => fav !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <CocktailContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </CocktailContext.Provider>
  );
};

export default CocktailContext;
