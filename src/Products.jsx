import React from 'react';
import styled, { keyframes } from 'styled-components';

const fiberStages = [
  { id: 1, name: 'Stage 1', image: './images/stages/stage1.jpg', description: 'An elegant and durable fiber stage design, perfect for adding grandeur and sophistication to any event.' },
  { id: 2, name: 'Stage 2', image: './images/stages/stage2.jpg', description: 'A sleek, modern fiber stage that combines minimalism and style for contemporary event settings.' },
  { id: 3, name: 'Stage 3', image: './images/stages/stage3.jpg', description: 'A classic fiber stage with intricate details, ideal for traditional weddings or cultural ceremonies.' },
  { id: 4, name: 'Stage 4', image: './images/stages/stage4.jpg', description: 'A stylish and versatile fiber stage with timeless elegance, perfect for both indoor and outdoor events.' },
  { id: 5, name: 'Stage 5', image: './images/stages/stage5.jpg', description: 'This contemporary fiber stage exudes sophistication and is designed to make a bold statement at any event.' },
  { id: 6, name: 'Stage 6', image: './images/stages/stage6.jpg', description: 'A traditional fiber stage inspired by heritage designs, adding a touch of authenticity to cultural celebrations.' },
];

const entranceGates = [
  { id: 7, name: 'Entrance Gate 1', image: './images/gates/gate1.jpg', description: 'A grand and majestic fiber entrance gate that creates an unforgettable first impression for any event.' },
  { id: 8, name: 'Entrance Gate 2', image: './images/gates/gate2.jpg', description: 'An elegant and sophisticated fiber gate with fine details, offering a welcoming and refined entrance.' },
  { id: 9, name: 'Entrance Gate 3', image: './images/gates/gate3.jpg', description: 'A luxurious and intricately designed fiber gate that embodies elegance and grandeur for upscale events.' },
  { id: 10, name: 'Entrance Gate 4', image: './images/gates/gate4.jpg', description: 'An elegant fiber entrance gate designed to seamlessly blend with a variety of event themes and aesthetics.' },
  { id: 11, name: 'Entrance Gate 5', image: './images/gates/gate5.jpg', description: 'A modern and sleek fiber gate with bold lines and a contemporary design, perfect for urban-inspired events.' },
  { id: 12, name: 'Entrance Gate 6', image: './images/gates/gate6.jpg', description: 'A classic and timeless fiber entrance gate that evokes a sense of tradition and charm.' },
];

const mandaps = [
  { id: 13, name: 'Mandap 1', image: './images/mandaps/mandap1.jpg', description: 'A beautifully crafted mandap with intricate designs that bring a sense of tradition and elegance to any ceremony.' },
  { id: 14, name: 'Mandap 2', image: './images/mandaps/mandap2.jpg', description: 'A traditional mandap with detailed carvings, providing a culturally rich and aesthetically pleasing setup.' },
  { id: 15, name: 'Mandap 3', image: './images/mandaps/mandap3.jpg', description: 'An elegant mandap setup featuring delicate arches and columns, ideal for a sophisticated and graceful wedding.' },
  { id: 16, name: 'Mandap 4', image: './images/mandaps/mandap4.jpg', description: 'A modern mandap with clean lines and contemporary details, perfect for couples seeking a blend of tradition and modernity.' },
  { id: 17, name: 'Mandap 5', image: './images/mandaps/mandap5.jpg', description: 'An ornate mandap design featuring intricate patterns and lavish details, perfect for a luxurious wedding ceremony.' },
  { id: 18, name: 'Mandap 6', image: './images/mandaps/mandap6.jpg', description: 'A luxurious mandap with grand pillars and elegant finishes, designed to create a magnificent setting for any event.' },
];

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  padding: 6.5rem;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 40px 0;
  font-size: 4em;
  color: ${({ theme }) => theme.colors.heading};
  animation: ${slideIn} 1s ease-out;
`;

const Section = styled.section`
  margin: 20px 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.heading};
  border-bottom: 2px solid #B200B2;
  padding-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.bg};
  animation: ${slideIn} 1s ease-out;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  padding: 0 10%;
`;

const ProductCard = styled.div`
  position: relative;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${slideIn} 1s ease-out;

  width: 90%;
  margin: 0 auto;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

const ProductDescription = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
  background: rgba(107, 35, 107, 0.6);
  color: white;  // Changed to white
  padding: 20px;
  opacity: 1;  // Set to 1 to make it visible all the time
  box-sizing: border-box;
`;




const Products = () => {
  return (
   <PageContainer>
    <PageTitle>OUR PRODUCTS</PageTitle>
    <Section>
        <SectionTitle>Fiber Stages</SectionTitle>
        <ProductsContainer>
          {fiberStages.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductDescription>
                <p>{product.description}</p>
              </ProductDescription>
            </ProductCard>
          ))}
        </ProductsContainer>
      </Section>

      <Section>
        <SectionTitle>Fiber Entrance Gates</SectionTitle>
        <ProductsContainer>
          {entranceGates.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductDescription>
                <p>{product.description}</p>
              </ProductDescription>
            </ProductCard>
          ))}
        </ProductsContainer>
      </Section>

      <Section>
        <SectionTitle>Fiber Mandaps</SectionTitle>
        <ProductsContainer>
          {mandaps.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductDescription>
                <p>{product.description}</p> 
              </ProductDescription>
            </ProductCard>
          ))}
        </ProductsContainer>
      </Section>
    </PageContainer>
  );
};

export default Products;
