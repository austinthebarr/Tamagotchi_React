import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Cage from './Cage';
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render(){
    return (
      <div>
      <Header />
      <Cage />
      </div>
    );
  }

}

export default App;