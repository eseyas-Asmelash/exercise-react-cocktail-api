import { ReactElement } from 'react';
//import { CocktailProvider } from '../context/CocktailContext';
import AppRouter from '../router';


export function App(): ReactElement {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
