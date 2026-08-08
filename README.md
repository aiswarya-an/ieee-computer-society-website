# IEEE Computer Society SBC — NSSCE

A modern, interactive website designed for the **IEEE Computer Society Student Branch Chapter (SBC) at NSS College of Engineering, Palakkad**.

The website presents the chapter's activities, events, projects, community, and opportunities for students to learn, build, and connect.

## Features

- Modern responsive landing page
- IEEE Computer Society themed design
- Smooth scrolling navigation
- Interactive navigation bar
- Responsive mobile menu
- Scroll-based reveal animations
- Animated hero section
- Interactive hover effects
- Technology/project marquee
- Animated project showcase
- Events and activities section
- Community section
- Call-to-action section
- Responsive design for desktop, tablet, and mobile

## Tech Stack

- **React.js** — UI development
- **Vite** — Development and build tool
- **JavaScript (ES6+)** — Application logic
- **CSS3** — Styling, animations, and responsive design
- **Lucide React** — Icons
- **Google Fonts** — Typography

## Design

The website uses a dark, technology-focused visual style with a maroon and red color palette.

### Color Palette

| Color | Hex |
|---|---|
| Dark Maroon | `#420516` |
| Maroon | `#7D1935` |
| Crimson | `#B42B51` |
| Accent Red | `#E63E6D` |

The design combines:

- Bold typography
- Minimal layouts
- Glowing accents
- Grid patterns
- Orbital animations
- Interactive cards
- Smooth transitions

## Project Structure

```text
ieee-computer-society-website/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Getting Started

Follow the steps below to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v18 or later recommended)
- npm (comes with Node.js)
- Git
- Visual Studio Code (recommended)

You can verify the installations using:

```bash
node --version
npm --version
git --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/aiswarya-an/ieee-computer-society-website.git
```

### 2. Navigate to the Project Directory

```bash
cd ieee-computer-society-website
```

### 3. Install Dependencies

Install the required project dependencies:

```bash
npm install
```

### 4. Start the Development Server

Run the following command:

```bash
npm run dev
```

Vite will start the development server and provide a local URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser to view the website.

### 5. Build for Production

To create an optimized production build:

```bash
npm run build
```

The production files will be generated inside the `dist/` directory.

### 6. Preview the Production Build

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run preview` | Preview the production build |

## Updating the Project

After making changes to the project, use the following commands to update the GitHub repository:

```bash
git status
git add .
git commit -m "Update website"
git push
```

## Deployment

The project can be deployed using platforms such as **Vercel** or **Netlify**.

Before deployment, make sure the production build completes successfully:

```bash
npm run build
```

## Notes

- Do not commit the `node_modules/` folder.
- Do not commit sensitive credentials or environment variables.
- The `.gitignore` file is included to prevent unnecessary files from being uploaded.
- Run `npm install` after cloning the repository.
- Use `npm run dev` to start local development.

## License

This project was developed for the **IEEE Computer Society Student Branch Chapter, NSS College of Engineering, Palakkad**.
