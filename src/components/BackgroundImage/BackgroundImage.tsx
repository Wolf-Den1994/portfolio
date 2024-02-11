import './BackgroundImage.scss';

type BackgroundImageProps = {
  srcImage: string;
  width?: number | string;
  height?: number | string;
  additionalStyles?: Record<string, unknown>;
  className?: string;
};

const BackgroundImage = ({ srcImage, width, height, className, additionalStyles }: BackgroundImageProps) => (
  <i
    className={`background-image ${className}`}
    style={{ backgroundImage: `url(${srcImage})`, width, height, ...additionalStyles }}
  />
);

BackgroundImage.defaultProps = {
  width: '',
  height: '',
  additionalStyles: {},
  className: '',
};

export default BackgroundImage;
