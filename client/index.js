import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore from './store/configureStore';
import {render} from 'react-dom';
import routes from './routes';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

const Root = () => {
  return (
    <Provider store={store}>
      {routes}
    </Provider>
  );
};

render(
  <AppContainer component={Root} />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(Root, () => {
    render(
      <AppContainer component={Root} />,
      document.getElementById('root')
    );
  });
}
