
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

//to fetch data by redux - https://stackoverflow.com/questions/48178468/fetching-data-from-api-in-react-native-using-redux
//https://medium.com/personal-project/fetching-an-api-using-redux-and-useeffect-f23813a863f5
// add languages
