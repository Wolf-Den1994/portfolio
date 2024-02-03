import { ChangeEvent, useState } from 'react';
import './Input.scss';

const typeTextarea = 'textarea';
type InputType = 'text' | 'email' | typeof typeTextarea | 'hidden';
type InputProps = {
  type: InputType;
  name?: string;
  id?: string;
  labelText?: string;
  value?: string | number | readonly string[];
};

const Input = ({ type, name, id, labelText, value }: InputProps) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const inputElement =
    type === typeTextarea ? (
      <textarea className="textarea" name={name} id={id} />
    ) : (
      <input className="input" type={type} name={name} id={id} value={inputValue} onChange={handleInputValue} />
    );

  return (
    <div className="input-wrap">
      {labelText && (
        <label className="label" htmlFor={id}>
          {labelText}
        </label>
      )}
      {inputElement}
    </div>
  );
};

Input.defaultProps = {
  name: '',
  id: '',
  labelText: '',
  value: '',
};

export default Input;
