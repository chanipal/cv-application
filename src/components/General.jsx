import React from 'react';
import PropTypes from 'prop-types';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const General = ({ setGeneral }) => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');

  const updGeneral = () => {
    const generalInfo = { fullName, email, phone, address };
    setGeneral(generalInfo);
  }

  return (
    <div className='form'>
      <div className='form-heading'>
        <AccountCircleIcon className='icon' />
        <h2>General</h2>
      </div>

      <form id='general-form'>
        <label>
          Full Name
          <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label>
          Email
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone Number
          <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Address
          <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <button type='button' onClick={updGeneral}>Save</button>
      </form>
    </div>
  );
};

General.propTypes = {
  setGeneral: PropTypes.func
};

export default General;
