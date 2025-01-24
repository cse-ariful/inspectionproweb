import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMagic, FaRocket, FaRegCopy, FaImages, FaPalette } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaMagic />,
      title: "AI-Powered Efficiency",
      features: [
        "Voice-to-text documentation",
        "Smart issue categorization",
        "Automated report generation"
      ]
    },
    {
      icon: <FaPalette />,
      title: "Complete Customization",
      features: [
        "10+ professional templates",
        "Custom branding options",
        "Flexible report layouts"
      ]
    },
    {
      icon: <FaRegCopy />,
      title: "Smart Management",
      features: [
        "Bulk project operations",
        "Issue duplication",
        "Project sharing"
      ]
    },
    {
      icon: <FaImages />,
      title: "Advanced Imaging",
      features: [
        "Multiple images per issue",
        "GPS & time stamps",
        "Professional annotations"
      ]
    },
    {
      icon: <FaRocket />,
      title: "Powerful Features",
      features: [
        "Offline functionality",
        "Real-time synchronization",
        "Secure data storage"
      ]
    }
  ];

  return (
    <BenefitsSection id="benefits">
      <SectionTitle>
        <GradientText>Key Benefits</GradientText>
        <SubTitle>Everything you need for professional auditing</SubTitle>
      </SectionTitle>
      <BenefitsContainer>
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <IconWrapper>{benefit.icon}</IconWrapper>
            <BenefitTitle>{benefit.title}</BenefitTitle>
            <FeatureList>
              {benefit.features.map((feature, idx) => (
                <FeatureItem key={idx}>{feature}</FeatureItem>
              ))}
            </FeatureList>
          </BenefitCard>
        ))}
      </BenefitsContainer>
    </BenefitsSection>
  );
};

const BenefitsSection = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.lightBackground};
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
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

const BenefitsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const BenefitCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;

  &:before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
  }
`;

export default Benefits; 