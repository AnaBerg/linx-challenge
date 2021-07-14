import { toast } from 'react-toastify';

import HeaderButton from './HeaderButton';

import './Header.css';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const handleAlgorithmHelp = () => {
    toast('É só preencher o formulário abaxio 😉', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleNoProducts = () => {
    toast.warning('Não há nenhum produto disponível', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="header-container">
        <div className="text-container">
          <h3>uma seleção de produtos</h3>
          <h1>especial para você</h1>
          <p>
            Todos os produtos desta lista foram selecionados a partir da sua
            navegação. Aproveite!
          </p>
        </div>
        <div className="grid">
          <HeaderButton onClick={() => window.open('https://www.linx.com.br/')}>
            Conheça a Linx
          </HeaderButton>
          <HeaderButton onClick={() => handleAlgorithmHelp()}>
            Ajude o algorítimo
          </HeaderButton>
          <HeaderButton onClick={() => handleNoProducts()}>
            Seus produtos
          </HeaderButton>
          <HeaderButton
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/ana-paula-loureiro-berg-61263b1a1/'
              )
            }
          >
            Compartilhe
          </HeaderButton>
        </div>
      </div>
      <div className="header-triangle" />
    </>
  );
};

export default Header;
