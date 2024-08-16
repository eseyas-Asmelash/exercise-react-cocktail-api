import { ReactElement } from 'react';
import { CocktailProvider } from '../context/CocktailContext';
import AppRouter from '../router';


export function App(): ReactElement {
  return (
    <CocktailProvider>
      <AppRouter />
    </CocktailProvider>
  );
}

export default App;
