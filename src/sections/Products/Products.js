import { useEffect, useState } from 'react';

import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';

import { Button } from '../../components';

import { api } from '../../services/api';

import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(
    'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'
  );

  console.log(products);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        console.log(api);
        const response = await api.get(
          'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'
        );
        console.log('passou');
        setProducts(response.data.products);
        setUrl(response.data.nextPage);
      } catch (error) {
        console.error(error);
        toast.error(error, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setLoading(false);
    };
    getProducts();
  }, []);

  const handleMoreProducts = () => {
    const getMoreProducts = async () => {
      setLoading(true);
      try {
        const response = await api.get(`https://${url}`);
        setProducts([...products, ...response.data.products]);
        setUrl(response.data.nextPage);
      } catch (error) {
        console.error(error);
        toast.error(error, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setLoading(false);
    };
    getMoreProducts();
  };
  return (
    <div className="root">
      {loading ? (
        <ReactLoading type="spin" height={50} width={50} color="#888888" />
      ) : (
        <div className="products-container">
          {products?.map(
            ({
              id,
              name,
              image,
              oldPrice,
              price,
              description,
              installments,
            }) => {
              return (
                <div key={id} className="product">
                  <img
                    className="product-image"
                    alt="Imagem Produto"
                    src={image}
                  />
                  <div className="product-info">
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>De: R${oldPrice}</p>
                    <p>
                      <span>Por: R${price}</span>
                    </p>
                    <p>
                      ou {installments?.count}x de R${installments?.value}
                    </p>
                    <div className="button-container">
                      <Button>Comprar</Button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
      <div className="button-products-conteiner">
        <Button onClick={() => handleMoreProducts()}>
          Ainda mais produtos aqui!
        </Button>
      </div>
    </div>
  );
};

export default Products;
