import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    {
      name: "John Smith",
      role: "Construction Manager",
      company: "BuildTech Solutions",
      rating: 5,
      review: "Audit Master Pro has revolutionized how we conduct site inspections. The AI features and customizable templates save us hours of work every week."
    },
    {
      name: "Sarah Johnson",
      role: "Safety Inspector",
      company: "SafetyFirst Corp",
      rating: 5,
      review: "The best inspection app I've used. The ability to add multiple images per issue and annotate them on the go is incredibly useful."
    },
    {
      name: "Michael Chen",
      role: "Quality Assurance Manager",
      company: "Quality Plus",
      rating: 5,
      review: "This app has streamlined our entire QA process. The report customization options are exactly what we needed for professional documentation."
    },
    {
      name: "Emma Davis",
      role: "Property Inspector",
      company: "Real Estate Experts",
      rating: 5,
      review: "The offline functionality and automatic syncing are game-changers. I can work anywhere without worrying about connectivity issues."
    },
    {
      name: "David Wilson",
      role: "Site Supervisor",
      company: "Wilson Construction",
      rating: 5,
      review: "Voice-to-text feature is incredibly accurate and saves so much time. The ability to duplicate issues across projects is also very helpful."
    },
    {
      name: "Lisa Martinez",
      role: "Facility Manager",
      company: "Global Facilities Inc",
      rating: 5,
      review: "The report templates are professional and customizable. Our clients are always impressed with the quality of our inspection reports."
    },
    {
      name: "James Thompson",
      role: "Health & Safety Officer",
      company: "Safety Solutions Ltd",
      rating: 5,
      review: "Being able to add multiple images and annotations has greatly improved our documentation process. The app is intuitive and easy to use."
    },
    {
      name: "Rachel Kim",
      role: "Building Inspector",
      company: "City Council",
      rating: 5,
      review: "The project management features are excellent. I can easily track progress and manage multiple inspections simultaneously."
    }
  ];

  return (
    <ReviewsSection id="reviews">
      <SectionTitle>
        <GradientText>What Our Users Say</GradientText>
        <SubTitle>Trusted by professionals worldwide</SubTitle>
      </SectionTitle>
      <ReviewsContainer>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              as={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2
              }}
            >
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              <ReviewText>{review.review}</ReviewText>
              <Rating>
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Rating>
              <ReviewerInfo>
                <ReviewerName>{review.name}</ReviewerName>
                <ReviewerRole>{review.role}</ReviewerRole>
                <ReviewerCompany>{review.company}</ReviewerCompany>
              </ReviewerInfo>
            </ReviewCard>
          ))}
        </motion.div>
      </ReviewsContainer>
    </ReviewsSection>
  );
};

const ReviewsSection = styled.section`
  padding: 100px 0 20px;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
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

const ReviewsContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    display: flex;
    gap: 30px;
    padding: 20px 40px;
    min-width: min-content;
  }
`;

const ReviewCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-width: 350px;
  max-width: 350px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 300px;
    max-width: 300px;
  }
`;

const QuoteIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.1;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ReviewText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 1.1rem;
  min-height: 80px;
`;

const Rating = styled.div`
  color: #ffc107;
  margin-bottom: 20px;
  display: flex;
  gap: 5px;
`;

const ReviewerInfo = styled.div`
  border-top: 1px solid ${({ theme }) => `${theme.colors.primary}20`};
  padding-top: 20px;
`;

const ReviewerName = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
`;

const ReviewerRole = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3px;
`;

const ReviewerCompany = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

export default Reviews;