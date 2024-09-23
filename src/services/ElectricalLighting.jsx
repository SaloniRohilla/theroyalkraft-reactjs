import React from 'react';
import styled from 'styled-components';

import lighting1 from '/images/services/lighting1.jpg';
import lighting2 from '/images/services/lighting2.jpg';
import lighting3 from '/images/services/lighting3.jpg';

const Container = styled.div`
  padding: 12rem;
  background-color: #f5f5f5;
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
  color: #666;
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  width: 30%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover img {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
`;

const ImageDescription = styled.div`
  text-align: center;
  margin-top: 1rem;
  color: #555;
  font-size: 1.1rem;
  padding: 0 1rem;
`;

const ElectricalLighting = () => {
  return (
    <Container>
      <Title>Electrical Lighting Services</Title>
      <Description>
        Illuminate your banquet hall with our top-notch electrical lighting services, ensuring a dazzling and memorable experience for your guests.
      </Description>
      <ImageGallery>
        <ImageWrapper>
          <Image src={lighting1} alt="Electrical Lighting 1" />
          <ImageDescription>
            Our bespoke lighting designs add elegance and charm to your event space, enhancing every corner with the perfect ambiance.
          </ImageDescription>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={lighting2} alt="Electrical Lighting 2" />
          <ImageDescription>
            Experience the magic of professionally installed lighting that transforms your banquet hall into a stunning venue.
          </ImageDescription>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={lighting3} alt="Electrical Lighting 3" />
          <ImageDescription>
            From subtle accent lighting to dramatic displays, our solutions are tailored to meet your specific needs and preferences.
          </ImageDescription>
        </ImageWrapper>
      </ImageGallery>
    </Container>
  );
};

export default ElectricalLighting;
