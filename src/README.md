# The Royal Kraft React Website

The Royal Kraft website is a comprehensive platform showcasing a wide range of fiber decor, interior designs, and structural design services for weddings and events. Developed using React, Vite, styled-components, and react-router-dom, this site includes various product and service pages with detailed descriptions and animations to enhance the user experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Customization](#customization)
- [License](#license)

## Features

- **Home Page with Animations**: Includes an engaging homepage with smooth animations and a welcoming layout.
- **Comprehensive Products Section**: Showcases various fiber decor items with multiple product categories and subcategories.
- **Extensive Services Section**: Details a variety of banquet hall services, such as electrical lighting, fire fighting, air conditioning, mechanical and plumbing (MEP), and sewage treatment.
- **Responsive Design**: Optimized for seamless viewing on both desktop and mobile devices.
- **Content Management with Contentful**: Blog content is dynamically managed via Contentful and displayed on the website.
- **Fast Development with Vite**: Leveraging Vite for a faster development experience and hot module reloading.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SaloniRohilla/theroyalkraft-reactjs.git
   cd theroyalkraft-reactjs

2. Install dependencies:
   npm install

3. Run the development server using Vite:
   npm run dev

4. Open http://localhost:5173 to view the website.


USAGE---

This website uses React for the frontend, Vite for fast bundling and   development, react-router-dom for navigation, and styled-components for styling. It includes the following main pages:

1. Home Page: Features an animated header, hero section, and highlights key services and products.

2. About Us: Details the story of The Royal Kraft, its mission, and values.

3. Products: A categorized gallery showcasing various fiber decor products, including Fiber Gates, Fiber Entrance Gates, Fiber Mandaps, and more. 

4. Services: Comprehensive descriptions of banquet hall services such as Electrical Lighting, Fire Fighting, Air Conditioning, MEP, and STP.

5. Contact Us: A contact form for inquiries and engagement with potential clients.

6. Blog: A section that pulls content dynamically from Contentful, displaying articles related to event aesthetics and decor.

Project Structure

theroyalkraft-reactjs/
├── public/
│   ├── images/                  # Contains static images used in the project
│   └── favicon.ico
├── src/
│   ├── assets/                  # Static assets like images and icons
│   ├── components/              # Reusable components (Navbar, Footer, etc.)
│   ├── pages/
│   │   ├── Home.jsx             # Homepage component
│   │   ├── About.jsx            # About Us page
│   │   ├── Products/            # Product-related pages (e.g., Gates, Mandaps, etc.)
│   │   ├── Services/            # Service-related pages (ElectricalLighting, MEP, etc.)
│   │   └── Contact.jsx          # Contact Us page
│   ├── styles/                  # CSS files for styling
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Entry point for the application
│   └── vite.config.js           # Vite configuration
├── .gitignore
├── package.json
└── README.md

Tech Stack

1. React: JavaScript library for building the user interface.
2. Vite: Build tool that serves and bundles the application.
3. Styled-components: CSS-in-JS for component-level styling.
4. React Router: For handling navigation and routing between pages.
5. Contentful: Content Management System for managing and delivering  blog content.
6. ESLint and Prettier: For code quality and consistent formatting.


Customization

1. Components: Modify the components directory to update reusable elements like the Navbar, Footer, and other shared UI components.

2. Product and Service Pages: The pages/Products and pages/Services directories contain individual pages for each product and service category. Adjust these to add or remove items as needed.

3. Styling: Update styles in the src/styles directory to customize the look and feel of each page.

4. Blog Content: Managed through Contentful; refer to Contentful's API to update content on the blog page.