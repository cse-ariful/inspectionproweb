import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          AppName
        </Logo>
        <MenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <NavMenu isOpen={isOpen}>
          <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
          <NavLink onClick={() => scrollToSection('features')}>Features</NavLink>
          <NavLink onClick={() => scrollToSection('benefits')}>Benefits</NavLink>
          <NavLink onClick={() => scrollToSection('industries')}>Industries</NavLink>
          <NavLink onClick={() => scrollToSection('faq')}>FAQ</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  background: ${({ scrolled, theme }) => scrolled ? theme.colors.background : 'transparent'};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ scrolled }) => scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

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
    background: ${({ theme }) => theme.colors.background};
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

export default Navbar; 