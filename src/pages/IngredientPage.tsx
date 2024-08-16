// src/pages/IngredientPage.tsx
import { useState, useEffect, ReactElement } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Card, ListGroup } from 'react-bootstrap';
import { fetchIngredientByName } from "../data";
import { Ingredient } from "../interfaces";
import 'bootstrap/dist/css/bootstrap.min.css';


function IngredientPage(): ReactElement {
  const { name } = useParams<{ name: string }>();
  const [ingredient, setIngredient] = useState<Ingredient | null>(null);
  const [cocktails, setCocktails] = useState<any[]>([]);

  
  useEffect(() => {
    fetchIngredientByName(name!).then(data => setIngredient(data.ingredients[0]));
  }, [name]);

  if (!ingredient) return <div>Loading...</div>;

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{ingredient.strIngredient}</Card.Title>
          <Card.Text>Description: {ingredient.strDescription}</Card.Text>
          <Card.Text>Alcohol: {ingredient.strAlcohol}</Card.Text>
          <Card.Text>Type: {ingredient.strType}</Card.Text>
          <Card.Text>ABV: {ingredient.strABV}</Card.Text>
        </Card.Body>
      </Card>
      <ListGroup className="mt-5">
        {cocktails.map((cocktail) => (
          <ListGroup.Item key={cocktail.idDrink}>
            <Link to={`/cocktail/${cocktail.idDrink}`}>{cocktail.strDrink}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default IngredientPage;
