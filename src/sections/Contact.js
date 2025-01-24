import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle>Get in Touch</SectionTitle>
      <ContactContainer>
        <ContactInfo>
          <InfoTitle>Contact Information</InfoTitle>
          <InfoItem
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <FaEnvelope />
            <span>support@yourapp.com</span>
          </InfoItem>
          <InfoItem
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <FaPhone />
            <span>+1 (555) 123-4567</span>
          </InfoItem>
          <InfoItem
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FaMapMarkerAlt />
            <span>123 App Street, San Francisco, CA 94105</span>
          </InfoItem>
        </ContactInfo>
        <ContactForm
          as={motion.form}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FormGroup>
            <Input type="text" placeholder="Your Name" required />
          </FormGroup>
          <FormGroup>
            <Input type="email" placeholder="Your Email" required />
          </FormGroup>
          <FormGroup>
            <TextArea placeholder="Your Message" rows="5" required />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.lightBackground};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.text};
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfo = styled.div`
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.text};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.lightText};

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Contact; 