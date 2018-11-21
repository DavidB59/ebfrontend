import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import AddingObjectContainer from './components/AddingObjectContainerContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/sell" exact component={AddingObjectContainer} />

        </div>
      </Provider>
    );
  }
}

export default App;