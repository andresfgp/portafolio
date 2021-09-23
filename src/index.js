import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import image from './image';

const initialState = {
  'user': {},
  'portfolio1': [
    { 'id': 1,
      'nameWeb': 'Platzi Videos',
      'imgWeb': image.platzivideos,
      'urlWeb': 'https://platzivideos.netlify.app',
    },
    { 'id': 2,
      'nameWeb': 'Web Badges',
      'imgWeb': image.webBadges,
      'urlWeb': 'https://andresfgp.github.io/web-badges/',
    },
    { 'id': 3,
      'nameWeb': 'Things to Do',
      'imgWeb': image.todoMachine,
      'urlWeb': 'https://andresfgp.github.io/todo-machine/',
    },
  ],
  'portfolio2': [
    {
      'id': 1001,
      'year': 20181230,
      'title': 'Basic and detailed engineering',
      'company': 'Empresas publicas de Medellín (EPM)',
      'dateStart': '2018/01/15',
      'dateEnd': '2018/12/30',
      'description': 'Basic and detailed engineering consulting of the control and protection systems related to (Level 2).',
      'image': image.epm,
      'imageCountry': image.colombia,
    }, {
      'id': 1002,
      'year': 20210211,
      'title': 'Pallata Substation 220 kV',
      'company': 'MRP',
      'dateStart': '2021/01/02',
      'dateEnd': '2021/02/11',
      'description': 'Design, testing and commissioning of the electrical substation control system (level 2).',
      'image': image.mrp,
      'imageCountry': image.chile,
    }, {
      'id': 1003,
      'year': 20210615,
      'title': 'Giga Factory Texas Substations',
      'company': 'Tesla',
      'dateStart': '2021/04/15',
      'dateEnd': '2021/06/15',
      'description': 'Interactions with clients in technical aspects. Testing and commissioning of substation projects.',
      'image': image.tesla,
      'imageCountry': image.usa,
    }, {
      'id': 1004,
      'year': 20201115,
      'title': 'Design new substations',
      'company': 'ELECTRICARIBE',
      'dateStart': '2020/02/01',
      'dateEnd': '2020/11/15',
      'description': 'Design of the electrical substations control system (level 2). Programming and testing (FAT).',
      'image': image.electricaribe,
      'imageCountry': image.colombia,
    }, {
      'id': 1005,
      'year': 20191215,
      'title': 'Design new substations',
      'company': 'SAESA',
      'dateStart': '2019/07/01',
      'dateEnd': '2019/12/15',
      'description': 'Design of the electrical substations control system (level 2). Programming and testing (FAT).',
      'image': image.saesa,
      'imageCountry': image.chile,
    }, {
      'id': 1006,
      'year': 20190720,
      'title': 'Río Toltén Substation 220 kV',
      'company': 'SAESA',
      'dateStart': '2019/04/01',
      'dateEnd': '2019/07/20',
      'description': 'Design of the electrical substation control system (level 2). Programming and testing (FAT).',
      'image': image.saesa,
      'imageCountry': image.chile,
    }, {
      'id': 1007,
      'year': 20190601,
      'title': 'Barrancabermeja Substation ',
      'company': 'ESSA',
      'dateStart': '2019/05/02',
      'dateEnd': '2019/06/01',
      'description': 'Testing and commissioning of the electrical substation control system (level 2).',
      'image': image.essa,
      'imageCountry': image.colombia,
    }, {
      'id': 1008,
      'year': 20190330,
      'title': 'Buritica Substation 110 kV',
      'company': 'CONTINENTALGOLD',
      'dateStart': '2018/12/01',
      'dateEnd': '2019/03/30',
      'description': 'Desing, testing and commissioning of the electrical substation control system (level 2).',
      'image': image.continental,
      'imageCountry': image.colombia,
    },
  ],
  'certificate': [
    {
      'id': 2001,
      'year': 20200723,
      'date': '2020/07/23',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'ASYNCHRONISM WITH JAVASCRIPT',
      'urlCertificate': image.diploma1,
    },
    {
      'id': 2002,
      'year': 20200515,
      'date': '2020/05/15',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'JAVASCRIPT COURSE',
      'urlCertificate': image.diploma2,
    },
    {
      'id': 2003,
      'year': 20200624,
      'date': '2020/06/24',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'ESCMASCRIPT 6+',
      'urlCertificate': image.diploma3,
    },
    {
      'id': 2004,
      'year': 20200502,
      'date': '2020/05/02',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'FRONTEND DEVELOPER',
      'urlCertificate': image.diploma4,
    },
    {
      'id': 2005,
      'year': 20200616,
      'date': '2020/06/16',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'JAVASCRIPT BASIC',
      'urlCertificate': image.diploma5,
    },
    {
      'id': 2006,
      'year': 20210811,
      'date': '2021/08/11',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'NODE.JS BASIC',
      'urlCertificate': image.diploma6,
    },
    {
      'id': 2007,
      'year': 20200701,
      'date': '2020/07/01',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'WEB ONLINE DEVELOPER',
      'urlCertificate': image.diploma7,
    },
    {
      'id': 2008,
      'year': 20210413,
      'date': '2021/04/13',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'JAVASCRIPT PROFESSIONAL',
      'urlCertificate': image.diploma8,
    },
    {
      'id': 2009,
      'year': 20210825,
      'date': '2021/08/25',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'NPM PACKAGE',
      'urlCertificate': image.diploma9,
    },
    {
      'id': 2010,
      'year': 20200423,
      'date': '2020/04/23',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'PREWORK: DEVELOPING GOOD PRACTICE',
      'urlCertificate': image.diploma10,
    },
    {
      'id': 2011,
      'year': 20200415,
      'date': '2020/04/15',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'BASIC PROGRAMMING',
      'urlCertificate': image.diploma11,
    },
    {
      'id': 2012,
      'year': 20210628,
      'date': '2021/06/28',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'REACT JS',
      'urlCertificate': image.diploma12,
    },
    {
      'id': 2013,
      'year': 20210722,
      'date': '2021/07/22',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'REACT ROUTER AND REDUX',
      'urlCertificate': image.diploma13,
    },
    {
      'id': 2014,
      'year': 20210825,
      'date': '2021/08/25',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'CLOSURES AND SCOPE JAVASCRIPT',
      'urlCertificate': image.diploma14,
    },
    {
      'id': 2015,
      'year': 20210507,
      'date': '2021/05/07',
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'WEBPACK',
      'urlCertificate': image.diploma15,
    },
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, initialState, composeEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
