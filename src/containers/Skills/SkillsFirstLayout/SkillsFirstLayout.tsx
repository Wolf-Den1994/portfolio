import { useTranslation } from 'react-i18next';
import { ChartTagCloud } from '../../../components/Chart';
import Title from '../../../components/Title/Title';
import { firstSkills } from '../../../data/skills';
import './SkillsFirstLayout.scss';

export const SkillsFirstLayout = () => {
  const { t } = useTranslation();

  return (
    <div className="skills">
      <Title text={t('skills.title')} />
      <ChartTagCloud data={firstSkills} />
    </div>
  );
};
