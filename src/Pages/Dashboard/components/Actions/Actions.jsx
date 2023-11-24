import React from 'react';
import './Actions.scss';
import { Link } from 'react-router-dom';

const Actions = () => {
  return (
    <div className='Actions_container'>
      <div className="Actions">
        <div className="box">
          <Link to='/Transfer'>Withdraw</Link>
        </div>
        <div className="box">Save</div>
        <div className="box">Giftout</div>
        <div className="box">Invest</div>
      </div>
    </div>
  );
}

export default Actions;
