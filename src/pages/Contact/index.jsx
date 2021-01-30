import React from 'react';
import Head from '../../components/Head';

import image from '../../images/contato.jpg';

import './contact.scss';

export default function Contact() {
  return (
    <section className='anime-left'>
      <Head title='Ranek | Contato'/>
      <img src={image} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul>
          <li>teste@teste.com</li>
          <li>(00) 0000-0000</li>
          <li>Rua Teste, 000</li>
        </ul>
      </div>
    </section>
  );
}
