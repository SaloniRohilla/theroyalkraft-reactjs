import React from 'react';
import styled from 'styled-components';

// Sample data for fiber interior designs
const fiberInteriors = [
  {
    id: 1,
    image: '/images/products/int1.jpeg',
    title: 'Luxurious Banquet Hall Interior',
    description: 'Our luxurious fiber interiors provide a sophisticated and elegant atmosphere for any banquet hall.',
  },
  {
    id: 2,
    image: '/images/products/int2.jpeg',
    title: 'Modern Fiber Interior Design',
    description: 'With sleek and contemporary designs, our fiber interiors enhance the beauty and functionality of any space.',
  },
  {
    id: 3,
    image: '/images/products/int3.jpeg',
    title: 'Classic Fiber Interior',
    description: 'Timeless and grand, our classic fiber interiors add an air of elegance and charm to any banquet hall.',
  },
  // Add more designs as needed
];

const Interior = () => {
  return (
    <Container>
      <Header>Fiber Interior Designs</Header>
      <Description>
        Our Fiber Interior Designs are meticulously crafted to create stunning and functional banquet halls. Whether you are hosting a wedding, corporate event, or any special occasion, our interiors provide the perfect backdrop. Explore our collection and discover the perfect design to elevate your venue.
      </Description>
      <DesignGrid>
        {fiberInteriors.map((interior) => (
          <DesignCard key={interior.id}>
            <Image src={interior.image} alt={interior.title} />
            <Title>{interior.title}</Title>
            <CardDescription>{interior.description}</CardDescription>
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
  width: 500px; /* Updated width */
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px; /* Updated height */
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 1.7rem; /* Slightly increased font size */
  margin: 1rem 0;
  color: #006DB5;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  padding: 0 1rem 1rem;
  color: #666;
`;

export default Interior;
