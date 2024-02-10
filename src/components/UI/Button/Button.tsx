import { ReactNode } from 'react';
import './Button.scss';

type ButtonProps = {
  children: string | ReactNode;
  type?: 'button' | 'submit' | 'reset';
  kind?: 'default' | 'primary' | 'link';
  styles?: Record<string, unknown>;
  linkUrl?: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ type, children, kind, styles, linkUrl, className, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (kind === 'link') {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noreferrer"
        className={`button ${kind} ${className}`}
        style={{ ...styles }}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={`button ${kind} ${className}`} style={{ ...styles }} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  kind: 'default',
  styles: {
    maxWidth: 115,
  },
  linkUrl: '',
  className: '',
  onClick: () => undefined,
};

export default Button;
