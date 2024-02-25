import { ChartTagCloud } from '../../../components/Chart';
import { firstSkills } from '../../../data/skills';
import './SkillsFirstLayout.scss';

export const SkillsFirstLayout = () => (
  <div className="skills">
    <div className="skills__title wow fadeInDown">Skills</div>
    <div className="skills__divider wow fadeInDown" />
    <ChartTagCloud data={firstSkills} />
  </div>
);
