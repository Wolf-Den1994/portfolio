import ChartTagCloud from '../../components/Chart/ChartTagCloud/ChartTagCloud';
import './Skills.scss';

const mySkills = [
  { tag: 'JavaScript', weight: 64.96 },
  { tag: 'HTML/CSS', weight: 56.07 },
  { tag: 'React', weight: 48.24 },
  { tag: 'Vue', weight: 47.08 },
  { tag: 'Angular', weight: 35.35 },
  { tag: 'Node.js', weight: 33.91 },
  { tag: 'TypeScript', weight: 30.19 },
  { tag: 'Redux', weight: 27.86 },
  { tag: 'Express', weight: 27.13 },
  { tag: 'Nestjs', weight: 24.31 },
  { tag: 'Docker', weight: 21.98 },
  { tag: 'GraphQL', weight: 21.01 },
  { tag: 'Jest', weight: 14.75 },
  { tag: 'JWT', weight: 10.42 },
  { tag: 'PostgreSQL', weight: 9.55 },
  { tag: 'MySQL', weight: 8.32 },
  { tag: 'ClickHouse', weight: 7.03 },
  { tag: 'MongoDB', weight: 6.75 },
  { tag: 'Redis', weight: 6.02 },
  { tag: 'Prisma', weight: 5.61 },
  { tag: 'Kibana', weight: 5.26 },
  { tag: 'Sentry', weight: 5.1 },
  { tag: 'Websocket', weight: 5.07 },
  { tag: 'Jenkins', weight: 4.87 },
  { tag: 'Webpack', weight: 4.66 },
  { tag: 'ESLint', weight: 4.66 },
  { tag: 'Prettier', weight: 3.42 },
  { tag: 'RxJS', weight: 3.01 },
  { tag: 'Extension', weight: 2.8 },
  { tag: 'RestAPI', weight: 2.6 },
  { tag: 'Git', weight: 2.46 },
  { tag: 'Amazon S3', weight: 2.12 },
  { tag: 'Render', weight: 2.1 },
  { tag: 'Vercel', weight: 1.88 },
  { tag: 'Heroku', weight: 1.74 },
  { tag: 'Netlify', weight: 1.33 },
  { tag: 'Material-UI', weight: 1.29 },
  { tag: 'AntDesign', weight: 0.97 },
  { tag: 'Styled-components', weight: 0.79 },
  { tag: 'Bootstrap', weight: 0.65 },
  { tag: 'Less', weight: 0.56 },
  { tag: 'SCSS', weight: 0.53 },
];

const Skills = () => (
  <div className="skills">
    <div className="skills__title wow fadeInDown">Skills</div>
    <div className="skills__divider wow fadeInDown" />
    <ChartTagCloud data={mySkills} />
  </div>
);

export default Skills;
