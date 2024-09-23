import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12rem;
  background-color: #f0f4f8;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #555;
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Image = styled.img`
  width: 30%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MEPServices = () => {
  return (
    <Container>
      <Title>Mechanical, Electrical, and Plumbing (MEP) Services</Title>
      <Description>
        Our comprehensive MEP services ensure the efficient and safe operation of your banquet hall, providing a seamless experience for your events.
      </Description>
    </Container>
  );
};

export default MEPServices;
