import { memo } from 'react';
import './SlideContent.scss';

type SlideContentProps = {
  title: string;
  description: string;
  date: string;
};

const SlideContent = ({ title, description, date }: SlideContentProps) => (
  <div className="slide-content">
    <div className="slide-content__title">{title}</div>
    <div className="slide-content__description">{description}</div>
    <div className="slide-content__date">{date}</div>
  </div>
);

export default memo(SlideContent);
