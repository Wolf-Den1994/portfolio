import { ChangeEvent } from 'react';

export const typeTextarea = 'textarea';

export type InputProps = {
  name?: string;
  id?: string;
  labelText?: string;
} & (
  | {
      type: 'text' | 'email' | 'hidden';
      onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    }
  | {
      type: typeof typeTextarea;
      onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    }
);
