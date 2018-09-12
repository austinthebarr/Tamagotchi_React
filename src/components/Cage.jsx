import React from 'react';
import PropTypes from 'prop-types';
import CageImg from '../assets/images/cage.jpg';

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
    </div>
  );
};

export default Cage;