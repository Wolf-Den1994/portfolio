type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: string;
};

const Button = ({ type, children }: ButtonProps) => <button type={type}>{children}</button>;

Button.defaultProps = {
  type: 'button',
};

export default Button;
