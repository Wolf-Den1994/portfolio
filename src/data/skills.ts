export const firstSkills = [
  { tag: 'JavaScript', weight: 64.96 },
  { tag: 'HTML', weight: 60.07 },
  { tag: 'CSS', weight: 56.07 },
  { tag: 'React', weight: 48.24 },
  { tag: 'React Native', weight: 47.67 },
  { tag: 'Vue', weight: 47.08 },
  { tag: 'Expo', weight: 40.22 },
  { tag: 'Angular', weight: 35.35 },
  { tag: 'Node.js', weight: 33.91 },
  { tag: 'TypeScript', weight: 30.19 },
  { tag: 'Zustand', weight: 28.13 },
  { tag: 'Redux', weight: 27.86 },
  { tag: 'Express', weight: 27.13 },
  { tag: 'Nestjs', weight: 24.31 },
  { tag: 'Git', weight: 21.98 },
  { tag: 'RestAPI', weight: 21.01 },
  { tag: 'Jest', weight: 14.75 },
  { tag: 'ESLint', weight: 10.42 },
  { tag: 'SCSS', weight: 9.55 },
  { tag: 'MySQL', weight: 8.32 },
  { tag: 'TailwindCSS', weight: 7.52 },
  { tag: 'i18next', weight: 7.32 },
  { tag: 'ClickHouse', weight: 7.03 },
  { tag: 'MongoDB', weight: 6.75 },
  { tag: 'Redis', weight: 6.02 },
  { tag: 'PostgreSQL', weight: 5.61 },
  { tag: 'Kibana', weight: 5.26 },
  { tag: 'Sentry', weight: 5.1 },
  { tag: 'Websocket', weight: 5.07 },
  { tag: 'Jenkins', weight: 4.87 },
  { tag: 'Pinia', weight: 4.79 },
  { tag: 'Vite', weight: 4.72 },
  { tag: 'Webpack', weight: 4.66 },
  { tag: 'JWT', weight: 4.66 },
  { tag: 'Prettier', weight: 3.42 },
  { tag: 'RxJS', weight: 3.01 },
  { tag: 'Extension', weight: 2.8 },
  { tag: 'GraphQL', weight: 2.6 },
  { tag: 'Docker', weight: 2.46 },
  { tag: 'Amazon S3', weight: 2.12 },
  { tag: 'Render', weight: 2.1 },
  { tag: 'Vercel', weight: 1.88 },
  { tag: 'Heroku', weight: 1.74 },
  { tag: 'Netlify', weight: 1.33 },
  { tag: 'Material-UI', weight: 1.29 },
  { tag: 'AntDesign', weight: 0.97 },
  { tag: 'Tamagui', weight: 0.86 },
  { tag: 'Styled-components', weight: 0.79 },
  { tag: 'Bootstrap', weight: 0.65 },
  { tag: 'Less', weight: 0.56 },
  { tag: 'Prisma', weight: 0.53 },
  { tag: 'PostCSS', weight: 0.46 },
];

interface Skill {
  name: string;
  mobileHide: boolean;
  value: number;
  children?: Skill[];
}

export const secondSkills = {
  value: 0,
  name: '',
  mobileHide: false,
  children: [
    {
      name: 'JavaScript',
      mobileHide: false,
      value: 5,
      children: [
        {
          name: 'TypeScript',
          mobileHide: false,
          value: 4,
        },
      ],
    },
    {
      name: 'HTML',
      mobileHide: false,
      value: 3,
    },
    {
      name: 'Browser Extension',
      mobileHide: true,
      value: 3,
    },
    {
      name: 'RestAPI',
      mobileHide: false,
      value: 2,
    },
    {
      name: 'CSS',
      mobileHide: false,
      value: 2,
      children: [
        {
          name: 'Less',
          mobileHide: true,
          value: 1,
        },
        {
          name: 'SCSS',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'TailwindCSS',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'SASS',
          mobileHide: true,
          value: 1,
        },
        {
          name: 'PostCSS',
          mobileHide: true,
          value: 1,
        },
      ],
    },
    {
      name: 'FE Frameworks',
      mobileHide: false,
      value: 4,
      children: [
        {
          name: 'React',
          mobileHide: false,
          value: 3,
        },
        {
          name: 'Vue',
          mobileHide: false,
          value: 2,
        },
        {
          name: 'React Native',
          mobileHide: false,
          value: 2,
        },
        {
          name: 'Angular',
          mobileHide: false,
          value: 1,
        },
      ],
    },
    {
      name: 'Node.js',
      mobileHide: false,
      value: 2,
      children: [
        {
          name: 'Express',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'Nestjs',
          mobileHide: false,
          value: 1,
        },
      ],
    },
    {
      name: 'Databases',
      mobileHide: false,
      value: 2,
      children: [
        {
          name: 'PostgreSQL',
          mobileHide: true,
          value: 1,
        },
        {
          name: 'MySQL',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'ClickHouse',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'MongoDB',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'Redis',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'Prisma',
          mobileHide: true,
          value: 1,
        },
      ],
    },
    {
      name: 'Libraries',
      mobileHide: false,
      value: 3,
      children: [
        {
          name: 'Redux',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'Zustand',
          mobileHide: true,
          value: 1,
        },
        {
          name: 'Pinia',
          mobileHide: true,
          value: 1,
        },
        {
          name: 'Jest',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'ESLint',
          mobileHide: false,
          value: 2,
        },
        {
          name: 'Prettier',
          mobileHide: true,
          value: 2,
        },
        {
          name: 'RxJS',
          mobileHide: true,
          value: 1,
        },
        {
          name: 'GraphQL',
          mobileHide: true,
          value: 2,
        },
        {
          name: 'Socket.io',
          mobileHide: true,
          value: 2,
        },
        {
          name: 'Webpack',
          mobileHide: false,
          value: 2,
        },
        {
          name: 'AntDesign',
          mobileHide: true,
          value: 2,
        },
        {
          name: 'Tamagui',
          mobileHide: true,
          value: 2,
        },
        {
          name: 'Styled-components',
          mobileHide: true,
          value: 2,
        },
        {
          name: 'Bootstrap',
          mobileHide: true,
          value: 2,
        },
        {
          name: 'Material-UI',
          mobileHide: true,
          value: 2,
        },
      ],
    },
    {
      name: 'Tools',
      mobileHide: false,
      value: 2,
      children: [
        {
          name: 'Docker',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'JWT',
          mobileHide: true,
          value: 1,
        },
        {
          name: 'Kibana',
          mobileHide: true,
          value: 1,
        },
        {
          name: 'Sentry',
          mobileHide: true,
          value: 1,
        },
        {
          name: 'Git',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'Jenkins',
          mobileHide: true,
          value: 1,
        },
      ],
    },
    {
      name: 'Hosting',
      mobileHide: true,
      value: 2,
      children: [
        {
          name: 'Amazon S3',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'Render',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'Vercel',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'Heroku',
          mobileHide: false,
          value: 1,
        },
        {
          name: 'Netlify',
          mobileHide: false,
          value: 1,
        },
      ],
    },
  ],
};

export const filterSkills = (skills: Skill[]): Skill[] =>
  skills
    .filter((skill) => !skill.mobileHide)
    .map((skill) => ({
      ...skill,
      children: skill.children ? filterSkills(skill.children) : undefined,
    }))
    .filter((skill) => !skill.children || skill.children.length > 0);
