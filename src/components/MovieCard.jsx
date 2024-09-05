
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 8px 0;
`;

const Description = styled.p`
  font-size: 1em;
  color: #666;
`;

const Rating = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  color: #ffa500;
`;

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card>
      <Poster src={posterURL} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Rating>Rating: {rating}/10</Rating>
    </Card>
  );
};

export default MovieCard;
