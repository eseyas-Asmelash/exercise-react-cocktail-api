import { useState, useEffect, ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, ListGroup } from 'react-bootstrap';
import { Cocktail } from "../interfaces";
import { fetchCocktailById } from "../data";
import 'bootstrap/dist/css/bootstrap.min.css';

function CocktailInfoPage(): ReactElement {

  const { id } = useParams<{ id: string }>();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  useEffect(() => {
    fetchCocktailById(id!).then(data => setCocktail(data.drinks[0]));
  }, [id]);


  if (!cocktail) return <p>Loading...</p>;

  return (
    <Container className="mt-2">
      <Card className='myCard'>
        <Card.Img style={{ width: '50%' }} className=" mx-auto img" variant="top" src={cocktail.strDrinkThumb} />
        <Card.Body className='text-white'>
          <Card.Title>{cocktail.strDrink}</Card.Title>
          <Card.Text>
            Category: {cocktail.strCategory}
          </Card.Text>
          <Card.Text>
            Glass: {cocktail.strGlass}
          </Card.Text>
          <Card.Text>
            Tags: {cocktail.strTags}
          </Card.Text>
          <Card.Text>
            Instructions: {cocktail.strInstructions}
          </Card.Text>
          <ListGroup>
            {[...Array(15).keys()].map(i => {
              const ingredient = (cocktail as any)[`strIngredient${i + 1}`];
              const measure = (cocktail as any)[`strMeasure${i + 1}`];
              return ingredient && (
                <ListGroup.Item key={i}>
                  {ingredient} - {measure}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CocktailInfoPage;
