import { useForm } from 'react-hook-form';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './Form.scss';
import { FormProps, FormState } from './types';

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();

  return (
    <form
      className="form wow pulse"
      data-wow-delay="0.7s"
      name="contact"
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
      data-netlify="true"
    >
      <Input type="text" id="name" name="name" labelText="Name" register={register} required errors={errors} />
      <Input type="email" id="email" name="email" labelText="Email" register={register} required errors={errors} />
      <Input
        type="textarea"
        id="message"
        name="message"
        labelText="Message"
        register={register}
        required
        maxLength={2000}
        errors={errors}
      />
      <Button
        type="submit"
        kind="primary"
        styles={{ maxWidth: 90, alignSelf: 'flex-end' }}
        className="wow fadeInRight"
        animateDelay="0.9s"
      >
        Send
      </Button>
    </form>
  );
};

export default Form;
