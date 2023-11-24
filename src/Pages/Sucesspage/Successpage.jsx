import React from 'react';
import { Link } from 'react-router-dom';
import './Successpage.scss';

const Successpage = () => {
  return (
    <div className='successimage_wrapper'>
      <div className="image">
        <img src="success.png" alt="" />

        <Link to='/'>
          <button className='goback'>Go back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Successpage;
