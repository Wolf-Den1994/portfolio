import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormState } from '../../Form/types';
import './Input.scss';

const TEXTAREA_TYPE = 'textarea';

type InputType = 'text' | 'email' | 'message';

type InputProps = {
  id?: string;
  name: 'name' | 'email' | 'message';
  labelText?: string;
  register: UseFormRegister<FormState>;
  required?: boolean;
  maxLength?: number;
  errors: FieldErrors<FormState>;
} & (
  | {
      type: InputType;
    }
  | {
      type: typeof TEXTAREA_TYPE;
    }
);

const Input = ({
  type,
  id = '',
  name,
  labelText = '',
  register,
  required = false,
  maxLength = 5000,
  errors,
}: InputProps) => {
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

export default Input;
