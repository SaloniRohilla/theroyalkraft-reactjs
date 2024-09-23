import React from 'react';
import styled from 'styled-components';

import fire1 from '/images/services/fire1.jpg';

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

const ImageWrapper = styled.div`
  width: 50%; /* Adjusted width */
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto; /* Center the image wrapper */

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
  margin-top: 1.5rem;
  color: #555;
  font-size: 1.5rem;
  padding: 0 1rem;
`;

const FireFighting = () => {
  return (
    <Container>
      <Title>Fire Fighting Services</Title>
      <ImageWrapper>
        <Image src={fire1} alt="Fire Fighting" />
      </ImageWrapper>
      <ImageDescription>
        Ensuring safety in banquet halls is paramount, and our comprehensive fire fighting services provide unparalleled protection for your venue. Our expert team specializes in designing and implementing state-of-the-art fire safety solutions tailored to meet the unique demands of large event spaces. From advanced fire detection systems to efficient suppression systems, we offer a full spectrum of services to safeguard your property and guests.
        
        Our services include the installation of automatic sprinkler systems, fire alarms, and emergency lighting, all strategically placed to ensure rapid response in the event of a fire. We also provide regular maintenance and inspection services to ensure that all equipment remains in optimal working condition. Our team is trained to handle everything from initial setup to emergency response, ensuring that your banquet hall is equipped with the best fire protection technology available.

        In addition to hardware solutions, we offer training programs for your staff, teaching them how to respond effectively in case of an emergency. By choosing our fire fighting services, you are investing in the safety and well-being of your guests, and the long-term security of your banquet hall. Trust us to deliver reliable and efficient fire safety solutions for peace of mind.
      </ImageDescription>
    </Container>
  );
};

export default FireFighting;
