import html2pdf from 'html2pdf.js';
import PropTypes from 'prop-types';

const Export = ({ name }) => {
  /**
   * Turns the Resume preview into a PDF.
   */
  const createPDF = () => {
    const fileName = name ? `${name} CV.pdf` : 'CV.pdf';
    const content = document.getElementById('resume');
    const opt = {
      filename:     fileName,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(content).save();
  };

  return (
    <div id='export'>
      <button type='button' onClick={createPDF}>Export to PDF</button>
    </div>
  );
};

Export.propTypes = {
  name: PropTypes.string
}

export default Export;