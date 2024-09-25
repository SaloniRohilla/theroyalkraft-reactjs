import React from 'react';
import styled from 'styled-components';

const fountains = [
  {
    id: 1,
    image: '/images/products/fountain1.jpg',
    title: 'Elegant Water Fountain',
    description: 'Our elegant water fountains are designed to create a serene and beautiful focal point for any outdoor space.',
  },
  {
    id: 2,
    image: '/images/products/fountain3.jpg',
    title: 'Modern Water Fountain',
    description: 'Modern and sleek, our water fountains are perfect for contemporary settings, adding a touch of sophistication.',
  },
  {
    id: 3,
    image: '/images/products/fountain1.jpg',
    title: 'Classic Water Fountain',
    description: 'Timeless and sophisticated, our classic water fountains provide a touch of elegance to any garden or patio.',
  },
];

const Fountains = () => {
  return (
    <Container>
      <Header>Water Fountains</Header>
      <Description>
        Our Water Fountains are crafted with the finest materials to provide a stunning and tranquil focal point for your garden or outdoor space. Whether you prefer traditional elegance or modern sophistication, we have a fountain to suit your style. Explore our collection and find the perfect addition to your landscape.
      </Description>
      <DesignGrid>
        {fountains.map((fountain) => (
          <DesignCard key={fountain.id}>
            <Image src={fountain.image} alt={fountain.title} />
            <Title>{fountain.title}</Title>
            <CardDescription>{fountain.description}</CardDescription>
          </DesignCard>
        ))}
      </DesignGrid>
    </Container>
  );
};

// Styled-components
const Container = styled.div`
  padding: 12rem;
  background-color: #f9f9f9;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const DesignGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const DesignCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 500px; /* Updated width to match Mandap.jsx and Exterior.jsx */
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px; /* Updated height to match Mandap.jsx and Exterior.jsx */
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 1.7rem; /* Slightly increased font size for consistency */
  margin: 1rem 0;
  color: #006DB5;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  padding: 0 1rem 1rem;
  color: #666;
`;

export default Fountains;
