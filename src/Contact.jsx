import styled from 'styled-components';

const ContactUs = () => {
  return (
    <ContactContainer>
      <Header>Contact Us</Header>
      <Form>
        <FormRow>
          <Input type="text" placeholder="Your Name" required />
        </FormRow>
        <FormRow>
          <Input type="email" placeholder="Your Email" required />
        </FormRow>
        <FormRow>
          <Input type="text" placeholder="Your Subject" required />
        </FormRow>
        <FormRow>
          <TextArea placeholder="Your Message" required />
        </FormRow>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
      <ContactInfo>
        <InfoTitle>Get In Touch</InfoTitle>
        <InfoItem>
          <strong>Phone:</strong> +91-8130462200
        </InfoItem>
        <InfoItem>
          <strong>Email:</strong> info@theroyalkraft.com
        </InfoItem>
        <InfoItem>
          <strong>Address:</strong> 108, First Floor, DLF Galleria Mall, Mayur Vihar, Phase-1 Extension, Near Metro Mayur Vihar Extension, New Delhi - 110091
        </InfoItem>
      </ContactInfo>
      {/* New Inquiry Button */}
      <InquiryButton onClick={() => window.open('https://docs.google.com/forms/d/1kM-qMDi-2dt3MQSJ0Q7mQXQ-3oLpzZfbdJkZPGzyWRs/edit', '_blank')}>
        Send Inquiry Now!
      </InquiryButton>
    </ContactContainer>
  );
};

export default ContactUs;

// Styled components
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background: url('/images/contactbg.png') no-repeat center center/cover;
  min-height: 100vh;
  position: relative;
`;

const Header = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #B200B2;
  margin: 80px 0 40px;
  text-align: center;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  line-height: 1.2;

  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 4px;
    background: linear-gradient(90deg, #007bff, #0056b3);
    border-radius: 2px;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  border-radius: 10px;
`;

const FormRow = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  
  &:focus {
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
  height: 200px;
  outline: none;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  
  &:focus {
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 20px;
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

const InquiryButton = styled.button`
  margin-top: 20px; /* Add some space above the button */
  padding: 15px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff; /* Different color for inquiry button */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactInfo = styled.div`
  margin-top: 60px;
  text-align: center;
  width: 100%;
  max-width: 700px;
`;

const InfoTitle = styled.h3`
  font-size: 3rem;
  color: #333;
  margin-bottom: 30px;
`;

const InfoItem = styled.p`
  font-size: 1.5rem;
  color: #000000;
  margin: 10px 0;
  line-height: 1.6;
`;
