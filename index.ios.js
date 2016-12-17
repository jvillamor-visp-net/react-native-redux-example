// Tutorial reference: https://medium.com/@dabit3/react-native-navigator-experimental-part-2-implementing-redux-c6acbf66eca1#.ml96dpur7

import React from 'react';
import { AppRegistry } from 'react-native';

import configureStore from './app/store/configureStore';
const store = configureStore();

import NavigationRootContainer from './app/containers/navRootContainer';
import { Provider } from 'react-redux'

const App = () => (
   <Provider store={store}>
      <NavigationRootContainer />
   </Provider>
)


AppRegistry.registerComponent('mobile', () => App);
