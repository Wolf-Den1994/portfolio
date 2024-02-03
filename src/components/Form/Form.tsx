import Input from '../Input/Input';
import Button from '../UI/Button/Button';
import './Form.scss';

const Form = () => (
  <form className="form" name="contact" method="POST" data-netlify="true">
    <Input type="hidden" name="form-name" value="contact" />
    <Input type="text" name="name" id="name" labelText="Name" />
    <Input type="email" name="email" id="email" labelText="Email" />
    <Input type="textarea" name="message" id="message" labelText="Message" />
    <Button type="submit" kind="primary" styles={{ maxWidth: 90, alignSelf: 'flex-end' }}>
      Send
    </Button>
  </form>
);

export default Form;
