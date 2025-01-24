import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaApple } from 'react-icons/fa';

const Home = () => {
  return (
    <HomeSection id="home">
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AppIcon>
            <img src={`${process.env.PUBLIC_URL}/appicon.webp`} alt="Audit Master Icon" />
          </AppIcon>
          <HeroTitle>Audit Master - Site Check Pro</HeroTitle>
          <HeroSubtitle>
            Your AI-Powered Audit Companion. Transform the way you audit with professional-grade tools designed to save time, improve accuracy, and simplify inspections.
          </HeroSubtitle>
          <ButtonGroup>
            <AppStoreButton 
              href="#" 
              target="_blank"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaApple />
              <ButtonText>
                <span>Download on the</span>
                App Store
              </ButtonText>
            </AppStoreButton>
          </ButtonGroup>
        </motion.div>
      </HeroContent>
      <HeroImageContainer
        as={motion.div}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img 
          src={`${process.env.PUBLIC_URL}/landing_page_image2.jpg`}
          alt="Audit Master Pro Interface"
        />
      </HeroImageContainer>
    </HomeSection>
  );
};

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: auto;
    flex-direction: column;
    text-align: center;
    padding: 100px 20px 60px;
    gap: 0;
  }
`;

const HeroContent = styled.div`
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const AppStoreButton = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  background: black;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    font-size: 2rem;
  }

  &:hover {
    background: #1a1a1a;
  }
`;

const ButtonText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  span {
    font-size: 0.8rem;
    opacity: 0.8;
  }

  font-size: 1.2rem;
  font-weight: 500;
`;

const AppIcon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto 1.5rem auto;
  }
`;

const HeroImageContainer = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export default Home; 