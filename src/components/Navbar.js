import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    setIsOpen(false);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo onClick={() => scrollToSection('home')}>
          <img src={`${process.env.PUBLIC_URL}/appicon.webp`} alt="Audit Master" />
          <span>Audit Master</span>
        </Logo>
        <MenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <NavMenu isOpen={isOpen}>
          <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
          <NavLink onClick={() => scrollToSection('benefits')}>Key Benefits</NavLink>
          <NavLink onClick={() => scrollToSection('industries')}>Industries</NavLink>
          <NavLink onClick={() => scrollToSection('features')}>Features</NavLink>
          <NavLink onClick={() => scrollToSection('reviews')}>Reviews</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  background: ${({ scrolled, theme }) => 
    scrolled 
      ? theme.colors.cardBackground
      : 'transparent'};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ scrolled, theme }) => 
    scrolled ? `0 2px 10px ${theme.colors.shadow}` : 'none'};
  border-bottom: ${({ scrolled, theme }) => 
    scrolled ? `1px solid ${theme.colors.border}` : 'none'};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    img {
      width: 28px;
      height: 28px;
    }
    span {
      font-size: 1.3rem;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    font-size: 1.8rem;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.cardBackground};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: 2rem;
    box-shadow: 0 2px 10px ${({ theme }) => theme.colors.shadow};
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Navbar;