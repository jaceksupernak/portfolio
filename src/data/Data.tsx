import chinguLogoBig from '../assets/experience_chingu_big.png';
import chinguLogoSmall from '../assets/experience_chingu_small.png';
import projectLiteTalk from '../assets/project_litetalk.png';
import projectDevelapp from '../assets/project_develapp.png';

export const skillsData = [
  'HTML5',
  'S(CSS)',
  'StyledComponents',
  'ReactJS',
  'Javascript ES6',
  'TypeScript',
  'Git',
  'Agile/Scrum',
];

export const experienceData = [
  {
    id: 1,
    name: 'Chingu',
    role: 'Front-End Developer',
    duration: 'January 2022 - June 2022',
    description: 'Participated in three remote open source team projects. Each of the project was built in an international team of three to five developers over a span of seven to nine weeks and was developed using Agile Methodology. The technology included HTML5, (S)CSS, JavaScript ES6, React, Redux, NodeJS, Express, MongoDB.',
    companyLogoBig: chinguLogoBig,
    companyLogoSmall: chinguLogoSmall,
  },
];

export const projectsData = [
  {
    id: 1,
    name: 'Litetalk',
    description: 'a lightweight messanger app',
    liveLink: 'https://www.litetalk.herokuapp.com/',
    gitHubLink: 'https://github.com/chingu-voyages/v39-bears-team-11',
    technologies: [
      'HTML5',
      'CSS',
      'JavaScript ES6',
      'ReactJS', 'NodeJS',
      'Redux',
      'Express',
      'MongoDB',
      'Agile/Scrum',
      'Git',
      'Figma',
      'Heroku',
    ],
    laptopImage: projectLiteTalk,
    cornerLogo: chinguLogoSmall,
  },
  {
    id: 2,
    name: 'Develapp',
    description: 'an app dea aggregator',
    liveLink: 'https://www.devel-app.herokuapp.com/',
    gitHubLink: 'https://github.com/chingu-voyages/v38-geckos-team-04',
    technologies: [
      'HTML5',
      'SCSS',
      'JavaScript ES6',
      'ReactJS', 'NodeJS',
      'Express',
      'MongoDB',
      'Agile/Scrum',
      'Git',
      'Figma',
      'Heroku',
    ],
    laptopImage: projectDevelapp,
    cornerLogo: chinguLogoSmall,
  },

];
