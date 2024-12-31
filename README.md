My Portfolio
A responsive personal portfolio website showcasing projects, skills, and contact information. The site is built with React and designed for smooth user experience with features like multi-language support and project carousels.

Features
Multi-Language Support: Switch between English and Korean.
Project Carousel: Displays featured projects with clickable links and images.
Responsive Design: Optimized for various screen sizes.
Contact Section: Includes links to GitHub and other platforms.
Demo
Check out the live demo here.

Built With
React: Frontend framework for building the UI.
React-Slick: Carousel/slider library for showcasing projects.
Tailwind CSS: For styling and responsive design.
React Scroll: Smooth scrolling for navigation.
Installation
Prerequisites
Node.js installed on your machine.
Steps
Clone the repository:
git clone https://github.com/latatui/my_portfolio.git
cd my_portfolio
Install dependencies:
npm install
Run the development server:
npm start
Open the browser and navigate to http://localhost:3000.
Project Structure
my_portfolio/
├── public/
│   ├── project_pp.png
│   ├── github_icon.png
│   ├── kmong_icon.png
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Projects.js
│   │   └── ...
│   ├── App.js
│   └── ...
├── package.json
└── README.md
How to Add a New Project
Add your project's details in the projects array inside Projects.js:
{
  title: isEnglish ? 'New Project' : '새 프로젝트',
  description: isEnglish ? 'This is a new project.' : '이것은 새로운 프로젝트입니다.',
  image: `${process.env.PUBLIC_URL}/new_project.png`,
  link: 'https://github.com/latatui/new_project',
  id: 5,
},
Place the project image in the public folder.
Deployment
The project is deployed using GitHub Pages.

Deploy Steps
Build the project:
npm run build
Deploy to GitHub Pages:
npm run deploy
Ensure the homepage field in package.json is set to your repository URL, like:

"homepage": "https://latatui.github.io/my_portfolio"
License
This project is open-source and available under the MIT License.

Feel free to reach out if you encounter any issues or have feature suggestions! 😊
