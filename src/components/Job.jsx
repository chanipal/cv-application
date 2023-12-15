import React from 'react';
import PropTypes from 'prop-types';

import WorkIcon from '@mui/icons-material/Work';

const Job = ({ setJob }) => {
  const [jobTitle, setJobTitle] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [description, setDescription] = React.useState('');

  const updJob = () => {
    const jobInfo = { jobTitle, company, startDate, endDate, description };
    setJob(jobInfo);
  };

  return (
    <div className='form'>
      <div className='form-heading'>
        <WorkIcon className='icon' />
        <h2>Experience</h2>
      </div>

      <form id='job-form'>
        <label>
          Job Title
          <input type='text' value={jobTitle} onChange={e => setJobTitle(e.target.value)}/>
        </label>
        <label>
          Company
          <input type='text' value={company} onChange={e => setCompany(e.target.value)}/>
        </label>
        <label className='date-input'>
          Start Date
          <input type='date' value={startDate} onChange={e => setStartDate(e.target.value)}/>
        </label>
        <label className='date-input'>
          End Date
          <input type='date' value={endDate} onChange={e => setEndDate(e.target.value)}/>
        </label>
        <label>
          Description
          <textarea value={description} onChange={setDescription} />
        </label>
        <button type='button' onClick={updJob}>Save</button>
      </form>
    </div>
  );
};

Job.propTypes = {
  setJob: PropTypes.func
}

export default Job;
