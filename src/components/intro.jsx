import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .container {
    display: grid; /* Keep grid layout */
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 10px;
      min-height: 600px;
  }

  .section-hero-data {
    color: #333;
    text-align: left; /* Align text to the left */
    padding: 1rem; /* Padding for spacing */
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin: 0;
    color: black;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }

  .hero-para {
    font-size: 1.4rem;
    margin-top: 1.5rem;
    line-height: 1.6;
    color: #555;
  }

  .hero-image {
    display: flex; /* Center the image vertically */
    align-items: center;
    justify-content: center;
    padding: 1rem; /* Padding for spacing */
  }

  .hero-image img {
    max-width: 100%; /* Responsive image */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px; /* Rounded corners for the image */
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      grid-template-columns: 1fr; /* Stack columns on smaller screens */
    }

    .hero-title {
      font-size: 2rem;
    }

    .hero-para {
      font-size: 1.2rem;
    }
  }
`;

const Intro = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="section-hero-data">
          <h1 className="hero-title">WELCOME TO THE ROYAL KRAFT BY KADEN KOPPERS</h1>
          <p className="hero-para">
            The Royal Kraft offers itself as a Manufacturer, Exporter, and Supplier of wedding stages, fiber design, backdrop panels, wedding decoration products, and many more. The Royal Kraft is a renowned manufacturer, exporter, and supplier of a wide range of wedding décor products. With a strong focus on quality and customer satisfaction, we offer an extensive collection of wedding stages, fiber design, backdrop panels, and various other decorative items. Our wedding stages are meticulously crafted to create a stunning backdrop for your special day. Whether you prefer a traditional or contemporary design, we have various options to suit your taste. Our stages are made from high-quality materials and are intricately designed to add a touch of elegance to any wedding venue. We understand that every wedding is unique, so we offer customizable fiber designs and backdrop panels. Our team of skilled artisans can create personalized designs that perfectly match your wedding theme and décor. From intricate patterns to bold motifs, our fiber designs and backdrop panels are sure to make a lasting impression on your guests.
          </p>
        </div>
        <div className="hero-image">
          <img src="/images/intro.jpg" alt="Wedding Decor" /> {/* Replace with your image path */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Intro;
