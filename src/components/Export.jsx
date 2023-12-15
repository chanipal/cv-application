import html2pdf from 'html2pdf.js';

const Export = () => {
  /**
   * Turns the Resume preview into a PDF.
   */
  const createPDF = () => {
    const content = document.getElementById('resume');
    const opt = {
      filename:     'resume.pdf',
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

export default Export;