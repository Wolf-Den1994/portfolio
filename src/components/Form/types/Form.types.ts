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
  onSubmit: (arg0: FormState) => void;
};
