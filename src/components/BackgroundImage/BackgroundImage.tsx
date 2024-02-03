import './BackgroundImage.scss';

type BackgroundImageProps = {
  srcImage: string;
  width?: number | string;
  height?: number | string;
  additionalStyles?: Record<string, unknown>;
};

const BackgroundImage = ({ srcImage, width, height, additionalStyles }: BackgroundImageProps) => (
  <i className="background-image" style={{ backgroundImage: `url(${srcImage})`, width, height, ...additionalStyles }} />
);

BackgroundImage.defaultProps = {
  width: 100,
  height: 100,
  additionalStyles: {},
};

export default BackgroundImage;
