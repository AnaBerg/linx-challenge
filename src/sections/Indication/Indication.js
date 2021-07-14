import { useState } from 'react';

import { toast } from 'react-toastify';

import { Button, Input } from '../../components';

import { validateEmail, validateName } from '../../utils/formValidations';

import './Indication.css';
import 'react-toastify/dist/ReactToastify.css';

const Indication = () => {
  const [nameFriend, setNameFriend] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = validateEmail(email);
    const validName = validateName(nameFriend);

    if (validEmail && validName) {
      setNameFriend('');
      setEmail('');
      toast.success('Informações enviadas com sucesso!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('Informações não validas', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="indication-container">
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <form className="form-indication">
        <div className="form-indication-container">
          <div className="input-indication-container">
            <Input
              id="name_friend"
              label="Nome do seu amigo"
              placeholder="José"
              value={nameFriend}
              setValue={setNameFriend}
            />
          </div>
          <div className="input-indication-container">
            <Input
              id="email"
              label="E-mail"
              value={email}
              setValue={setEmail}
              placeholder="exemplo@emial.com"
            />
          </div>
        </div>
        <div className="button-indication-container">
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Enviar agora
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Indication;
