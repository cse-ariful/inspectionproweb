import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaApple, FaChevronDown, FaCheck } from 'react-icons/fa';

const ModernHome = () => {
  const features = [
    "AI-Powered Documentation",
    "Professional Reports",
    "Real-time Sync",
    "Offline Support"
  ];

  return (
    <HomeSection id="home">
      <ContentWrapper>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Overline>AUDIT MASTER PRO</Overline>
            <HeroTitle>
              Transform Your <GradientText>Site Inspections</GradientText> With AI Power
            </HeroTitle>
            <HeroSubtitle>
              Streamline your audit process with our intelligent companion. Save time, improve accuracy, and deliver professional results.
            </HeroSubtitle>
            
            <FeatureList>
              {features.map((feature, index) => (
                <FeatureItem 
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                >
                  <FaCheck /> {feature}
                </FeatureItem>
              ))}
            </FeatureList>

            <CTAGroup>
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
              <Rating>
                <Stars>★★★★★</Stars>
                <RatingText>
                  <strong>4.9/5</strong> from 1,000+ reviews
                </RatingText>
              </Rating>
            </CTAGroup>
          </motion.div>
        </HeroContent>

        <HeroVisual>
          <PhoneFrame
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src={`${process.env.PUBLIC_URL}/home/landing_1.jpeg`} alt="Audit Master Pro Interface" />
            <BackgroundGlow />
          </PhoneFrame>
        </HeroVisual>
      </ContentWrapper>

      <ScrollIndicator
        onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
      >
        <FaChevronDown />
      </ScrollIndicator>
    </HomeSection>
  );
};

const HomeSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 120px 20px;
  overflow: hidden;
  background: ${({ theme }) => `linear-gradient(135deg, 
    ${theme.colors.background} 0%, 
    ${theme.colors.lightBackground} 100%)`
  };
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
  position: relative;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  z-index: 1;
`;

const Overline = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 2rem;
  max-width: 600px;
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const CTAGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const AppStoreButton = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;

  svg {
    font-size: 1.8rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const ButtonText = styled.div`
  display: flex;
  flex-direction: column;
  
  span {
    font-size: 0.7rem;
    opacity: 0.9;
  }
`;

const Rating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Stars = styled.div`
  color: #FFD700;
  font-size: 1.2rem;
  letter-spacing: 2px;
`;

const RatingText = styled.div`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 0.9rem;
`;

const HeroVisual = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PhoneFrame = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  border-radius: 40px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 0 25px 50px -12px ${({ theme }) => theme.colors.shadow};
  
  img {
    width: 100%;
    height: auto;
    border-radius: 30px;
    display: block;
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle,
    ${({ theme }) => `${theme.colors.primary}20`} 0%,
    transparent 70%
  );
  z-index: -1;
  pointer-events: none;
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
  font-size: 1.5rem;
  animation: bounce 2s infinite;
  margin-top: auto;
  z-index: 10;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export default ModernHome; 