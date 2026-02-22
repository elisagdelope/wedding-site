## Invitation Web App

This project is a web app built with React and Vite.

### Local Development

**Prerequisites:** Node.js and npm

1. Install dependencies:
   npm install
2. Start the development server:
   npm run dev
3. Open your browser at the URL shown in the terminal (usually http://localhost:5173).

### Build for Production

To generate the production build:

npm run build

The output will be in the dist folder.

### Deploy

You can deploy the contents of the dist folder to any static hosting service, such as Netlify, Vercel, or GitHub Pages.

#### Netlify
1. Push your project to a Git repository (GitHub, GitLab, etc).
2. Connect your repository in Netlify and set:
   - Build command: npm run build
   - Publish directory: dist
3. Netlify will build and deploy automatically on every push.

#### GitHub Pages
1. Build the project (npm run build).
2. Use a tool like gh-pages to publish the dist folder.

---
Feel free to modify this README as your project evolves.
