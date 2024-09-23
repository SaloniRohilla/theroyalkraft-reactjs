import React from 'react';
import styled from 'styled-components';

const WeddingDecoration = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Wedding Decoration</h1>
        <p>Transforming your wedding into a magical experience</p>
      </Header>
      <Gallery>
        <img src="path/to/image1.jpg" alt="Decoration 1" />
        <img src="path/to/image2.jpg" alt="Decoration 2" />
        <img src="path/to/image3.jpg" alt="Decoration 3" />
        <img src="path/to/image4.jpg" alt="Decoration 4" />
      </Gallery>
      <Content>
        <p>We offer a range of wedding decoration services to make your special day unforgettable. From elegant flower arrangements to stunning table settings, we take care of every detail.</p>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12rem;
  text-align: center;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  
  h1 {
    
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: #555;
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  
  img {
    width: calc(25% - 1rem);
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Content = styled.section`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
  }
`;

export default WeddingDecoration;
