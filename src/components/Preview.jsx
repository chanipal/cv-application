import PropTypes from 'prop-types';
import Resume from './Resume';

const Preview = ({ general, education, job }) => {
  return (
    <div id='preview'>
      <Resume
        general={general}
        education={education}
        job={job}
      />
    </div>
  );
};

Preview.propTypes = {
  education: PropTypes.object,
  general: PropTypes.object,
  job: PropTypes.object
};

export default Preview;
