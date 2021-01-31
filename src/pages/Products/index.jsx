import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Head from '../../components/Head';
import Loading from '../../components/Loading';

import './products.scss';

export default function Products() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          'https://ranekapi.origamid.dev/json/api/produto'
        );
        setProducts(data);
      } catch (error) {
        console.log(error);
        setError('Não foi possível carregar as informações.');
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <section id="products" className="anime-left">
      <Head title="Produtos" />
      {loading && <Loading />}
      {error && (
        <p>
          <h1>{error}</h1>
        </p>
      )}
      {products && (
        <section id="products-list">
          {products.map((product) => (
            <Link to={`/produtos/${product.id}`} key={product.id}>
              <div>
                <h1>{product.nome}</h1>
                <img src={product.fotos[0].src} />
              </div>
            </Link>
          ))}
        </section>
      )}
    </section>
  );
}
