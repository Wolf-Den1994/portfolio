import './Button.scss';

type ButtonProps = {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  kind?: 'default' | 'primary' | 'link';
  styles?: Record<string, unknown>;
  linkUrl?: string;
  className?: string;
};

const Button = ({ type, children, kind, styles, linkUrl, className }: ButtonProps) => {
  if (kind === 'link') {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noreferrer"
        className={`button ${kind} ${className}`}
        style={{ ...styles }}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={`button ${kind} ${className}`} style={{ ...styles }}>
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
};

export default Button;
