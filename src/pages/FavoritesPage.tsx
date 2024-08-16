/* // src/pages/FavoritesPage.tsx
import { useState, useEffect, ReactElement } from 'react';
import { Container } from 'react-bootstrap';
import CocktailItem from '../components/CocktalItem';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

function FavoritesPage(): ReactElement {
  const [favorites, setFavorites] = useState<Cocktail[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const handleFavoriteToggle = (id: string) => {
    const updatedFavorites = favorites.filter((cocktail) => cocktail.idDrink !== id);
    if (updatedFavorites.length === favorites.length) {
      const cocktail = favorites.find((cocktail) => cocktail.idDrink === id);
      if (cocktail) {
        setFavorites([...favorites, cocktail]);
      }
    } else {
      setFavorites(updatedFavorites);
    }
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Container className="mt-5">
      {favorites.map((cocktail) => (
        <CocktailItem
          key={cocktail.idDrink}
          id={cocktail.idDrink}
          name={cocktail.strDrink}
          image={cocktail.strDrinkThumb}
          onFavorite={handleFavoriteToggle}
          isFavorite={true}
        />
      ))}
    </Container>
  );
};

export default FavoritesPage;
 */
import { useContext } from "react";
import CocktailContext from "../context/CocktailContext";
import { Link } from "react-router-dom";

export default function FavoritesPage() {
  const context = useContext(CocktailContext);

  if (!context) {
    return <div>Error: CocktailContext is not available</div>;
  }

  const { favorites, removeFavorite } = context;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
      <ul>
        {favorites.length ? (
          favorites.map((id) => (
            <li key={id} className="mb-2">
              <Link to={`/cocktail/${id}`} className="text-blue-500 hover:text-blue-700">
                {id}
              </Link>
              <button
                onClick={() => removeFavorite(id)}
                className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </ul>
    </div>
  );
}
