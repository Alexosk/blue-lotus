import React from 'react';
import PropTypes from 'prop-types';

const BreakfastPackage = ({
  headline,
  content,
  veganContent,
}) => {
  return (
    <div className='breakfast rounded mb-2'>
      <h4 className='text-center mb-2 font-weight-bold'>{headline}</h4>
      <ul>
      {this.props.list.map(function(listValue){
        return <li>{listValue}</li>;
      })}
      </ul>
      <h6 className='font-weight-light'>{content}</h6>
      <hr />
      <h6 className='font-weight-light'>{veganContent}</h6>
    </div>

    // <div className='breakfast rounded mb-2'>
    //   <h4 className='text-center mb-2 font-weight-bold'>Paket 1</h4>
    //   <h6 className='font-weight-light'>&#3866; Ostmacka <br/> &#3866; Kaffe/te</h6>
    //   <hr />
    //   <span>{badge}</span>
    //   <h6 className='font-weight-light'>{&#3866; Hummusmacka} <br/> &#3866; Kaffe/te</h6>
    // </div>
  );
};

BreakfastPackage.propTypes = {
  headline: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  veganContent: PropTypes.string.isRequired
}


export default BreakfastPackage;
