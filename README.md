# GameGear Customz

GameGear Customz is a landing page for customized gaming accessories, designed to provide gamers with personalized gear to enhance their gaming experience. Built using React, Tailwind CSS, and Vite, this project offers a fast, interactive, and responsive user experience.

## Table of Contents

- [Features](#features)
- [What I Learned](#what-i-learned)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running Locally](#running-locally)
- [Acknowledgments](#acknowledgments)

## Features

- **Responsive Design:** Fully optimized for desktop and mobile screens.
- **Customizable Components:** Modular design for easy updates and new features.
- **Optimized Performance:** Leverages Vite's fast build process and Tailwind's utility-first CSS.

## What I Learned

- **React:** Building reusable, dynamic components.
- **Tailwind CSS:** Creating beautiful designs with utility-first CSS.
- **Vite:** Setting up and optimizing a project with modern tooling.
- **Deployment:** Preparing a production-ready build for hosting.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js) or yarn (optional)
- A code editor like [VS Code](https://code.visualstudio.com/)
- A browser extension or plugin to run a local development server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer))

### Running Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/gamegear-customz.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd gamegear-customz
   ```

3. **Install project dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

4. **Set up Tailwind CSS (already configured)**:

   - Ensure `tailwind.config.js` exists with proper paths under `content`.
   - Verify `src/index.css` contains:

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

5. **Start the development server**:

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

6. **Open the application**:

   Once the server starts, open your browser and navigate to the URL provided in the terminal (usually `http://localhost:3000`).

7. **Build for Production** (Optional):

   To create an optimized production build, run:

   ```bash
   npm run build
   ```

8. **Preview the Production Build** (Optional):

   Test the production build locally:

   ```bash
   npm run preview
   ```

## Acknowledgments

- **React:** [reactjs.org](https://reactjs.org/)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com/)
- **Vite:** [vitejs.dev](https://vitejs.dev/)

