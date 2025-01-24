import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHardHat, FaClipboardCheck, FaBuilding, FaTools, FaHome, FaShieldAlt } from 'react-icons/fa';

const Industries = () => {
  const industries = [
    {
      icon: <FaHardHat />,
      title: "Construction Site Audits",
      description: "Comprehensive site inspections and safety compliance checks"
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety Inspections",
      description: "Detailed safety assessments and hazard identification"
    },
    {
      icon: <FaBuilding />,
      title: "Property Assessments",
      description: "Thorough property condition reports and evaluations"
    },
    {
      icon: <FaTools />,
      title: "Maintenance Reports",
      description: "Detailed maintenance tracking and scheduling"
    },
    {
      icon: <FaClipboardCheck />,
      title: "Quality Assurance",
      description: "Comprehensive quality control and compliance checks"
    },
    {
      icon: <FaHome />,
      title: "Punch & Snag Lists",
      description: "Detailed defect tracking and resolution management"
    }
  ];

  return (
    <IndustriesSection id="industries">
      <SectionTitle>
        <GradientText>Perfect for Every Industry</GradientText>
        <SubTitle>Trusted by professionals across various sectors</SubTitle>
      </SectionTitle>
      <IndustriesGrid>
        {industries.map((industry, index) => (
          <IndustryCard
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.2
            }}
            whileHover={{ y: -10 }}
          >
            <IconWrapper>{industry.icon}</IconWrapper>
            <CardTitle>{industry.title}</CardTitle>
            <CardDescription>{industry.description}</CardDescription>
          </IndustryCard>
        ))}
      </IndustriesGrid>
    </IndustriesSection>
  );
};

const IndustriesSection = styled.section`
  padding: 100px 20px;
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

const IndustriesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const IndustryCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`;

export default Industries; 