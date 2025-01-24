import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: "Efficient Project Management",
      description: "Organize and manage all your inspection projects in one place. View project status, deadlines, and important details at a glance.",
      image: "/images/project_list.png",
      align: "left"
    },
    {
      title: "Detailed Project Information",
      description: "Access comprehensive project details including client information, site data, and project progress with our intuitive dark mode interface.",
      image: "/images/project_details_dark.png",
      align: "right"
    },
    {
      title: "Comprehensive Issue Tracking",
      description: "Document and track issues with detailed descriptions, categories, and status updates. Keep everything organized and easily accessible.",
      image: "/images/issue_details.png",
      align: "left"
    },
    {
      title: "Multiple Images Per Issue",
      description: "Add multiple images to each issue to provide complete visual documentation. Perfect for showing before/after scenarios or different angles.",
      image: "/images/multiple_image_in_issue.png",
      align: "right"
    },
    {
      title: "Advanced Image Annotation",
      description: "Highlight problems, add measurements, and provide clear visual feedback with our powerful annotation tools.",
      image: "/images/annotating_image.png",
      align: "left"
    },
    {
      title: "Customizable Report Templates",
      description: "Choose from a variety of professional report templates that can be customized to match your brand identity.",
      image: "/images/report_templates.png",
      align: "right"
    },
    {
      title: "Modern Report Design",
      description: "Generate polished, professional reports that present your findings clearly and effectively.",
      image: "/images/modern_report_preview.png",
      align: "left"
    },
    {
      title: "Flexible Report Customization",
      description: "Fine-tune every aspect of your reports with our comprehensive customization settings.",
      image: "/images/report_customize_settings.png",
      align: "right"
    },
    {
      title: "Project Options & Settings",
      description: "Access additional project features including bulk operations, sharing options, and advanced settings.",
      image: "/images/project_list_options.png",
      align: "left"
    },
    {
      title: "Identity Management",
      description: "Customize identifier settings and manage project metadata for better organization and tracking.",
      image: "/images/identifier_settings.png",
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
            align={feature.align}
          >
            <FeatureContent align={feature.align}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureContent>
            <FeatureImageWrapper align={feature.align}>
              <FeatureImage 
                src={`${process.env.PUBLIC_URL}${feature.image}`} 
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
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: ${({ align }) => align === 'right' ? 'row-reverse' : 'row'};
  align-items: center;
  gap: 25px;
  padding: 25px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
  text-align: ${({ align }) => align === 'right' ? 'right' : 'left'};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: ${({ align }) => align === 'right' ? 'auto' : '0'};
    right: ${({ align }) => align === 'right' ? '0' : 'auto'};
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: 50%;
      right: auto;
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
  flex: 0.8;
  max-width: 200px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 180px;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 390/844;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.05),
    0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 6px 8px rgba(0, 0, 0, 0.05),
      0 15px 30px rgba(0, 0, 0, 0.12);
  }
`;

export default Features; 