import './Input.scss';
import { InputProps, typeTextarea } from './types';

const Input = ({ type, name, id, labelText, onChange }: InputProps) => {
  const InputElement =
    type === typeTextarea ? (
      <textarea className="textarea" name={name} id={id} onChange={onChange} />
    ) : (
      <input className="input" type={type} name={name} id={id} onChange={onChange} />
    );

  return (
    <div className="input-wrap">
      {labelText && (
        <label className="label" htmlFor={id}>
          {labelText}
        </label>
      )}
      {InputElement}
    </div>
  );
};

Input.defaultProps = {
  name: '',
  id: '',
  labelText: '',
};

export default Input;
