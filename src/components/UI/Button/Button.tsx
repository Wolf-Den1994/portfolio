'use client';

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
  animateDelay?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  type = 'button',
  kind = 'default',
  styles = {},
  linkOptions = {
    linkUrl: '',
    target: '_self',
    rel: '',
  },
  className = '',
  animateDelay = '',
  onClick = undefined,
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (type !== 'link') {
    return (
      <button
        type={type}
        className={`button ${kind} ${className}`}
        style={{ ...styles }}
        data-wow-delay={animateDelay}
        onClick={handleClick}
      >
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
      data-wow-delay={animateDelay}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default Button;
