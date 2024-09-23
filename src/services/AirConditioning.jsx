import React from 'react';
import styled from 'styled-components';

import ac1 from '/images/services/ac1.jpg'; 
import ac2 from '/images/services/ac2.jpg';
import ac3 from '/images/services/ac3.jpg';

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
  font-size: 1.6rem;
  margin-bottom: 3rem;
  color: #666;
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: space-around;
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
  font-size: 1.4rem;
  padding: 0 1rem;
`;

const AirConditioning = () => {
  return (
    <Container>
      <Title>Air Conditioning Services</Title>
      <Description>
        Experience the best air conditioning services for your banquet hall, ensuring a comfortable and pleasant environment for your guests.
      </Description>
      <ImageGallery>
        <ImageWrapper>
          <Image src={ac1} alt="Air Conditioning 1" />
          <ImageDescription>
            Our advanced air conditioning systems ensure optimal cooling efficiency, making your event space comfortable even on the hottest days.
          </ImageDescription>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={ac2} alt="Air Conditioning 2" />
          <ImageDescription>
            We offer state-of-the-art installations tailored to the size and layout of your banquet hall, providing seamless climate control.
          </ImageDescription>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={ac3} alt="Air Conditioning 3" />
          <ImageDescription>
            Our maintenance services guarantee that your air conditioning systems remain in top condition, ensuring reliable performance throughout your events.
          </ImageDescription>
        </ImageWrapper>
      </ImageGallery>
    </Container>
  );
};

export default AirConditioning;
