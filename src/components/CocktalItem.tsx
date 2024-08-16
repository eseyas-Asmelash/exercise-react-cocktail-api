// src/components/CocktailCard.tsx
import { ReactElement } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CocktailCardProps {
  id: string;
  name: string;
  image: string;
  onFavorite: (id: string) => void;
  isFavorite: boolean;
}
function CocktailCard({id, name, image, onFavorite, isFavorite}: CocktailCardProps): ReactElement {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/cocktail/${id}`}>
          <Button variant="primary">See More</Button>
        </Link>
        <Button
          variant={isFavorite ? "danger" : "outline-secondary"}
          onClick={() => onFavorite(id)}
          className="mt-2"
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CocktailCard;
