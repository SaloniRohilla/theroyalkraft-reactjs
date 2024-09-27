import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: relative;
    z-index: 2000;

    .menuIcon {
      display: none;

      .hamburger {
        width: 30px;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.black};
        margin: 6px 0;
        transition: 0.4s;
      }
    }

    .navbar-list {
      display: flex;
      gap: 2rem;

      li {
        list-style: none;
        position: relative;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.6rem;
            font-weight: bold;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: #B200B2;
          }

          .arrow {
            margin-left: 5px;
            font-size: 1rem;
            transition: transform 0.3s;
          }
        }

        &:hover .navbar-link .arrow {
          transform: rotate(180deg);
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: white;
          min-width: 160px;
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          z-index: 1;

          a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            text-align: left;

            &:hover {
              background-color: #B200B2;
            }
          }
        }

        &:hover .dropdown-content {
          display: block;
        }
      }
    }

    .send-inquiry {
      background-color: #B200B2;
      max-width: 12rem;
      color: white;
      padding: 0.8rem 0.5rem;
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: bold;
      border-radius: 4px;
      transition: background-color 0.3s linear;
      margin-left: 2rem;
      white-space: nowrap;

      &:hover {
        background-color: ${({ theme }) => theme.colors.black};
      }
    }

    @media (max-width: 768px) {
      .navbar-list {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        background-color: white;
        top: 100%;
        left: 0;
        width: 100%;
        z-index: 2;
      }

      .menuIcon {
        display: flex;
        flex-direction: column;
        cursor: pointer;

        .hamburger:nth-child(1) {
          transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none')};
        }
        .hamburger:nth-child(2) {
          opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
        }
        .hamburger:nth-child(3) {
          transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none')};
        }
      }
    }
  `;

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <Nav isOpen={isMenuOpen}>
      <div className="menuIcon" onClick={toggleMenu}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
      <ul className='navbar-list'>
        <li>
          <NavLink className='navbar-link' to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink className='navbar-link' to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink className='navbar-link' to='/blog'>Blog</NavLink>
        </li>
        <li>
          <NavLink className='navbar-link' to='/products'>
            Products <span className="arrow">▼</span>
          </NavLink>
          <div className="dropdown-content">
            <NavLink to='/exterior'>Exterior</NavLink>
            <NavLink to='/gates'>Fiber Entrance Gates</NavLink>
            <NavLink to='/fiber-mandaps'>Fiber Mandaps</NavLink>
            <NavLink to='/fiber-work'>Fiber Work</NavLink>
            <NavLink to='/fiber-stage'>Fiber Stage</NavLink>
            <NavLink to='/fountain'>Fountain</NavLink>
            <NavLink to='/gazebo'>Gazebo</NavLink>
            <NavLink to='/interior'>Interior</NavLink>
            <NavLink to='/wedding-decoration'>Wedding Decoration</NavLink>
          </div>
        </li>
        <li>
          <NavLink className='navbar-link' to='/services'>
            Services <span className="arrow">▼</span>
          </NavLink>
          <div className="dropdown-content">
            <NavLink to='/airconditioning'>Air conditioning</NavLink>
            <NavLink to='/architecturallayout'>Architectural layout</NavLink>
            <NavLink to='/electricallighting'>Electrical lighting</NavLink>
            <NavLink to='/firefighting'>Fire Fighting</NavLink>
            <NavLink to='/mep'>MEP (Mechanical Electrical and Plumbing)</NavLink>
            <NavLink to='/stp'>STP (Sewage Treatment Plants)</NavLink>
          </div>
        </li>
        <li>
          <NavLink className='navbar-link' to='/contact'>Contact Us</NavLink>
        </li>
      </ul>
      <a className='send-inquiry' href='https://docs.google.com/forms/d/1kM-qMDi-2dt3MQSJ0Q7mQXQ-3oLpzZfbdJkZPGzyWRs/edit' target='_blank' rel='noopener noreferrer'>Send Inquiry Now</a>
    </Nav>
  );
};

export default Navbar;
