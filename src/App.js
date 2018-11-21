import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import AddingObjectContainer from './components/AddingObjectContainer'
import ObjectDetailContainer from './components/ObjectDetailContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/home"  exct component={Home} />
          <Route path="/sell" exact component={AddingObjectContainer} />
          <Route path="/object/:id" exact component={ObjectDetailContainer} />

        </div>
      </Provider>
    );
  }
}

export default App;