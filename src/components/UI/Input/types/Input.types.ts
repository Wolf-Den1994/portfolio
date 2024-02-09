// import { ChangeEvent } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormState } from '../../../Form/types';

export const TEXTAREA_TYPE = 'textarea';
export type InputType = 'text' | 'email' | 'message';

export type InputProps = {
  id?: string;
  name: 'name' | 'email' | 'message';
  labelText?: string;
  register: UseFormRegister<FormState>;
  required?: boolean;
  errors: FieldErrors<FormState>;
} & (
  | {
      type: InputType;
    }
  | {
      type: typeof TEXTAREA_TYPE;
    }
);
