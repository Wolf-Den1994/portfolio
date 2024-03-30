import { memo } from 'react';
import './BackgroundImage.scss';

type BackgroundImageProps = {
  srcImage: string;
  width?: number | string;
  height?: number | string;
  additionalStyles?: Record<string, unknown>;
  className?: string;
};

const BackgroundImage = memo(
  ({ srcImage, width = '', height = '', className = '', additionalStyles = {} }: BackgroundImageProps) => (
    <i
      className={`background-image ${className}`}
      style={{ backgroundImage: `url(${srcImage})`, width, height, ...additionalStyles }}
    />
  ),
);

export default BackgroundImage;
