import React from 'react';
import '../assets/styles/components/Skills.scss';

const Skills = () => {

  // window.addEventListener('scroll', () => {
  //   const animation = document.getElementById('myprogressBar');
  //   const positionObj = animation.getBoundingClientRect().top;
  //   console.log(positionObj);
  //   const sizeScreen = window.innerHeight / 3;

  //   if (positionObj < sizeScreen) {
  //     console.log(animation.style);
  //     animation.style.animation = 'load 3s normal forwards';
  //   }
  // });

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
              <h4>HTML</h4>
              <div id='Progress_Status'>
                <div id='myprogressBar' style={{ width: '90%' }} />
              </div>
            </li>
            <li>
              <h4>CSS/SASS</h4>
              <div id='Progress_Status'>
                <div id='myprogressBar' style={{ width: '80%' }} />
              </div>
            </li>
            <li>
              <h4>JAVASCRIPT</h4>
              <div id='Progress_Status'>
                <div id='myprogressBar' style={{ width: '80%' }} />
              </div>
            </li>
            <li>
              <h4>REACT/REDUX</h4>
              <div id='Progress_Status'>
                <div id='myprogressBar' style={{ width: '75%' }} />
              </div>
            </li>
          </ul>
        </div>
        <div className='Skills__container-bar1'>
          <ul>
            <li>
              <h4>SQL SERVER</h4>
              <div id='Progress_Status'>
                <div id='myprogressBar' style={{ width: '35%' }} />
              </div>
            </li>
            <li>
              <h4>PYTHON</h4>
              <div id='Progress_Status'>
                <div id='myprogressBar' style={{ width: '60%' }} />
              </div>
            </li>
            <li>
              <h4>JAVA</h4>
              <div id='Progress_Status'>
                <div id='myprogressBar' style={{ width: '60%' }} />
              </div>
            </li>
            <li>
              <h4>C++</h4>
              <div id='Progress_Status'>
                <div id='myprogressBar' style={{ width: '60%' }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
