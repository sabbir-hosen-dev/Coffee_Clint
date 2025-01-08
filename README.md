# Coffee House - Client

## Project Overview

Coffee House is a web application built with React, Vite, and Tailwind CSS. The application allows users to explore a variety of coffee items, view detailed information about each, and interact with the coffee database. It offers a user-friendly interface for discovering coffees, along with features like adding or updating coffee details.

## Key Features

- **Coffee Details:** View detailed information about each coffee, including the name, chef, supplier, test, category, and more.
- **Responsive Design:** Fully optimized for both desktop and mobile views, providing a seamless user experience across devices.
- **Dynamic Coffee Categories:** The app displays coffee items categorized by attributes such as aroma, quality, and roasting techniques.
- **SweetAlert2 Integration:** Utilizes SweetAlert2 for attractive pop-up notifications to inform users when actions like updating a coffee are successful.
- **Interactive UI:** Features a smooth and modern user interface, with clickable elements, images, and responsive layouts.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web projects, used to enhance the development and production builds.
- **Tailwind CSS:** A utility-first CSS framework used for rapid custom styling and responsive designs.
- **DaisyUI:** A plugin for Tailwind CSS providing pre-styled UI components.
- **SweetAlert2:** A library for creating attractive and customizable alerts.
- **React Router DOM:** A routing library used to navigate between different pages within the application.
- **React Icons:** Provides scalable vector icons that are customizable in size and color.
- **React Fast Marquee:** A library for creating smooth scrolling marquee animations.

## Home Page

![Home Page](https://i.ibb.co.com/b1Jqk1G/coffee-house277-netlify-app.png)

## Project Structure

```
Coffee House/
├── src/
│   ├── components/   # React components
│   ├── pages/        # Application pages
│   ├── assets/       # Static assets
│   └── App.jsx       # Main application file
├── public/           # Public assets
├── package.json      # Project configuration
└── vite.config.js    # Vite configuration
```

## Package Configuration

```json
{
  "name": "Coffee House",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "moment": "^2.30.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-fast-marquee": "^1.6.5",
    "react-icons": "^5.3.0",
    "react-router-dom": "^7.0.1",
    "sweetalert2": "^11.14.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.14",
    "eslint": "^9.13.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.14",
    "vite": "^5.4.10"
  }
}
```

## Contribution

1. Fork the repository.
