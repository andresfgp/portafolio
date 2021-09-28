import React from 'react';
import '../assets/styles/components/Skills.scss';
import { ReactComponent as Html } from '../assets/static/logos/html.svg';
import { ReactComponent as Css } from '../assets/static/logos/css.svg';
import { ReactComponent as Sass } from '../assets/static/logos/sass.svg';
import { ReactComponent as Js } from '../assets/static/logos/js.svg';
import { ReactComponent as ReactLogo } from '../assets/static/logos/react.svg';
import { ReactComponent as Git } from '../assets/static/logos/git.svg';
import { ReactComponent as Mysql } from '../assets/static/logos/mysql.svg';
import { ReactComponent as Phyton } from '../assets/static/logos/python.svg';
import { ReactComponent as Cplusplus } from '../assets/static/logos/c++.svg';
import { ReactComponent as Java } from '../assets/static/logos/java.svg';

const Skills = () => {

  return (
    <section className='Skills'>
      <div className='Skills__container-text'>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>As a software developer, I fled from a traditional path and explored my skills, by trying on my own some languages ​​and frameworks / libraries. Software is more than just a tool, and I try to dig deep into it. Nowadays, I knack for critical thinking, empathy, and creativity to create viable and impactful solutions using these technologies.</p>
      </div>
      <div className='Skills__container-bar'>
        <div className='Skills__container-bar1'>
          <ul>
            <li>
              <ReactLogo className='Skills__container-barImg' id='reactLogo' />
            </li>
            <li>
              <Js className='Skills__container-barImg' />
            </li>
            <li>
              <Css className='Skills__container-barImg' />
            </li>
            <li>
              <Sass className='Skills__container-barImg' />
            </li>
            <li>
              <Html className='Skills__container-barImg' />
            </li>
          </ul>
        </div>
        <div className='Skills__container-bar1'>
          <ul>
            <li>
              <Git className='Skills__container-barImg' />
            </li>
            <li>
              <Mysql className='Skills__container-barImg' />
            </li>
            <li>
              <Phyton className='Skills__container-barImg' />
            </li>
            <li>
              <Cplusplus className='Skills__container-barImg' />
            </li>
            <li>
              <Java className='Skills__container-barImg' />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
