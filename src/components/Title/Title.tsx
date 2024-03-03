import './Title.scss';

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => (
  <>
    <div className="title wow fadeInDown">{text}</div>
    <div className="divider wow fadeInDown" />
  </>
);

export default Title;
