import React from 'react';
import styled from 'styled-components';

// Sample data for wedding decorations
const weddingDecorations = [
  {
    id: 1,
    image: '/images/products/dec1.jpg',
    title: 'Elegant Floral Arrangement',
    description: 'A beautiful arrangement of flowers to enhance your wedding ambiance.',
  },
  {
    id: 2,
    image: '/images/products/dec2.jpg',
    title: 'Stunning Table Settings',
    description: 'Exquisite table settings that will impress your guests.',
  },
  {
    id: 3,
    image: '/images/products/dec3.jpg',
    title: 'Magical Lighting Effects',
    description: 'Create a dreamy atmosphere with our lighting solutions.',
  },
];

const WeddingDecoration = () => {
  return (
    <Container>
      <Header>Wedding Decoration</Header>
      <Description>
        Transforming your wedding into a magical experience. We offer a range of wedding decoration services to make your special day unforgettable.
      </Description>
      <DesignGrid>
        {weddingDecorations.map((decoration) => (
          <DesignCard key={decoration.id}>
            <Image src={decoration.image} alt={decoration.title} />
            <Title>{decoration.title}</Title>
            <CardDescription>{decoration.description}</CardDescription>
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
  text-align: center;
`;

const Header = styled.h1`
  margin-bottom: 2rem;
  color: #333;
`;

const Description = styled.p`
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

export default WeddingDecoration;
