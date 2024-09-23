import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.section`
  padding: 6rem 0;

  .container {
    background: #F0F8FF;
    display: grid;
    grid-template-columns: 1fr; /* Single column layout */
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    padding: 10rem;
    border-radius: 10px;
    text-align: center; /* Center text alignment */
  }

  .heading {
    margin-bottom: 2rem;
    color: #333;
    font-size: 4.5rem;
    font-weight: bold;
    animation: ${slideInLeft} 2s ease-in-out;
  }

  .service-item {
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    animation: ${fadeIn} 1.5s ease-in-out;
  }

  .service-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
  }

  .service-description {
    font-size: 1.4rem;
    color: #555;
    line-height: 1.6;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .heading {
      font-size: 2rem;
    }

    .service-title {
      font-size: 1.8rem;
    }

    .service-description {
      font-size: 1.2rem;
    }
  }
`;

const ServicesSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="heading">Our Services</h2>
        <div className="service-item">
          <h3 className="service-title">Custom Wedding Stages</h3>
          <p className="service-description">
            We design and create custom wedding stages that fit your theme and vision. Our stages are crafted with attention to detail, ensuring a stunning backdrop for your special day.
          </p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Elegant Fiber Designs</h3>
          <p className="service-description">
            Our fiber designs add a touch of elegance to your wedding decor. Choose from a variety of patterns and styles to match your wedding theme.
          </p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Backdrops & Panels</h3>
          <p className="service-description">
            Enhance your wedding venue with our exquisite backdrop panels. We offer customizable options to create a memorable setting for your big day.
          </p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Wedding Decoration Products</h3>
          <p className="service-description">
            From flower arrangements to aisle runners, we provide a wide range of decoration products to complete your wedding setup.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicesSection;
