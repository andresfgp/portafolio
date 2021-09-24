import React from 'react';
import '../assets/styles/components/Portfolio1.scss';

const Portfolio1 = (props) => {

  const { nameWeb, imgWeb, urlWeb } = props;

  return (
    <section className='portfolio1'>
      <a className='portfolio1__link' href={urlWeb}>
        <div className='portfolio1__link-img'>
          <img src={imgWeb} alt={nameWeb} />
        </div>
        <div className='portfolio1__link-details'>
          <h3>{nameWeb}</h3>
        </div>
        <div className='portfolio1__link-details2' />
      </a>
    </section>
  );
};

export default Portfolio1;

