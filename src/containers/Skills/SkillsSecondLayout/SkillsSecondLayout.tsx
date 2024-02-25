import { ChartCollapsible } from '../../../components/Chart';
import { secondSkills } from '../../../data/skills';
import './SkillsSecondLayout.scss';

export const SkillsSecondLayout = () => (
  <div className="skills">
    <div className="skills__title wow fadeInDown">Skills</div>
    <div className="skills__divider wow fadeInDown" />
    <ChartCollapsible data={secondSkills} />
  </div>
);
