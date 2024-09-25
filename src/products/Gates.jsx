import React from 'react';
import styled from 'styled-components';

const fiberEntranceGates = [
  {
    id: 1,
    image: '/images/gates/gate3.jpg',
    title: 'Grand Fiber Entrance Gate',
    description: 'Our grand fiber entrance gates are designed to make a lasting impression, combining elegance with durability.',
  },
  {
    id: 2,
    image: '/images/gates/gate4.jpg',
    title: 'Modern Fiber Gate',
    description: 'Modern and sleek, our fiber gates are perfect for contemporary events, providing a stylish entry point.',
  },
  {
    id: 3,
    image: '/images/gates/gate5.jpg',
    title: 'Classic Fiber Entrance',
    description: 'Timeless and sophisticated, our classic fiber gates add a touch of grandeur to any event.',
  },
];

const Gates = () => {
  return (
    <Container>
      <Header>Fiber Entrance Gates</Header>
      <Description>
        Our Fiber Entrance Gates are crafted to perfection, offering a blend of beauty and strength that will enhance the entrance of any venue. Whether you are looking for something grand and elaborate or sleek and modern, we have a design to match your vision. Explore our collection and let us help you create an unforgettable entrance for your next event.
      </Description>
      <DesignGrid>
        {fiberEntranceGates.map((gate) => (
          <DesignCard key={gate.id}>
            <Image src={gate.image} alt={gate.title} />
            <Title>{gate.title}</Title>
            <CardDescription>{gate.description}</CardDescription>
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
  width: 500px; /* Updated width to match Exterior.jsx */
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

export default Gates;
