import { useState } from 'react';

import { toast } from 'react-toastify';

import { Input, Button } from '../../components';

import {
  validateEmail,
  validateName,
  validateCpf,
} from '../../utils/formValidations';

import './Information.css';
import 'react-toastify/dist/ReactToastify.css';

const Information = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [sex, setSex] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = validateEmail(email);
    const validName = validateName(name);
    const validCpf = validateCpf(cpf);

    if (validEmail && validName && validCpf && (sex === 'm' || sex === 'f')) {
      setName('');
      setEmail('');
      setCpf('');
      setSex();
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
    <div className="information-container">
      <div className="text-information-container">
        <p>Ajude o algorítimo a ser mais certeiro</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris
          rhoncus erat sed interdum dignissim. Suspendisse semper pretium
          consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus
          quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia
          euismod augue vel egestas. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel
          urna tortor. Vivamus et arcu non felis tristique eleifend.
        </p>
        <p>
          Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum
          ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed,
          egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut
          neque mattis, consequat velit ut, ultrices orci. Nulla varius
          elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra,
          magna ac luctus commodo, odio ante suscipit libero, at mattis augue
          est vel metus.
        </p>
      </div>
      <div className="form-information-container">
        <form>
          <Input
            id="name"
            label="Nome"
            value={name}
            setValue={setName}
            placeholder="Maria"
          />
          <Input
            id="email"
            label="E-mail"
            value={email}
            setValue={setEmail}
            placeholder="exemplo@emial.com"
          />
          <Input
            id="cpf"
            label="CPF"
            value={cpf}
            setValue={setCpf}
            placeholder="000.000.000-00"
          />
          <div className="radio-container">
            <input
              type="radio"
              id="m"
              name="sex"
              value={sex}
              checked={sex === 'm'}
              onChange={() => setSex('m')}
            />
            <label htmlFor="m">Masculino</label>
            <input
              type="radio"
              id="f"
              name="sex"
              value={sex}
              checked={sex === 'f'}
              onChange={() => setSex('f')}
            />
            <label htmlFor="f">Feminino</label>
          </div>
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Information;
