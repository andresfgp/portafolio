import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/App.scss';
import '../assets/styles/components/Home.scss';
import Hero from '../components/Hero';
import Portfolio1 from '../components/Portfolio1';
import Portfolio2 from '../components/Portfolio2';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Certificate from '../components/Certificate';
import Contact from '../components/Contact';
import About from '../components/About';

const Home = (props) => {
  const { portfolio1, portfolio2, certificate } = props;

  return (
    <div className='home'>
      <Hero />
      <Categories title='About' id='about' isAbout>
        <div className='home__about'>
          <About />
        </div>
      </Categories>
      {portfolio1.length > 0 && (
        <Categories title='Work done as a Frontend Developer!' id='portfolio' isPortfolio1>
          <div className='home__portfolio1'>
            {
              portfolio1.map((item) => (
                <Portfolio1
                  key={item.id}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...item}
                />
              ))
            }
          </div>
        </Categories>
      )}
      {portfolio2.length > 0 && (
        <Categories title='Work done as an Engineer!' isPortfolio2>
          {
            portfolio2.sort((a, b) => { return b.year - a.year; }).map((item) => (
              <Portfolio2
                key={item.id}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...item}
              />
            ))
          }
        </Categories>
      )}
      {certificate.length > 0 && (
        <Categories title='Certificates' id='certificates' isCertificate>
          <Certificate>
            {
              certificate.sort((a, b) => { return b.year - a.year; }).map((item) => (
                <CarouselItem
                  key={item.id}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...item}
                />
              ))
            }
          </Certificate>
        </Categories>
      )}
      <Categories id='contact' isContact>
        <Contact />
      </Categories>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    portfolio1: state.portfolio1,
    portfolio2: state.portfolio2,
    certificate: state.certificate,
  };
};

Home.propTypes = {
  portfolio1: PropTypes.array,
  portfolio2: PropTypes.array,
  certificate: PropTypes.array,
};
export default connect(mapStateToProps, null)(Home);
