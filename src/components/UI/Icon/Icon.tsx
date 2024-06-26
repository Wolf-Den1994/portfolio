import { ReactNode, memo } from 'react';
import './Icon.scss';

type IconProps = {
  name: ReactNode;
};

const Icon = ({ name }: IconProps) => <i className="icon">{name}</i>;

export default memo(Icon);
