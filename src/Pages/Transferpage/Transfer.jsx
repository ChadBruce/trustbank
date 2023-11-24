import React from 'react';
import './Transfer.scss';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Transfer = () => {
  return (
    <div className='transfer_wrapper'>
      <div className="transfer_header">
        <span> <i className="fas fa-shevron"></i> </span>
        <span>New USA Recipient</span>
        <span></span>
      </div>

      <div className="transferbody">
        <div className="bankname">
          <span> Bank Name</span>
          <input type="text" placeholder='Type Your Bank name' />
        </div>
        <div className="accountnumber">
          <span> Account Number</span>
          <input type="text"  placeholder='Enter Account Number'/>
        </div>
      </div>

      <div className="transferfooter">
      
        <Link to='/success'>
          <button className='transferbutton'>Transfer</button>
        </Link>
      </div>
    </div>
  );
};

export default Transfer;
