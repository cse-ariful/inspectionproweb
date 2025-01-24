import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaApple, FaChevronDown } from 'react-icons/fa';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/home/landing_1.jpeg',
    '/home/landing_2.jpeg',
    '/home/landing_3.jpeg',
    '/home/landing_4.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

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
        <AnimatePresence mode='wait'>
          <CarouselImage
            key={currentImageIndex}
            as={motion.img}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            src={`${process.env.PUBLIC_URL}${images[currentImageIndex]}`}
            alt="Audit Master Pro Interface"
          />
        </AnimatePresence>
        <CarouselOverlay>
          <CarouselIndicators>
            {images.map((_, index) => (
              <Indicator 
                key={index} 
                active={index === currentImageIndex}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </CarouselIndicators>
        </CarouselOverlay>
      </HeroImageContainer>
      <ScrollIndicator
        onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
      >
        <FaChevronDown />
      </ScrollIndicator>
    </HomeSection>
  );
};

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
`;

const ScrollIndicator = styled.button`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  animation: ${floatAnimation} 2s ease-in-out infinite;
  transition: color 0.3s ease;

  svg {
    font-size: 24px;
    animation: ${fadeInOut} 2s ease-in-out infinite;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const HomeSection = styled.section`
  position: relative;
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
    gap: 30px;
  }
`;

const HeroContent = styled.div`
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    margin-bottom: 20px;
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
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &:before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    z-index: -2;
    border-radius: 14px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 1px;
    background: black;
    border-radius: 11px;
    z-index: -1;
  }

  svg {
    font-size: 2rem;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(37, 99, 235, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
    }
  }

  animation: pulse 2s infinite;

  &:hover {
    transform: translateY(-2px);
    &:before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ButtonText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  
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
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    padding-top: 56.25%;
    margin: 0 -20px;
    border-radius: 0;
  }
`;

const CarouselImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  aspect-ratio: 16/9;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 0;
    box-shadow: none;
  }
`;

const CarouselOverlay = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
  background: linear-gradient(
    to bottom,
    transparent 70%,
    rgba(0, 0, 0, 0.2)
  );
  aspect-ratio: 16/9;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 0;
  }
`;

const CarouselIndicators = styled.div`
  display: flex;
  gap: 8px;
  z-index: 2;
`;

const Indicator = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${({ active }) => 
    active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background: ${({ active }) => 
      active ? 'white' : 'rgba(255, 255, 255, 0.7)'};
  }
`;

export default Home; 