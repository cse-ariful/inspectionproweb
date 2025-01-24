import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get started with the app?",
      answer: "Simply download the app from your device's app store, create an account, and follow the quick onboarding tutorial."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect all your data."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial with access to all premium features."
    },
    {
      question: "Can I use the app offline?",
      answer: "Yes, most features work offline and sync automatically when you're back online."
    }
  ];

  return (
    <FAQSection id="faq">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQContainer>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <QuestionButton
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              isActive={activeIndex === index}
            >
              <span>{faq.question}</span>
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </QuestionButton>
            <AnimatePresence>
              {activeIndex === index && (
                <Answer
                  as={motion.div}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </Answer>
              )}
            </AnimatePresence>
          </FAQItem>
        ))}
      </FAQContainer>
    </FAQSection>
  );
};

const FAQSection = styled.section`
  padding: 100px 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.text};
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const QuestionButton = styled.button`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.colors.lightBackground};
  }
`;

const Answer = styled.div`
  padding: 0 20px 20px;
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`;

export default FAQ; 