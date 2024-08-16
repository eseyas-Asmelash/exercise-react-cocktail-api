const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const fetchRandomCocktail = async () => {
  const response = await fetch(`${API_URL}/random.php`);
  return response.json();
};

export const searchCocktailsByName = async (name: string) => {
  const response = await fetch(`${API_URL}/search.php?s=${name}`);
  return response.json();
};


export const fetchCocktailById = async (id: string) => {
    const response = await fetch(`${API_URL}/lookup.php?i=${id}`);
    return response.json();
  };

  export const fetchIngredientByName = async (name: string) => {
    const response = await fetch(`${API_URL}/search.php?i=${name}`);
    return response.json();
  };