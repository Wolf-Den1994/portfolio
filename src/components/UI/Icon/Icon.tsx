import { ReactNode } from 'react';

type IconProps = {
  name: ReactNode;
};

const Icon = ({ name }: IconProps) => <i>{name}</i>;

export default Icon;
