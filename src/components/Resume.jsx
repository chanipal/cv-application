import PropTypes from 'prop-types';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';

const Resume = ({ general, education, job }) => {
  const { fullName, email, phone, address} = general;
  const { degree, school, city, country } = education;
  const { jobTitle, company, description } = job;

  return (
    <div id='resume'>
      <div id='resume-header'>
        <h1>{fullName}</h1>
        <div>
          <div className='header-data'>
            <EmailIcon className='email-icon' />
            <span>{email}</span>
          </div>
          
          <div className='header-data'>
            <PhoneIcon className='phone-icon' />
            <span>{phone}</span>
          </div>

          <div className='header-data'>
            <HomeIcon className='address-icon'/>
            <span>{address}</span>
          </div>
        </div>
      </div>

      <div>
        <h2>Education</h2>
          <p>{degree}</p>
          <p>{school}</p>
          <p>{city}</p>
          <p>{country}</p>
          <p>{education.startDate}</p>
          <p>{education.endDate}</p>
      </div>
      <div>
        <h2>Experience</h2>
        <p>{jobTitle}</p>
        <p>{company}</p>
        <p>{job.startDate}</p>
        <p>{job.endDate}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

Resume.propTypes = {
  education: PropTypes.object,
  general: PropTypes.object,
  job: PropTypes.object
};

export default Resume;
