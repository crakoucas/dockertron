import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Root from './containers/Root';

import './app.global.css';

const history = createHashHistory();
const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

render(
  <AppContainer>
    <Root history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
