import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your App's Amazing Journey Starts Here
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your daily life with our innovative solution that helps you achieve more.
          </motion.p>
          <ButtonGroup>
            <AppStoreButton href="#" target="_blank">
              <img src="/app-store-badge.svg" alt="Download on App Store" />
            </AppStoreButton>
            <PlayStoreButton href="#" target="_blank">
              <img src="/play-store-badge.png" alt="Get it on Google Play" />
            </PlayStoreButton>
          </ButtonGroup>
        </HeroContent>
        <HeroImage>
          <img src="/app-mockup.png" alt="App mockup" />
        </HeroImage>
      </HeroSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  min-height: calc(100vh - 80px);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.lightText};
    margin-bottom: 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const AppStoreButton = styled.a`
  img {
    height: 40px;
  }
`;

const PlayStoreButton = styled.a`
  img {
    height: 40px;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default Home; 