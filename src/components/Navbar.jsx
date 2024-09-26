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

    .menuIcon {
      display: none; /* Hidden by default */

      /* Style for the hamburger icon */
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

    .get-in-touch {
      background-color: #B200B2;
      max-width: 12rem;
      color: white;
      padding: 0.8rem 2.1rem;
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: bold;
      border-radius: 4px;
      transition: background-color 0.3s linear;
      margin-left: 3rem;
      white-space: nowrap;

      &:hover {
        background-color: ${({ theme }) => theme.colors.black};
      }
    }

    @media (max-width: 768px) {
      .navbar-list {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Show or hide links */
        flex-direction: column; /* Stack links vertically */
        position: absolute;
        background-color: white; /* Set background for dropdown */
        top: 100%; /* Position it below the navbar */
        left: 0;
        width: 100%; /* Full width */
        z-index: 2; /* Ensure it is above other content */
      }

      .menuIcon {
        display: flex; /* Show the hamburger icon on small screens */
        flex-direction: column;
        cursor: pointer;

        /* Change hamburger icon when menu is open */
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

  // Toggle menu open/close
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
            <NavLink to='/fiber-Stage'>Fiber Stage</NavLink>
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
      </ul>
      <NavLink className='get-in-touch' to='/contact'>Get in Touch!</NavLink>
    </Nav>
  );
};

export default Navbar;
