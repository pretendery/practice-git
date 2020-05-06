import { createElement } from 'react';
import { render } from 'react-dom';

import Main from './components/Main';

const rootEle = document.getElementById('root');

render(createElement(Main), rootEle);
