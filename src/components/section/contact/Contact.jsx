import { useState } from 'react';
import api from "../../../services/api";
import {
  Container,
  Section,
  DivIcons,
  MessageContainer,
  Message,
} from './style';
import FloatingText from '../../common/floatingText';
import Input from '../../common/Input';
import Textarea from '../../common/Textarea';
import Button from '../../common/Button';
import Linkedin from './img/linkedin.svg';

const inputs = [
  { type: 'text', placeholder: 'Nome', field: 'name' },
  { type: 'text', placeholder: 'Tipo de projeto', field: 'typeProject' },
  { type: 'email', placeholder: 'E-mail', field: 'email' },
];

function Contact() {
  const [payload, setPayload] = useState({
    name: '',
    typeProject: '',
    email: '',
    message: '',
  });
  const [notification, setNotification] = useState({ message: '', success: false });

  const handleInputChange = (field, value) => {
    setNotification({ message: '', success: false });
    setPayload((prevPayload) => ({
      ...prevPayload,
      [field]: value,
    }));
  };

  const handleTextareaChange = (value) => {
    setNotification({ message: '', success: false });
    setPayload((prevPayload) => ({
      ...prevPayload,
      message: value,
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      payload.name === '' ||
      payload.typeProject === '' ||
      payload.email === '' ||
      payload.message === ''
    ) {
      setNotification({
        message: 'Por favor, preencha todos os campos.',
        success: false
      });
      setTimeout(() => {
        setNotification({ message: '', success: false });
      }, 3000);
      return false;
    }

    if (!emailRegex.test(payload.email)) {
      setNotification({
        message: 'Por favor, digite um email válido.',
        success: false
      });
      setTimeout(() => {
        setNotification({ message: '', success: false });
      }, 3000);
      return false;
    }

    return true;
  };

  const submit = () => {
    if (!validateForm()) {
      return;
    }

    api
      .post('/contact', payload)
      .then((response) => {
        setNotification({ message: response.data.message, success: true });
        setTimeout(() => {
          setNotification({ message: '', success: false });
        }, 3000);
        setPayload({
          name: '',
          typeProject: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => {
        setNotification({ message: 'Ocorreu um erro ao enviar a mensagem.', success: false });
        setTimeout(() => {
          setNotification({ message: '', success: false });
        }, 3000);
        console.error(err);
      });
  };

  const handleButtonClick = () => {
    submit();
  };

  return (
    <Container className='container'>
      <Section className='row'>
        <div>
          <h2>Vamos trabalhar juntos!</h2>
          <p className='paragraph'>
            Entre em contato comigo por <strong className='emphasis'>e-mail</strong> ou por <br />
            minhas <strong className='emphasis'>redes sociais</strong>.
          </p>
          <DivIcons>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/felipe-bueno-a58912198/"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="linkedin" />
            </a>
          </DivIcons>
        </div>
        <div>
          {notification.message && (
            <MessageContainer>
              <Message success={notification.success.toString()}>
                {notification.message}
              </Message>
            </MessageContainer>
          )}
          {inputs.map((input) => (
            <Input
              key={input.placeholder}
              type={input.type}
              placeholder={input.placeholder}
              field={input.field}
              onInputChange={handleInputChange} 
              value={payload[input.field]}
            />
          ))}
          <Textarea
            placeholder="Digite sua mensagem"
            onTextareaChange={handleTextareaChange}
            value={payload.message}
          />
          <Button takeAction={handleButtonClick}>Enviar</Button>
        </div>
        {window.innerWidth > 768 && <FloatingText text="Contato" />}
      </Section>
    </Container>
  );
}

export default Contact;
