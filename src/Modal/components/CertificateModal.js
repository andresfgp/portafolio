import React from 'react';
import '../assets/styles/components/CertificateModal.scss';

const CertificateModal = (props) => {
  const { setOpenModal, urlCertificate } = props;
  const handleOnClick = () => {
    setOpenModal(false);
  };
  return (
    <div className='CertificateModal'>
      <img src={urlCertificate} alt='' />
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        className='button'
        onClick={handleOnClick}
      >
        +
      </button>
    </div>
  );
};

export default CertificateModal;
