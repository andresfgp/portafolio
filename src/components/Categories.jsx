import React from 'react';
import '../assets/styles/components/Categories.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Categories = (props) => { //children es un componente hijo que se pasa por medio de los props, el cual se llama directamente
  const { children, title, id, isSearch, isCertificate, isContact, isPortfolio1, isPortfolio2 } = props;

  const inputStyles = classNames('categories', {
    isSearch,
    isCertificate,
    isContact,
    isPortfolio1,
    isPortfolio2,
  });
  return (
    <div className={inputStyles}>
      <h2 className='categories__title' id={id}>{title}</h2>
      {children}
    </div>
  );
};

Categories.propTypes = {
  title: PropTypes.string,
};
export default Categories;
