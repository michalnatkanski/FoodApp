
import React from 'react';
//components
import Navigator from './src/navigation/Navigator';
//redux
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducers/rootReducer';
import { createStore } from 'redux';

const store = createStore(rootReducer);

export default function App() {

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
