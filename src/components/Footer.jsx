import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <ColumnTitle>Important Links</ColumnTitle>
          <LinkList>
            <LinkItem>Privacy Policy</LinkItem>
            <LinkItem>Cookies Policy</LinkItem>
            <LinkItem>Terms & Conditions</LinkItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnTitle>Quick Links</ColumnTitle>
          <LinkList>
            <LinkItem>Introduction</LinkItem>
            <LinkItem>Organization Team</LinkItem>
            <LinkItem>Blogs</LinkItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnTitle>Useful Information</ColumnTitle>
          <LinkList>
            <LinkItem>How To Make Luxurious Banquet At a Low Cost -1? || The Royal Kraft</LinkItem>
            <LinkItem>Top 10 Banquet Designs || The Royal Kraft || Best in Fiber Manufacturing in all over India</LinkItem>
            <LinkItem>Top 5 Design Offers By The Royal Kraft</LinkItem>
            <LinkItem>Top 1st Architectural Construction in India</LinkItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnTitle>Contact Info</ColumnTitle>
          <ContactInfo>
            <p>
              The Royal Kraft offers itself as a Manufacturer, Exporter, and Supplier of wedding stages, fiber design, backdrop panels, wedding decoration products, and many more.
            </p>
            <ContactItem>
              <Icon>📍</Icon>
              <span>108, First Floor, DLF Galleria Mall, Mayur Vihar, Phase-1 Extention, Near Metro Mayur Vihar Extention, New Delhi - 110091</span>
            </ContactItem>
            <ContactItem>
              <Icon>📞</Icon>
              <span>+91-9311826565</span>
            </ContactItem>
            <ContactItem>
              <Icon>📱</Icon>
              <span>8130462200</span>
            </ContactItem>
          </ContactInfo>
        </Column>
      </FooterContent>
      <SocialMediaContainer>
        <SocialMediaTitle>Follow Us:</SocialMediaTitle>
        <SocialMediaIcons>
          <SocialIcon href="http://facebook.com/profile.php?id=100085229783054" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon href="http://x.com/TheRoyalkraft" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="http://instagram.com/theroyalkraft" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
        </SocialMediaIcons>
      </SocialMediaContainer>
      <FooterBottom>
        © 2024 The Royal Kraft by Kaden Koppers India Pvt. Ltd. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

// Styled Components
const FooterContainer = styled.div`
  background: #2C3E50;
  color: white;
  padding: 60px 20px;
  text-align: left;
  font-size: 1.4rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 220px;
  margin: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.6rem;
  color: #E74C3C;
  margin-bottom: 15px;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin: 8px 0;
  color: #ECF0F1;
  transition: color 0.3s ease;

  &:hover {
    color: #E74C3C;
    cursor: pointer;
  }
`;

const ContactInfo = styled.div`
  p {
    margin-bottom: 20px;
    color: #ECF0F1;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 1.5rem;
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #34495E;
  font-size: 1.5rem;
  color: #BDC3C7;
`;

const SocialMediaContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const SocialMediaTitle = styled.h4`
  margin-bottom: 10px;
  color: #E74C3C;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 2rem;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #E74C3C;
  }
`;
