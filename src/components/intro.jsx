import React, { useEffect, useState } from "react";
import styled from "styled-components";
import introBg from '/images/introbg.jpg'; // Import your new background image

const Wrapper = styled.section`
  position: relative; /* Ensure the Wrapper can contain absolutely positioned children */

  /* Full-width background for the hero title */
  .full-width-bg {
    width: 100vw;
    margin-left: calc(-50vw + 50%); /* Full-width centering */
    background-color: rgba(0, 79, 79, 0.5); /* Fallback background color */
    padding: 1.5rem 0; /* Added padding */
    text-align: center; 
    border-radius: 20px; /* Add rounded corners */
    overflow: hidden; /* Ensure no overflow of content around rounded corners */
    z-index: 2; /* Ensure it is above the background image */
  }

  .background-image {
    position: absolute; 
    top: 20%; /* Adjust this value to move the image downwards */
    left: 0;
    right: 0;
    height: 70%; /* Set to a value that allows it to still cover the section */
    background: url(${introBg}) no-repeat center center; 
    background-size: cover; /* Ensure the image covers the entire background */
    z-index: -1; /* Place it behind other content */
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 10px;
    min-height: 600px;
    margin-bottom: -18rem; /* Adjust for layout needs */
    position: relative; /* Position relative for absolute child */
    z-index: 2; /* Ensure content is above the background image */
  }

  /* Hero Title Styling */
  .hero-title {
    font-size: 4.5rem;
    font-weight: bold;
    margin: 0;
    color: white; /* Change text color for better contrast */
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Darker shadow for better readability */
    display: inline-block;
  }

  /* Typewriter Animation */
  .typewriter {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s steps(30, end) forwards;
    color: #6b096b; /* Color for 'THE ROYAL KRAFT' */
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* Content Section */
  .section-hero-data {
    color: #333;
    text-align: left; /* Align text to the left */
    padding: 1.5rem; /* Increased padding */
  }

  .hero-para {
    font-size: 1.4rem;
    margin-top: 1.5rem;
    line-height: 1.6;
    color: #555;
  }

  /* Image Section */
  .hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-top: -180px; /* Adjust the value for better positioning */
  }

  .hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; /* Rounded corners for the image */
  }

  /* Mobile Adjustments */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      grid-template-columns: 1fr; /* Stack columns on smaller screens */
    }

    .hero-title {
      font-size: 2.5rem; /* Smaller font size on mobile */
    }

    .hero-para {
      font-size: 1.2rem;
    }
  }
`;

const Intro = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 4000); // Duration of the typing animation in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      {/* Background image below the title */}
      <div className="background-image" />

      {/* Full-width background for the title */}
      <div className="full-width-bg">
        <h1 className="hero-title">
          <span>WELCOME TO </span>
          <span className={`typewriter ${isTypingComplete ? "finished" : ""}`}>
            THE ROYAL KRAFT
          </span>
        </h1>
      </div>

      <div className="container">
        <div className="section-hero-data">
          <p className="hero-para">
            The Royal Kraft offers itself as a Manufacturer, Exporter, and Supplier of wedding stages, fiber design, backdrop panels, wedding decoration products, and many more. The Royal Kraft is a renowned manufacturer, exporter, and supplier of a wide range of wedding décor products. With a strong focus on quality and customer satisfaction, we offer an extensive collection of wedding stages, fiber design, backdrop panels, and various other decorative items. Our wedding stages are meticulously crafted to create a stunning backdrop for your special day. Whether you prefer a traditional or contemporary design, we have various options to suit your taste. Our stages are made from high-quality materials and are intricately designed to add a touch of elegance to any wedding venue. We understand that every wedding is unique, so we offer customizable fiber designs and backdrop panels. Our team of skilled artisans can create personalized designs that perfectly match your wedding theme and décor. From intricate patterns to bold motifs, our fiber designs and backdrop panels are sure to make a lasting impression on your guests.
          </p>
        </div>
        <div className="hero-image">
          <img src="/images/intro.jpg" alt="Wedding Decor" /> {/* Keep this image as is */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Intro;
