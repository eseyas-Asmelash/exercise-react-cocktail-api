export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strDrinkThumb: string;
    strTags: string | null;
    strGlass: string;
    strInstructions: string;
    strIngredient1: string | null;
    strMeasure1: string | null;
    [key: string]: any;
  }
  
  export interface Ingredient {
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
    strType: string;
    strAlcohol: string;
    strABV: string;
  }
  