import { FormEvent, useState, ChangeEvent } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './Form.scss';
import { FormProps, FormState } from './types';

const Form = ({ onSubmit }: FormProps) => {
  const [state, setState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.warn('onSubmit!');

    onSubmit(state);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="form" name="contact" method="POST" onSubmit={handleSubmit} data-netlify="true">
      <Input type="text" name="name" id="name" labelText="Name" onChange={handleChange} />
      <Input type="email" name="email" id="email" labelText="Email" onChange={handleChange} />
      <Input type="textarea" name="message" id="message" labelText="Message" onChange={handleChange} />
      <Button type="submit" kind="primary" styles={{ maxWidth: 90, alignSelf: 'flex-end' }}>
        Send
      </Button>
    </form>
  );
};

export default Form;
