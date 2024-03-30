import { memo } from 'react';
import './SlideMoreInfo.scss';

type SlideMoreInfoProps = {
  content: string;
  isMoreInfoImage: boolean;
  description: string;
  onClick?: () => void;
};

const SlideMoreInfo = ({ content, isMoreInfoImage, description, onClick = undefined }: SlideMoreInfoProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <div className="slide-more-divider" />
      {isMoreInfoImage ? (
        <img
          src={content}
          alt={description}
          className={`slide-more-info-image ${onClick ? 'slide-more-info-image_clicked' : ''}`}
          onClick={handleClick}
          role="presentation"
        />
      ) : (
        <div className="slide-more-info">{content}</div>
      )}
    </>
  );
};

export default memo(SlideMoreInfo);
