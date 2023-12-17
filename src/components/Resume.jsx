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
        <div className='section-container'>
          <div className='left-column'>
              <p>{education.startDate}-{education.endDate ? education.endDate : 'present'}</p>
              <p>{city}, {country}</p>
          </div>
          <div className='right-column'>
              <p>Degree: <span>{degree}</span></p>
              <p>{school}</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Experience</h2>
        <div className='section-container'>
          <div className='left-column'>
            <p>{job.startDate}-{job.endDate ? job.endDate : 'present'}</p>
            <p>{company}</p>
          </div>
          <div className='right-column'>
            <p>{jobTitle}</p>
            <p>{description}</p>
          </div>
        </div>
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
