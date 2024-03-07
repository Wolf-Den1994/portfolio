import type { UseFormReset } from 'react-hook-form';

export type FormState = {
  name: string;
  email: string;
  message: string;
};

export type FormPost = FormState & {
  'form-name': string;
  [key: string]: string;
};

export type FormProps = {
  onSubmit: (state: FormState, reset: UseFormReset<FormState>) => void;
};
