import {
  faHtml5,
  faSass,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faBootstrap,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';

import {
  SiTypescript,
  SiMongodb,
  SiVercel,
  SiVisualstudiocode,
  SiBulma,
  SiRedux,
  SiStyledcomponents,
  SiMaterialui,
} from 'react-icons/si';

// import Admin from '../assets/images/admin.png';
import Github from '../assets/images/github_user.png';
import Job from '../assets/images/jobster.png';
import Cell from '../assets/images/cell.png';
// import Movie from '../assets/images/Movie.png';
// import MtgSearch from '../assets/images/mtgsearch.png';
// import CounterImage from '../assets/images/Mtg.png';
import Mwd from '../assets/images/mwd_store.png';
// import ImagePortV2 from '../assets/images/portfolio-v2.png';
import Bar from '../assets/images/smakus.png';
// import Yelp from '../assets/images/YelpCamp.png';
import Geritch from '../assets/images/gericht.png';
import Comfy from '../assets/images/comfy.png';
import RMDB from '../assets/images/rmdb.png';
import Blog from '../assets/images/blog.png';
// import WolfAI from '../assets/images/wolfai.png';

export const fontsAwesomeIcons = [
  {
    id: 1,
    className: 'javascript',
    icon: faJsSquare,
    color: '#f0db4f',
  },
  {
    id: 2,
    className: 'react',
    icon: faReact,
    color: '#61dbfb',
  },
  {
    id: 3,
    className: 'css',
    icon: faCss3,
    color: '#e34c26',
  },
  {
    id: 4,
    className: 'html',
    icon: faHtml5,
    color: '#e34c26',
  },
  {
    id: 5,
    className: 'sass',
    icon: faSass,
    color: '#cd6799',
  },
  {
    id: 6,
    className: 'node',
    icon: faNodeJs,
    color: '#3c873a',
  },
  {
    id: 7,
    className: 'gitHub',
    icon: faGithub,
    color: 'hsl(0 0% 100%)',
  },
  {
    id: 8,
    className: 'bootstrap',
    icon: faBootstrap,
    color: '#563d7c',
  },
  {
    id: 9,
    className: 'npm',
    icon: faNpm,
    color: '#cc3534',
  },
  {
    id: 10,
    className: 'git',
    icon: faGitAlt,
    color: '#f1502f',
  },
];

export const reactIcons = [
  {
    id: 1,
    className: 'typescript',
    icon: <SiTypescript color="#007acc" />,
  },
  {
    id: 2,
    className: 'redux',
    icon: <SiRedux color="#764abc" />,
  },
  {
    id: 3,
    className: 'bulma',
    icon: <SiBulma color="#00d1b2" />,
  },
  {
    id: 4,
    className: 'mongoDb',
    icon: <SiMongodb color="#4db33d" />,
  },
  {
    id: 5,
    className: 'mui',
    icon: <SiMaterialui color="#3498db" />,
  },
  {
    id: 6,
    className: 'styled',
    icon: <SiStyledcomponents color="#f0db4f" />,
  },
  {
    id: 7,
    className: 'code',
    icon: <SiVisualstudiocode color="#0078d7" />,
  },
  {
    id: 8,
    className: 'vercel',
    icon: <SiVercel color="hsl(0 0% 100%)" />,
  },
];

export const projectsData = [
  {
    id: 1,
    type: 'FULLSTACK DEVELOPER',
    projectName: 'Wolfpad 2.0',
    text: 'Wolfpad is a powerful tool for developers of all levels. It provides an intuitive and user-friendly interface that allows users to quickly create, edit, and debug code. With an interactive coding environment, users can easily test their code in real-time and get immediate feedback on their progress.',
    items: [],
    skills: [
      'NextJS',
      'React',
      'Typescript',
      'Redux/Tollkit',
      'OpenAI-Chatbot',
      'Esbuild',
      'MongoDb',
      'Next-Auth',
      'Lexical Editor',
      'Excalidraw',
    ],
    content: 'View project',
    url: 'https://wolfpad.vercel.app/',
    linkUrl: 'https://github.com/wujekbizon/next-wolfpad',
    linkContent: 'Github Code',
    imgSrc: Cell,
  },
  {
    id: 2,
    type: 'FULLSTACK DEVELOPER',
    projectName: "Greg' Blog",
    text: "My personal blog, where I share anything that may help others , technologies I'm using and cool things I've made. ",
    items: [],
    skills: ['NextJS', 'React', 'Typescript', 'MongoDB', 'React-Markdown'],
    content: 'View project',
    url: 'https://grzegorz-wolfinger-blog.vercel.app/',
    linkUrl: 'https://github.com/wujekbizon/nextjs-blog',
    linkContent: 'Github Code',
    imgSrc: Blog,
  },
  {
    id: 3,
    type: 'FULLSTACK DEVELOPER',
    projectName: 'RMDB',
    text: 'Movie Search App',
    items: [],
    skills: [
      'NextJS',
      'React',
      'Typescript',
      'React-Query',
      'Tailwind CSS',
      'API',
    ],
    content: 'View project',
    url: 'https://rmdb-gw.vercel.app/',
    linkUrl: 'https://github.com/wujekbizon/react-rmdb',
    linkContent: 'Github Code',
    imgSrc: RMDB,
  },
  {
    id: 4,
    type: 'FRONT END DEVELOPER',
    projectName: 'Comfy',
    text: 'Fully Functional E-Commerce App',
    items: [],
    skills: [
      'Javascript',
      'React',
      'Styled-Components',
      'Context',
      'Stripe',
      'Auth0',
      'Axios',
      'React-Router v6',
    ],
    content: 'View project',
    url: 'https://gw-comfy.netlify.app/',
    linkUrl: 'https://github.com/wujekbizon/react-comfy-store',
    linkContent: 'Github Code',
    imgSrc: Comfy,
  },
  {
    id: 5,
    type: 'REAL WORLD PROJECT',
    projectName: 'Smakus',
    text: "Food E-Commerce Website made for some local vendor, who's running small family business.",
    items: [
      "I made this website for some local vendor, who's running small family business.",
      'My own design - ready for future expansion.',
      'Earlier, fully functional version - still working for adding new features.',
    ],
    skills: [
      'Javascript',
      'React',
      'Sass',
      'React-Redux',
      'Redux Toolkit',
      'Context',
      'React-Leaflet',
      'Material UI',
      'React-Toasify',
      'I18Next',
      'Ityped',
    ],
    content: 'View project',
    url: 'https://smakus.vercel.app/',
    linkUrl: 'https://github.com/wujekbizon/react-smakus',
    linkContent: 'Github Code',
    imgSrc: Bar,
  },
  {
    id: 6,
    type: 'UI/UX DESIGN',
    projectName: 'Gericht Restaurant',
    text: 'Amazing Modern UI/UX Design, using Figma design transformed into a fully functional website.',
    items: [],
    skills: ['Javascript', 'React', 'Css', 'react icons', 'Html 5', 'Figma'],
    content: 'View project',
    url: 'https://gericht-gw.vercel.app/',
    linkUrl: 'https://github.com/wujekbizon/gericht-UI-UX',
    linkContent: 'Github Code',
    imgSrc: Geritch,
  },
  {
    id: 7,
    type: 'FRONT END DEVELOPER',
    projectName: 'Jobster',
    text: 'This simply but awesome app can help me track all of my pending job applications and interviews.',
    items: [
      'During the process of building this app I moved my redux skills to highest level , and using Redux toolkit makes the whole process a breeze. ',
      'Full CRUD.',
      'Using Recharts.',
    ],
    skills: [
      'Javascript',
      'React',
      'React-Router v6',
      'Redux Toolkit',
      'Axios',
      'Styled Components',
      'CSS 3',
    ],
    content: 'View project',
    url: 'https://react-jobster.vercel.app/',
    linkUrl: 'https://github.com/wujekbizon/react-jobster',
    linkContent: 'Github Code',
    imgSrc: Job,
  },
  {
    id: 8,
    type: 'FULLSTACK DEVELOPER',
    projectName: 'Mwd Store',
    text: 'Client-side of my fullstack MERN E-commerce application',
    items: [
      'E-commerce app.',
      'Stripe payment method.',
      "It's using my Admin Panel application , for adding , editing and removing users and products.",
      'Work in progress to add more functionality.',
    ],
    skills: [
      'React',
      'Redux',
      'Javascript',
      'HTML 5',
      'Styled',
      'React-Router',
      'REST',
      'Express',
      'Mondo Db',
      'Node.js',
    ],
    content: 'View project',
    url: 'https://react-mwd-store.vercel.app/',
    linkUrl: 'https://github.com/wujekbizon/react-mwd',
    linkContent: 'Github Code',
    imgSrc: Mwd,
  },
  // {
  //   id: 9,
  //   type: 'FULL STACK DEVELOPER',
  //   projectName: 'Yelp Camp',
  //   text: 'My first fullstack application.',
  //   items: [
  //     'Do You know any campgrounds and want to share?',
  //     'Welcome to the Yelp Camp.',
  //     'Create a campground, add photos, leave a review!',
  //   ],
  //   skills: [
  //     'Javascript',
  //     'HTML 5',
  //     'Bootstrap',
  //     'Express.js',
  //     'REST',
  //     'Mongo Db',
  //     'Mongoose',
  //     'Node.js',
  //     'Passport',
  //     'Cloudinary',
  //     'Mapbox',
  //     'Heroku',
  //   ],
  //   content: 'View project',
  //   url: 'https://yelp-camp2022-gw.herokuapp.com/',
  //   linkUrl: 'https://github.com/wujekbizon/github-yelpcamp',
  //   linkContent: 'Github Code',
  //   imgSrc: Yelp,
  // },
  // {
  //   id: 10,
  //   type: 'FULLSTACK DEVELOPER',
  //   projectName: 'Admin Panel',
  //   text: 'Admin Panel for my  fullstack MERN E-Commerce application',
  //   items: [
  //     'MWD.store Admin Panel.',
  //     'Register new user at client-side then you can access to admin panel in View Mode.',
  //     'Add, delete and edit products and users , check the latest transactions.',
  //     'Work in progress to add more functionality.',
  //   ],
  //   skills: [
  //     'React',
  //     'Redux',
  //     'Context',
  //     'Javascript',
  //     'HTML 5',
  //     'Sass',
  //     'React-Router',
  //     'Mongo Db',
  //   ],
  //   content: 'View project',
  //   url: 'https://adminpanelmwd.herokuapp.com/',
  //   linkUrl: 'https://github.com/wujekbizon/mwd-admin-panel',
  //   linkContent: 'Github Code',
  //   imgSrc: Admin,
  // },
  {
    id: 11,
    type: 'FRONT END DEVELOPER',
    projectName: 'Github User',
    text: 'Search thru all Github Database, to find any User.',
    items: [
      "Check who's repos got the most stars.",
      'Search thru all Github Database, to find any User.',
      'Check which is the most used programming language by Github community.',
    ],
    skills: [
      'Javascript',
      'React',
      'Context',
      'Axios',
      'CSS 3',
      'React-Router v6',
      'Auth0',
      'Fusion Charts',
    ],
    content: 'View project',
    url: 'https://react-github-users-gw.vercel.app/',
    linkUrl: 'https://github.com/wujekbizon/react-github-users',
    linkContent: 'Github Code',
    imgSrc: Github,
  },
  // {
  //   id: 12,
  //   type: 'FRONT END DEVELOPER',
  //   projectName: 'Portfolio',
  //   text: 'My Personal Portfolio Website',
  //   items: [
  //     'Redesign navbar.',
  //     'Reusable React Components.',
  //     'Reusable.',
  //     'Self Designed SVG logo.',
  //     'Contact Form.',
  //     'React-Leaflet Map.',
  //   ],
  //   skills: [
  //     'React',
  //     'Javascript',
  //     'Sass',
  //     'CSS 3',
  //     'Vercel',
  //     'Animate.css',
  //     'Inkscape',
  //   ],
  //   content: 'View project',
  //   url: 'https://g-w.vercel.app/',
  //   linkUrl: 'https://github.com/wujekbizon/react-portfolio-v2.0',
  //   linkContent: 'Github Code',
  //   imgSrc: ImagePortV2,
  // },
  // {
  //   id: 13,
  //   type: 'PERSONAL PROJECT',
  //   projectName: 'Movie Fight',
  //   text: "Movie Search application, that's makes the comparison of two chosen movies.",
  //   items: [
  //     'Search your favorites movies.',
  //     'Compare with your friend pick.',
  //     'Fully responsive application.',
  //     'Reusable Components.',
  //   ],
  //   skills: ['Javascript', 'CSS 3', 'HTML 5', 'Bulma', 'Vercel', 'API'],
  //   content: 'View project',
  //   url: 'https://js-apps-movie-fight.vercel.app/',
  //   linkUrl: 'https://github.com/wujekbizon/js-apps-movieFight',
  //   linkContent: 'Github Code',
  //   imgSrc: Movie,
  // },
  // {
  //   id: 14,
  //   type: 'PERSONAL PROJECT',
  //   projectName: 'Mtg Counter',
  //   text: 'My first project fully made in JavaScript with Bulma Library.',
  //   items: [
  //     'Clean and simple design.',
  //     'Customize player names.',
  //     'Custom Starting Life.',
  //     'Option with setting a Timer.',
  //     'Fully responsive.',
  //   ],
  //   skills: ['Javascript', 'CSS 3', 'HTML 5', 'Bulma', 'Vercel'],
  //   content: 'View project',
  //   url: 'https://js-lifecounter.vercel.app/',
  //   linkUrl: 'https://github.com/wujekbizon/jS-apps-lifeCounter',
  //   linkContent: 'Github Code',
  //   imgSrc: CounterImage,
  // },
  // {
  //   id: 12,
  //   type: 'WORK IN PROGRESS',
  //   projectName: 'Mtg Card Game',
  //   text: 'Mtg v0.1',
  //   items: [
  //     'WORK IN PROGRESS!',
  //     'Search for a card.',
  //     'Build 60+ cards deck.',
  //     'Any many many more.',
  //   ],
  //   skills: ['Typescript', 'Javascript', 'React', 'Animate.css'],
  //   content: 'DEMO',
  //   url: 'https://react-ts-mtg.vercel.app/',
  //   linkUrl: 'https://github.com/wujekbizon/react-ts-mtg',
  //   linkContent: 'Github Code',
  //   imgSrc: MtgSearch,
  // },
];
