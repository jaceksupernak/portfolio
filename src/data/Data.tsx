import chinguLogoBig from '../assets/experience_chingu_big.png';
import chinguLogoSmall from '../assets/experience_chingu_small.png';
import projectPersonalWebsite from '../assets/project_personal_website.png';
import projectLiteTalk from '../assets/project_litetalk.png';
import projectDevelapp from '../assets/project_develapp.png';
import projectGratitulendar from '../assets/project_gratitulendar.png';
import projectKropkasbox from '../assets/project_kropkasbox.png';

export const skillsData = [
  'HTML5',
  'S(CSS)',
  'Styled Components',
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
    description: 'Participated in three remote open source team projects. Each of the projects was built in an international team of three to five developers over a span of seven to nine weeks and was developed using Agile Methodology. The technology included HTML5, (S)CSS, JavaScript ES6, React, Redux, NodeJS, Express, MongoDB.',
    companyLogoBig: chinguLogoBig,
    companyLogoSmall: chinguLogoSmall,
  },
];

export const projectsData = [
  {
    id: 1,
    name: 'supernak.me',
    description: 'we need to go deeper',
    liveLink: '',
    gitHubLink: 'https://github.com/jaceksupernak/portfolio',
    technologies: [
      'TypeScript',
      'Styled Components',
      'ReactJS',
      'HTML5',
      'Git',
      'Netflify',
      'Figma',
    ],
    laptopImage: projectPersonalWebsite,
    cornerLogo: '',
  },
  {
    id: 2,
    name: 'Litetalk',
    description: 'a lightweight messenger app',
    liveLink: 'https://litetalk.herokuapp.com/',
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
      'Heroku',
      'Figma',
    ],
    laptopImage: projectLiteTalk,
    cornerLogo: chinguLogoSmall,
  },
  {
    id: 3,
    name: 'Develapp',
    description: 'an app idea aggregator',
    liveLink: 'https://devel-app.herokuapp.com/',
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
      'Heroku',
    ],
    laptopImage: projectDevelapp,
    cornerLogo: chinguLogoSmall,
  },
  {
    id: 4,
    name: 'Gratitulendar',
    description: 'a gratitude diary',
    liveLink: 'https://gratitulendar.herokuapp.com/',
    gitHubLink: 'https://github.com/chingu-voyages/v37-toucans-team-02',
    technologies: [
      'HTML5',
      'CSS',
      'JavaScript',
      'Agile/Scrum',
      'Git',
      'Heroku',
    ],
    laptopImage: projectGratitulendar,
    cornerLogo: chinguLogoSmall,
  },
  {
    id: 5,
    name: 'kropkasbox.com',
    description: 'a comic strip website about a grumpy cat',
    liveLink: 'https://www.kropkasbox.com',
    gitHubLink: 'https://github.com/jaceksupernak/kropkasbox',
    technologies: [
      'HTML5',
      'CSS',
      'JavaScript',
      'Git',
      'GH Pages',
      'Photoshop',
    ],
    laptopImage: projectKropkasbox,
    cornerLogo: '',
  },
];
