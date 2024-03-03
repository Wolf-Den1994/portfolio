import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ChartCollapsible } from '../../../components/Chart';
import Title from '../../../components/Title/Title';
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
      <Title text="Skills" />
      <ChartCollapsible data={skills} isMobile={isMobile} />
    </div>
  );
};
