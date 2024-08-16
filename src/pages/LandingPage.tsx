import { useState, useEffect, ReactElement } from 'react';
import { Card, Button, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchRandomCocktail } from "../data";
import { Cocktail } from "../interfaces";
import 'bootstrap/dist/css/bootstrap.min.css';



function LandingPage(): ReactElement {
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRandomCocktail().then(data => setCocktail(data.drinks[0]));
  }, []);

  const handleSeeMore = () => {
    if (cocktail) {
      navigate(`/cocktail/${cocktail.idDrink}`);
    }
  };
  const getRamdom = () => fetchRandomCocktail().then(data => setCocktail(data.drinks[0])) 

  return (
    <Container className="mt-2">
      {cocktail && (
        <Card style={{ width: '50%'}} className="mx-auto myCard">
          <Card.Img className='img' variant="top" src={cocktail.strDrinkThumb} />
          <Card.Body className="card-content">
            <Card.Title className='text-white text-center mb-3 border-primary'>{cocktail.strDrink}</Card.Title>
            <div className='d-flex justify-content-around'>
              <Button variant="secondary" onClick={handleSeeMore}>See Details</Button>
              <Button variant="secondary" onClick={getRamdom}>Get Another</Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default LandingPage;
