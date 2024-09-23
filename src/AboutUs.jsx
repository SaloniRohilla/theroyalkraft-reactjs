import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <Header>
        <Title>About Us</Title>
      </Header>
      <Content>
        <Section>
          <SectionImage src="./images/aboutus1.jpg" alt="About Us" />
          <SectionText>
            <SectionTitle>WHO ARE WE</SectionTitle>
            <Paragraph>
              THE ROYAL KRAFT by KADEN KOPPERS INDIA PVT. LTD. is a B&K Group Company and a fully dedicated team of professionals who are well-qualified in their area of expertise and have professional experience of more than 20 years in the construction industry.
              <br /><br />
              The expertise area of KADEN KOPPERS is to provide full satisfactory services to KADEN KOPPERS customers on single platforms with good quality products and prompt services at their door.
              <br /><br />
              KADEN KOPPERS deals with multi-brands with multi-product services in the building material and construction industry. KADEN KOPPERS team of professionals has expertise in wedding resorts & banquets, Hotels, Farmhouses, office space, residences, Retail, food chains, and various Infrastructure projects.
              <br /><br />
              Qualified masters of India’s Interior Designing Company “KADEN KOPPERS” perform high finishing and fit-out works. We own all innovative and traditional technologies and comply with India and international standards of all building codes and fire prevention rules based on technical and architectural documentation. Our Wedding venues and all other projects follow all vastu parameters with our expert team of consultants.
            </Paragraph>
          </SectionText>
        </Section>
        
        <Section>
          <SectionText>
            <SectionTitle>Our Associated Companies under B&K Group of Companies:</SectionTitle>
            <CenteredDiv>
              <Paragraph>
                <a href="https://www.vinsjoy.com/">Vinsjoy</a>
                <br />
                <a href="https://www.theroyalkraft.com/">The Royal Kraft</a>
                <br />
                <a href="https://joypurbansiresort.com/">Joypur Bansiresort</a>
              </Paragraph>
            </CenteredDiv>
          </SectionText>
        </Section>
        
        <Section>
          <SectionTitle>Why Choose Us?</SectionTitle>
          <GridContainer>
            <GridItem>
              <FeatureTitle>Experience & Expertise</FeatureTitle>
              <FeatureDescription>We bring over 20 years of expertise in the construction and design industry, ensuring high-quality and efficient services for every project.</FeatureDescription>
            </GridItem>
            <GridItem>
              <FeatureTitle>Comprehensive Services</FeatureTitle>
              <FeatureDescription>We offer a complete range of services from conceptualization to execution, catering to various sectors including weddings, hotels, resorts, offices, and more.</FeatureDescription>
            </GridItem>
            <GridItem>
              <FeatureTitle>Quality Assurance</FeatureTitle>
              <FeatureDescription>Our commitment to quality is unwavering, and we adhere to both national and international standards in all our projects.</FeatureDescription>
            </GridItem>
            <GridItem>
              <FeatureTitle>Innovative Solutions</FeatureTitle>
              <FeatureDescription>We use the latest technologies and innovative methods to deliver exceptional results that meet our clients' needs and exceed their expectations.</FeatureDescription>
            </GridItem>
            <GridItem>
              <FeatureTitle>Client-Centric Approach</FeatureTitle>
              <FeatureDescription>We prioritize our clients needs and work closely with them to ensure that every project is tailored to their vision and requirements.</FeatureDescription>
            </GridItem>
            <GridItem>
              <FeatureTitle>Timely Delivery</FeatureTitle>
              <FeatureDescription>We understand the importance of deadlines and strive to complete every project on time without compromising on quality.</FeatureDescription>
            </GridItem>
          </GridContainer>
        </Section>
        
        <CTA>
          <Link to="/contact">
            <CTAButton>Get in Touch</CTAButton>
          </Link>
        </CTA>
      </Content>
    </AboutContainer>
  );
};

export default AboutUs;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9rem;
  background: url('./images/aboutbg.jpg') no-repeat center center/cover;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #333;
  margin-bottom: 10px;
  animation: ${fadeIn} 1s ease-out;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SectionImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  order: 2; 
  @media (min-width: 768px) {
    order: 1;
  }
`;

const SectionText = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
  order: 1; 
  @media (min-width: 768px) {
    order: 2;
  }
`;

const SectionTitle = styled.h3`
  font-size: 4rem;
  color: #333;
  margin-bottom: 10px;
  margin-left: -1rem;
  animation: ${fadeIn} 1s ease-out;
  text-align: left;
`;

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  color: #555;
  line-height: 1.6;

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  text-align: center;
`;

const GridItem = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  animation: ${fadeIn} 1s ease-out;
`;

const FeatureTitle = styled.h4`
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1.4rem;
  color: #555;
  line-height: 1.6;
`;

const CTA = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const CTAButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #B200B2;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
