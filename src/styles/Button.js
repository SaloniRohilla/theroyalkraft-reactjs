import styled from "styled-components";

export const Button = styled.button`
  position: absolute; /* Absolute positioning */
  top: 10rem; /* Distance from the top */
  right: 1rem; /* Distance from the right */
  text-decoration: none;
  max-width: 8rem; /* Reduced width */
  max-height: 3rem; /* Reduced height */
  background-color: #006DB5;
  color: rgb(255, 255, 255);
  padding: 0.8rem 1.6rem; /* Adjusted padding to make the button smaller */
  border: none;
  border-radius: 5px; /* Added border-radius for better appearance */
  text-transform: uppercase;
  text-align: center;
  font-size: 1rem; /* Reduced font size */
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    box-shadow: 0 0.5rem 1rem 0 rgb(132, 144, 255 / 30%);
    transform: scale(0.98);
  }

  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 1rem; /* Ensure link font size matches button */
  }
`;
