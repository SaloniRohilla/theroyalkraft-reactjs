import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;

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
            color: #B200B2 ;
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
  `;

  return (
    <Nav>
      <div className='menuIcon'>
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
      </div>
      <NavLink className='get-in-touch' to='/contact'>Get in Touch!</NavLink>
    </Nav>
  );
};

export default Navbar;
