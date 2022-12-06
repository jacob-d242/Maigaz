import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import RootNavigation from './src/navigation/RootNavigation';
import reducers from './src/screens/store/index';
import { NativeBaseProvider } from "native-base";
export default function App() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
    <NativeBaseProvider>
      <Provider store={store} >
      <RootNavigation/>
      </Provider>

    </NativeBaseProvider>
  );
};
