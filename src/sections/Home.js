import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaApple, FaChevronDown } from 'react-icons/fa';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const images = [
    '/home/landing_1.jpeg',
    '/home/landing_2.jpeg',
    '/home/landing_3.jpeg',
    '/home/landing_4.jpeg'
  ];

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadImage = (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = `${process.env.PUBLIC_URL}${src}`;
          img.onload = resolve;
          img.onerror = reject;
        });
      };

      try {
        await Promise.all(images.map(loadImage));
        setImagesLoaded(true);
      } catch (err) {
        console.error('Error preloading images:', err);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, []);

  // Start slideshow only after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [imagesLoaded]);

  // Show loading state until images are ready
  if (!imagesLoaded) {
    return (
      <HomeSection id="home">
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      </HomeSection>
    );
  }

  return (
    <HomeSection id="home">
      <BackgroundSlider>
        <AnimatePresence mode='wait'>
          <BackgroundImage
            key={currentImageIndex}
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            $imageUrl={`${process.env.PUBLIC_URL}${images[currentImageIndex]}`}
          />
        </AnimatePresence>
        <Overlay />
      </BackgroundSlider>
      
      <ContentWrapper>
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
        
        <CarouselIndicators>
          {images.map((_, index) => (
            <Indicator 
              key={index} 
              active={index === currentImageIndex}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </CarouselIndicators>
      </ContentWrapper>

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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BackgroundSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  will-change: transform, opacity;
  transform: translateZ(0);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 40px;
`;

const HeroContent = styled.div`
  max-width: 600px;
  color: white;
  margin-top: 80px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    margin: 40px auto 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
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
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto 1.5rem auto;
  }
`;

const CarouselIndicators = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: auto;
  padding: 20px 0;
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

const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.colors.lightBackground};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Home; 