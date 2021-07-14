import { ToastContainer } from 'react-toastify';

import { Header, Footer, Separator } from '../components';
import { Information, Products, Indication } from '../sections';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Header />
      <Information />
      <Separator text="Sua seleção especial" />
      <Products />
      <Separator text="Compartilhe a novidade" />
      <Indication />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
