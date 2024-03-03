import { ChartTagCloud } from '../../../components/Chart';
import Title from '../../../components/Title/Title';
import { firstSkills } from '../../../data/skills';
import './SkillsFirstLayout.scss';

export const SkillsFirstLayout = () => (
  <div className="skills">
    <Title text="Skills" />
    <ChartTagCloud data={firstSkills} />
  </div>
);
