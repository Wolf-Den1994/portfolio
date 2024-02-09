import './Input.scss';
import { InputProps, TEXTAREA_TYPE } from './types';

const Input = ({ type, id, name, labelText, register, required, errors }: InputProps) => {
  const InputElement =
    type === TEXTAREA_TYPE ? (
      <textarea className="textarea" id={id} {...register(name, { required })} />
    ) : (
      <input className="input" type={type} id={id} {...register(name, { required })} />
    );

  return (
    <div className="input-wrap">
      {labelText && (
        <label className="label" htmlFor={id}>
          {labelText}
        </label>
      )}
      {InputElement}
      <strong className={`input-error ${errors[name] && 'show'}`}>{labelText} is required!</strong>
    </div>
  );
};

Input.defaultProps = {
  id: '',
  labelText: '',
};

export default Input;
