import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ChartCollapsible } from '../../../components/Chart';
import { secondSkills, filterSkills } from '../../../data/skills';
import './SkillsSecondLayout.scss';

export const SkillsSecondLayout = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1110px)' });
  const [skills, setSkills] = useState(secondSkills);

  useEffect(() => {
    const skillsData = isMobile
      ? {
          value: 0,
          mobileHide: false,
          name: '',
          children: filterSkills(secondSkills.children),
        }
      : secondSkills;

    setSkills(skillsData);
  }, [isMobile]);

  return (
    <div className="skills">
      <div className="skills__title wow fadeInDown">Skills</div>
      <div className="skills__divider wow fadeInDown" />
      <ChartCollapsible data={skills} isMobile={isMobile} />
    </div>
  );
};
