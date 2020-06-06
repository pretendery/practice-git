// import 'react-hot-loader';
import React, { createElement } from 'react';
import { render } from 'react-dom';

import Test from './components/Test';

const rootEle = document.getElementById('root');

render(createElement(React.StrictMode, null, createElement(Test)), rootEle);
