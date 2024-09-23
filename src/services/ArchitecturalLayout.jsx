import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  padding: 12rem;
  background-color: #eef2f3;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #444;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #777;
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

const ArchitecturalLayout = () => {
  return (
    <Container>
      <Title>Architectural Layout Services</Title>
      <Description>
        Explore our exquisite architectural layout services designed to bring your vision to life with precision and style.
      </Description>
    </Container>
  );
};

export default ArchitecturalLayout;
