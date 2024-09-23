import React from 'react';
import styled from 'styled-components';

const fiberMandaps = [
  {
    id: 1,
    image: '/images/mandaps/mandap4.jpg',
    title: 'Elegant Fiber Mandap',
    description: 'Our elegant fiber mandaps are designed to create a beautiful and sacred space for your special day.',
  },
  {
    id: 2,
    image: '/images/mandaps/mandap5.jpg',
    title: 'Traditional Fiber Mandap',
    description: 'Embrace tradition with our exquisite fiber mandaps that bring a touch of cultural heritage to your wedding.',
  },
  {
    id: 3,
    image: '/images/mandaps/mandap6.jpg',
    title: 'Modern Fiber Mandap',
    description: 'Our modern fiber mandaps combine contemporary design with timeless elegance, perfect for a chic wedding.',
  },
];

const Mandap = () => {
  return (
    <Container>
      <Header>Fiber Mandaps</Header>
      <Description>
        Our Fiber Mandaps are crafted with the finest materials to provide a stunning focal point for your wedding ceremony. Whether you prefer traditional elegance or modern sophistication, we have a mandap to suit your style. Explore our collection and find the perfect setting for your special day.
      </Description>
      <DesignGrid>
        {fiberMandaps.map((mandap) => (
          <DesignCard key={mandap.id}>
            <Image src={mandap.image} alt={mandap.title} />
            <Title>{mandap.title}</Title>
            <CardDescription>{mandap.description}</CardDescription>
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

export default Mandap;
