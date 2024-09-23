import React from 'react';
import styled from 'styled-components';

const exteriorDesigns = [
  {
    id: 1,
    image: '/images/products/exterior1.jpg',
    title: 'Elegant Banquet Hall',
    description: 'An elegant banquet hall with modern architecture and stunning exterior design.'
  },
  {
    id: 2,
    image: '/images/products/exterior2.jpg',
    title: 'Luxury Event Venue',
    description: 'A luxury event venue with beautiful gardens and a grand entrance.'
  },
  {
    id: 3,
    image: '/images/products/exterior3.jpg',
    title: 'Classic Banquet Hall',
    description: 'A classic banquet hall with traditional design elements and exquisite landscaping.'
  },
];

const Exterior = () => {
  return (
    <Container>
      <Header>Exterior Designs of Banquet Halls</Header>
      <DesignGrid>
        {exteriorDesigns.map(design => (
          <DesignCard key={design.id}>
            <Image src={design.image} alt={design.title} />
            <Title>{design.title}</Title>
            <Description>{design.description}</Description>
          </DesignCard>
        ))}
      </DesignGrid>
    </Container>
  );
};

const Container = styled.div`
  padding: 12rem;
  background-color: #f9f9f9;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
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
  width: 500px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
  color: #006DB5;
`;

const Description = styled.p`
  font-size: 1rem;
  padding: 0 1rem 1rem;
  color: #666;
`;

export default Exterior;
