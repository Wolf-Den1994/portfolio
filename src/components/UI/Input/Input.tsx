import './Input.scss';
import { InputProps, TEXTAREA_TYPE } from './types';

const Input = ({ type, id, name, labelText, register, required, maxLength, errors }: InputProps) => {
  const InputElement =
    type === TEXTAREA_TYPE ? (
      <textarea className="textarea" id={id} {...register(name, { required })} maxLength={maxLength} />
    ) : (
      <input className="input" type={type} id={id} {...register(name, { required })} maxLength={maxLength} />
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
      {errors.name && errors.name.type === 'maxLength' && <span role="alert">Max length exceeded</span>}
    </div>
  );
};

Input.defaultProps = {
  id: '',
  labelText: '',
};

export default Input;
