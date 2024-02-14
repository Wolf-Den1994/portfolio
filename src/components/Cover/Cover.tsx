import './Cover.scss';

type CoverProps = {
  onClose: () => void;
};

const Cover = ({ onClose }: CoverProps) => <div className="cover" onClick={onClose} role="presentation" />;

export default Cover;
