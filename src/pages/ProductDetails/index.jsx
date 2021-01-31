import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import './product-details.scss';
import Head from '../../components/Head';
import Loading from '../../components/Loading';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError(null);
        const { data } = await axios.get(
          `https://ranekapi.origamid.dev/json/api/produto/${id}`
        );
        setProduct(data);
      } catch (error) {
        setError('Não foi possível carregar as informações.');
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  return (
    <section id="product-details" className="anime-left">
      <div id="content">
        {loading && <Loading />}
        {error && (
          <p>
            <h1>{error}</h1>
          </p>
        )}
        {product && (
          <>
            <Head title={product.nome} />

            <div id="images-list">
              {product.fotos.map((image) => (
                <img key={image.src} src={image.src} alt={image.titulo} />
              ))}
            </div>

            <div id="product-infos">
              <h1>{product.nome}</h1>
              <span>R$ {product.preco}</span>
              <p>{product.descricao}</p>
            </div>
          </>
        )}
        <div id="buttons">
          <Link to="/">Voltar</Link>
        </div>
      </div>
    </section>
  );
}
