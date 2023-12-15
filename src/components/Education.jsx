import React from 'react';
import PropTypes from 'prop-types';

import SchoolIcon from '@mui/icons-material/School';

const Education = ({ setEducation }) => {
  const [degree, setDegree] = React.useState('');
  const [school, setSchool] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const updEducation = () => {
    const educationInfo = { degree, school, city, country, startDate, endDate };
    setEducation(educationInfo);
  }

  return (
    <div className='form'>
      <div className='form-heading'>
        <SchoolIcon className='icon' />
        <h2>Education</h2>
      </div>

      <form id='education-form'>
        <label>
          Degree
          <input type='text' value={degree} onChange={e => setDegree(e.target.value)}/>
        </label>
        <label>
          School
          <input type='text' value={school} onChange={e => setSchool(e.target.value)}/>
        </label>
        <label>
          City
          <input type='text' value={city} onChange={e => setCity(e.target.value)}/>
        </label>
        <label>
          Country
          <input type='text' value={country} onChange={e => setCountry(e.target.value)}/>
        </label>
        <label className='date-input'>
          Start Date
          <input type='date' value={startDate} onChange={e => setStartDate(e.target.value)}/>
        </label>
        <label className='date-input'>
          End Date
          <input type='date' value={endDate} onChange={e => setEndDate(e.target.value)}/>
        </label>
        <button type='button' onClick={updEducation}>Save</button>
      </form>
    </div>
  );
};

Education.propTypes = {
  setEducation: PropTypes.func
};

export default Education;
