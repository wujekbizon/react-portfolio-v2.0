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

import Admin from '../assets/images/admin.png';
import Color from '../assets/images/colorPalette.png';
import Github from '../assets/images/github_user.png';
import Job from '../assets/images/jobster.png';
import Movie from '../assets/images/Movie.png';
import MtgSearch from '../assets/images/mtgsearch.png';
import CounterImage from '../assets/images/Mtg.png';
import Mwd from '../assets/images/mwd_store.png';
import ImagePort from '../assets/images/portfolio-v1.png';
import ImagePortV2 from '../assets/images/portfolio-v2.png';
import Bar from '../assets/images/smakus.png';
import Yelp from '../assets/images/YelpCamp.png';

export const fonstAwesomeIcons = [
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
    projectName: 'Admin Panel',
    text: 'React Admin Panel for my fullstack MERN application',
    items: [
      'MWD Store Admin Panel',
      'Register new user at client-side then you can access to admin panel in View Mode.',
      'Add, delete and edit products and users , check the latest transactions',
      'Work in progress to add more functionality.',
    ],
    skills: [
      'React',
      'Redux',
      'Context',
      'Javascript',
      'HTML 5',
      'Sass',
      'React-Router',
      'Mongo Db',
    ],
    content: 'View project',
    url: 'https://adminpanelmwd.herokuapp.com/',
    linkUrl: 'https://github.com/wujekbizon/mwd-admin-panel',
    linkContent: 'Github Code',
    imgSrc: Admin,
  },
  {
    id: 2,
    type: 'PERSONAL PROJECT',
    projectName: 'Color Palette',
    text: 'React Color Palette',
    items: [
      'Reusable React Components',
      'Small projects done as as job interview task',
    ],
    skills: ['React', 'Javascript', 'HTML 5', 'Sass'],
    content: 'View project',
    url: 'https://react-colorpalette.vercel.app/',
    linkUrl: 'https://github.com/wujekbizon/react-Frontend_Intern-task',
    linkContent: 'Github Code',
    imgSrc: Color,
  },
  {
    id: 3,
    type: 'FRONT END DEVELOPER',
    projectName: 'Github User',
    text: 'search for any github user',
    items: [
      "Check who's repos got the most stars.",
      'Search thru all Github Database, to find any User',
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
  {
    id: 4,
    type: 'FRONT END DEVELOPER',
    projectName: 'Jobster',
    text: 'This simply but awesome app can help me track all of my pending job applications and interviews.',
    items: [
      'During the process of building this app I moved my redux skills to highest level , and using Redux toolkit makes the whole process a breeze. ',
      'Full CRUD',
      'Using Recharts',
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
    id: 5,
    type: 'REAL WORLD PROJECT',
    projectName: 'Smakus',
    text: 'Food E-Commerce Website',
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
    type: 'FULLSTACK DEVELOPER',
    projectName: 'Mwd Store',
    text: 'Client-side of my fullstack MERN application',
    items: [
      'E-commerce app',
      'Stripe payment method',
      "It's using my , admin panel application , for adding , editing and removing users and products.",
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
  {
    id: 7,
    type: 'FULL STACK DEVELOPER',
    projectName: 'Yelp Camp',
    text: 'My first fullstack project, created as a final application, on The Web Developer Bootcamp I completed.',
    items: [
      'Do You know any campgrounds and want to share?',
      'Welcome to the Yelp Camp',
      'Create a campground, add photos, leave a review!',
    ],
    skills: [
      'Javascript',
      'HTML 5',
      'Bootstrap',
      'Express.js',
      'REST',
      'Mongo Db',
      'Mongoose',
      'Node.js',
      'EJS',
      'Joi',
      'Passport',
      'Cloudinary',
      'Mapbox',
      'Heroku',
    ],
    content: 'View project',
    url: 'https://yelp-camp2022-gw.herokuapp.com/',
    linkUrl: 'https://github.com/wujekbizon/react-smakus',
    linkContent: 'Github Code',
    imgSrc: Yelp,
  },
];
