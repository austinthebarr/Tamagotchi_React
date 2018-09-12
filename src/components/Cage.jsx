import React from 'react';
import PropTypes from 'prop-types';
import CageImg from '../assets/images/cage.jpg';

import Tamagotchi from './Tamagotchi';

const Cage = (props) => {
  return(
    <div className='background col-md-12'>
      <style jsx>
        {`
        .background{
          background-image: url(${CageImg});
          height: 100vh;
        }
        `}
      </style>
      <Tamagotchi play={props.play} food={props.food} sleep={props.sleep}/>
    </div>
  );
};

Cage.propTypes = {
  play: PropTypes.number.isRequired,
  food: PropTypes.number.isRequired,
  sleep: PropTypes.number.isRequired
};

export default Cage;