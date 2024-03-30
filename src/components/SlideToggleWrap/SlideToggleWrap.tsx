import { useState } from 'react';
import { SlideToggle } from 'react-smooth-slide-toggle';
import { iconArrowMore } from '../../data/icons';
import Button from '../UI/Button/Button';
import Icon from '../UI/Icon/Icon';
import SlideContent from './SlideContent/SlideContent';
import SlideMoreInfo from './SlideMoreInfo/SlideMoreInfo';
import './SlideToggleWrap.scss';

type SlideToggleProps = {
  title: string;
  description: string;
  date: string;
  moreInfo: string;
  isMoreInfoImage?: boolean;
  blockAlignLeft: boolean;
  onClick?: () => void;
};

const SlideToggleWrap = ({
  title,
  description,
  date,
  moreInfo,
  blockAlignLeft,
  onClick = undefined,
  isMoreInfoImage = false,
}: SlideToggleProps) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`slide-toggle-wrap wow ${
        blockAlignLeft ? 'slide-toggle-wrap_left fadeInLeft' : 'slide-toggle-wrap_right fadeInRight'
      }`}
    >
      <SlideContent title={title} description={description} date={date} />
      <SlideToggle
        trigger={
          <div className={`insides ${active ? 'insides_active' : ''}`} role="presentation">
            <Button className="more">
              <Icon name={iconArrowMore} />
            </Button>
          </div>
        }
        duration={250}
        callBack={() => setActive((prev) => !prev)}
      >
        <SlideMoreInfo
          content={moreInfo}
          isMoreInfoImage={isMoreInfoImage}
          description={description}
          onClick={onClick}
          key={date}
        />
      </SlideToggle>
    </div>
  );
};

export default SlideToggleWrap;
