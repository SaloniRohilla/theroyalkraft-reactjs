import React from 'react';
import styled from 'styled-components';

// Sample data for fiber work
const fiberWorks = [
  {
    id: 1,
    image: '/images/products/fiberwork1.jpg',
    title: 'Intricate Fiber Artwork',
    description: 'Our intricate fiber artworks are designed to add elegance and sophistication to any event or space.',
  },
  {
    id: 2,
    image: '/images/products/fiberwork2.jpg',
    title: 'Modern Fiber Sculptures',
    description: 'Modern and stylish, our fiber sculptures are perfect for contemporary settings, offering a unique aesthetic.',
  },
  {
    id: 3,
    image: '/images/products/fiberwork3.jpg',
    title: 'Classic Fiber Designs',
    description: 'Timeless and beautiful, our classic fiber designs bring a touch of elegance to any venue or occasion.',
  },
  // Add more designs as needed
];

const FiberWork = () => {
  return (
    <Container>
      <Header>Fiber Work</Header>
      <Description>
        Our Fiber Work collection is crafted with precision and artistry to create stunning pieces that enhance the beauty of any space. Whether you prefer modern sculptures or classic designs, our fiber work offers a diverse range of styles to suit your needs. Explore our collection and find the perfect fiber work for your next event or project.
      </Description>
      <DesignGrid>
        {fiberWorks.map((work) => (
          <DesignCard key={work.id}>
            <Image src={work.image} alt={work.title} />
            <Title>{work.title}</Title>
            <CardDescription>{work.description}</CardDescription>
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

const CardDescription = styled.p`
  font-size: 1rem;
  padding: 0 1rem 1rem;
  color: #666;
`;

export default FiberWork;
