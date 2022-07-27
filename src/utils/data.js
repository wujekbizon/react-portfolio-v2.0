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
