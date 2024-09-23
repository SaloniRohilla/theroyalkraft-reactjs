import React from 'react';
import styled from 'styled-components';

const fiberStages = [
  {
    id: 1,
    image: '/images/stages/stage2.jpg',
    title: 'Elegant Fiber Stage',
    description: 'Our elegant fiber stages are perfect for creating a stunning focal point at any event, combining beauty with functionality.',
  },
  {
    id: 2,
    image: '/images/stages/stage6.jpg',
    title: 'Modern Fiber Stage Design',
    description: 'Sleek and contemporary, our modern fiber stages provide a stylish and sophisticated platform for your event.',
  },
  {
    id: 3,
    image: '/images/stages/stage1.jpg',
    title: 'Classic Fiber Stage',
    description: 'Timeless and grand, our classic fiber stages add an air of elegance and prestige to any occasion.',
  },
];

const FiberStages = () => {
  return (
    <Container>
      <Header>Fiber Stages</Header>
      <Description>
        Our Fiber Stages are crafted with precision and attention to detail, providing a beautiful and functional platform for your events. Whether you are hosting a wedding, concert, or corporate event, our fiber stages offer a versatile and attractive solution. Explore our collection and discover the perfect stage for your needs.
      </Description>
      
      <DesignGrid>
        {fiberStages.map((stage) => (
          <DesignCard key={stage.id}>
            <Image src={stage.image} alt={stage.title} />
            <Title>{stage.title}</Title>
            <CardDescription>{stage.description}</CardDescription>
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
  width: 300px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 1.7rem;
  margin: 1rem 0;
  color: #006DB5;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  padding: 0 1rem 1rem;
  color: #666;
`;

export default FiberStages;
