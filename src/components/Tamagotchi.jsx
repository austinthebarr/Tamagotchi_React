import React from 'react';
import PropTypes from 'prop-types';

const Tamagotchi = (props) => {
  return(
    <div className='style container'>
      <style jsx>{`
    .style{
    background-color: #eef;
    }

    .list {
      list-style-type: none;
      display: flex;
      justify-content:space-between;
    }
    
    `}</style>
      <h2>Tamagotchi</h2>
      <h4>Play: {props.play}</h4>
      <h4>Food: {props.food}</h4>
      <h4>Sleep: {props.sleep}</h4>
      <hr/>
      <ul className='list'>
        <li><button className='btn btn-danger'>Play with Your Tama</button></li>
        <li><button className='btn btn-danger'>Feed</button></li>
        <li><button className='btn btn-danger'>Allow it to Sleep</button></li>
      </ul>
     
    </div> 
  );
};


Tamagotchi.propTypes = {
  play: PropTypes.number.isRequired,
  food: PropTypes.number.isRequired,
  sleep: PropTypes.number.isRequired
};


export default Tamagotchi;