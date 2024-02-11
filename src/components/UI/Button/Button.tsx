import { ReactNode } from 'react';
import './Button.scss';

type Link = {
  linkUrl: string;
  target?: string;
  rel?: string;
};

type ButtonProps = {
  children: string | ReactNode;
  type?: 'button' | 'submit' | 'reset' | 'link';
  kind?: 'default' | 'primary' | 'link';
  styles?: Record<string, unknown>;
  linkOptions?: Link;
  className?: string;
  onClick?: () => void;
};

const Button = ({ type, children, kind, styles, linkOptions, className, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (type !== 'link') {
    return (
      <button type={type} className={`button ${kind} ${className}`} style={{ ...styles }} onClick={handleClick}>
        {children}
      </button>
    );
  }

  return (
    <a
      href={linkOptions?.linkUrl}
      target={linkOptions?.target}
      rel={linkOptions?.rel}
      className={`button ${kind} ${className}`}
      style={{ ...styles }}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

Button.defaultProps = {
  type: 'button',
  kind: 'default',
  styles: {
    maxWidth: 115,
  },
  linkOptions: {
    linkUrl: '',
    target: '_self',
    rel: '',
  },
  className: '',
  onClick: () => undefined,
};

export default Button;
