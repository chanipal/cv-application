import React from 'react';

import Preview from './components/Preview';
import General from './components/General';
import Education from './components/Education';
import Job from './components/Job';
import Header from './components/Header';
import Export from './components/Export';

function App() {
  const [general, setGeneral] = React.useState({});
  const [education, setEducation] = React.useState({});
  const [job, setJob] = React.useState({});

  return (
    <>
      <Header />
      <main>
        <div id='input-data'>
          <Export />
          <General setGeneral={setGeneral} />
          <Education setEducation={setEducation} />
          <Job setJob={setJob} />
        </div>

        <div>
          <Preview
            general={general}
            education={education}
            job={job}
          />
        </div>
      </main>
    </>
  );
}

export default App
