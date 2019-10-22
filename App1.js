import * as React from 'react';
import RootNavigator from './RootNavigator';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/Index';
import ReduxThunk from 'redux-thunk';

export default class App1 extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, {}, applyMiddleware(ReduxThunk))}>
        <RootNavigator />
      </Provider>
    );
  }
}
