import React from 'react';
import styled from 'styled-components';

// Sample data for gazebos
const gazebos = [
  {
    id: 1,
    image: '/path/to/gazebo1.jpg',
    title: 'Elegant Gazebo',
    description: 'Our elegant gazebos provide a beautiful outdoor space for your guests to relax and enjoy the event.',
  },
  {
    id: 2,
    image: '/path/to/gazebo2.jpg',
    title: 'Modern Gazebo Design',
    description: 'Sleek and contemporary, our modern gazebos offer a stylish shelter for any outdoor event.',
  },
  {
    id: 3,
    image: '/path/to/gazebo3.jpg',
    title: 'Classic Gazebo',
    description: 'Timeless and grand, our classic gazebos add an air of elegance and charm to any occasion.',
  },
  // Add more designs as needed
];

const Gazebo = () => {
  return (
    <Container>
      <Header>Gazebos</Header>
      <Description>
        Our Gazebos are crafted with precision and attention to detail, providing a beautiful and functional outdoor space for your events. Whether you are hosting a wedding, garden party, or corporate event, our gazebos offer a versatile and attractive solution. Explore our collection and discover the perfect gazebo for your needs.
      </Description>
      <DesignGrid>
        {gazebos.map((gazebo) => (
          <DesignCard key={gazebo.id}>
            <Image src={gazebo.image} alt={gazebo.title} />
            <Title>{gazebo.title}</Title>
            <CardDescription>{gazebo.description}</CardDescription>
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
  font-size: 1.5rem;
  margin: 1rem 0;
  color: #006DB5;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  padding: 0 1rem 1rem;
  color: #666;
`;

export default Gazebo;
