import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { getClassLocale } from '../../utils/locale';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { FormProps, FormState } from './types';
import './Form.scss';

const Form = ({ onSubmit }: FormProps) => {
  const { t, i18n } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormState>();

  const handleSubmitForm = (data: FormState) => {
    onSubmit(data, reset);
  };

  return (
    <form
      className="form wow pulse"
      data-wow-delay="0.7s"
      name="contact"
      method="POST"
      onSubmit={handleSubmit(handleSubmitForm)}
      data-netlify="true"
    >
      <Input
        type="text"
        id="name"
        name="name"
        labelText={t('contacts.form.name')}
        register={register}
        required
        errors={errors}
      />
      <Input
        type="email"
        id="email"
        name="email"
        labelText={t('contacts.form.email')}
        register={register}
        required
        errors={errors}
      />
      <Input
        type="textarea"
        id="message"
        name="message"
        labelText={t('contacts.form.message')}
        register={register}
        required
        maxLength={2000}
        errors={errors}
      />
      <Button
        type="submit"
        kind="primary"
        className={`${getClassLocale(i18n, 'form-send')} wow fadeInRight`}
        animateDelay="0.9s"
      >
        {t('contacts.form.button_send')}
      </Button>
    </form>
  );
};

export default Form;
