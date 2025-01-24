import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: "AI-Powered Voice-to-Text",
      description: "Document inspections hands-free with our advanced AI voice-to-text technology, making site audits faster and more efficient than ever.",
      image: "https://picsum.photos/390/844?random=1",
      align: "left"
    },
    {
      title: "Customizable Templates",
      description: "Choose from 10+ professional templates with complete branding options including custom colors, logos, and cover images to match your brand identity.",
      image: "https://picsum.photos/390/844?random=2",
      align: "right"
    },
    {
      title: "Smart Project Management",
      description: "Efficiently manage your audits with features like bulk project operations, issue duplication, and seamless task management across projects.",
      image: "https://picsum.photos/390/844?random=3",
      align: "left"
    },
    {
      title: "Advanced Image Tools",
      description: "Enhance your reports with multiple images per issue, GPS tracking, time stamps, and professional annotation tools for comprehensive documentation.",
      image: "https://picsum.photos/390/844?random=4",
      align: "right"
    }
  ];

  return (
    <FeaturesSection id="features">
      <SectionTitle>
        <GradientText>Professional Tools You'll Love</GradientText>
        <SubTitle>Designed for modern audit professionals</SubTitle>
      </SectionTitle>
      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            align={feature.align}
          >
            <FeatureContent align={feature.align}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureContent>
            <FeatureImageWrapper align={feature.align}>
              <FeatureImage 
                src={feature.image} 
                alt={feature.title}
                as={motion.img}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </FeatureImageWrapper>
          </FeatureItem>
        ))}
      </FeaturesList>
    </FeaturesSection>
  );
};

const FeaturesSection = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.lightBackground};
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const GradientText = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

const FeaturesList = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ align }) => align === 'right' ? 'row-reverse' : 'row'};
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
  text-align: ${({ align }) => align};
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align === 'right' ? 'flex-end' : 'flex-start'};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    align-items: center;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.lightText};
  margin-top: 30px;
`;

const FeatureImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${({ align }) => align === 'right' ? 'flex-start' : 'flex-end'};
  padding: 20px;
  max-width: 390px;
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 390/844;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
`;

export default Features; 