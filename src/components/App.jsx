import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Cage from './Cage';
import Dead from './Dead';
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      play: 100,
      food: 100,
      sleep: 100
    };
  }

  tamagotchiIsSlowlyDying(){
    this.setState({play: this.state.play - 1, food: this.state.food - 1, sleep: this.state.sleep - 1});
  }

  componentDidMount(){
    console.log(this);
    this.thing = setInterval(() =>
      this.tamagotchiIsSlowlyDying(),
    1000);
  }

  render(){
    if(this.state.food <= 0){
      return (<Dead />);
    } else {
      return (
        <div>
          <Header />
          <Cage play={this.state.play} food={this.state.food} sleep={this.state.sleep}/>
        </div>
      );
    }
  }

}

export default App;