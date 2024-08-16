// src/pages/SearchPage.tsx
import { ReactElement, useState, useEffect } from 'react';
import { Container, ListGroup, Pagination } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Cocktail } from "../interfaces";
import { searchCocktailsByName } from "../data";
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchPage(): ReactElement {
  const [results, setResults] = useState<Cocktail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('query');

  const resultsPerPage = 10;

  useEffect(() => {
  const handleSearch = async () => {
    const data = await searchCocktailsByName(query!);
    const drinks = data.drinks || [];
    setResults(drinks);
    setCurrentPage(1);
    setTotalPages(Math.ceil(drinks.length / resultsPerPage));
  };
    handleSearch();
  }, [query]);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedResults = results.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

  return (
    <Container className="mt-2">
      <h3 className='text-white'>Search results for "{query}"</h3>
      <ListGroup className="mt-5">
        {paginatedResults.map((cocktail) => (
          <Link to={`/cocktail/${cocktail.idDrink}`} key={cocktail.idDrink}>
            <ListGroup.Item action>{cocktail.strDrink}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>

      <Pagination className="mt-3">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default SearchPage;
