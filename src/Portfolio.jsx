// import React, { useState } from 'react';

// const Portfolio = () => {
//   const [downloading, setDownloading] = useState(false);

//   const handleDownload = () => {
//     setDownloading(true);
//     const link = document.createElement('a');
//     link.href = './assets/file/Elisha-Cv.pdf';
//     link.download = './assets/file/Elisha-Cv.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     setDownloading(false);
//   };

//   return (
//     <div className='inline'>
//       <button className='' onClick={handleDownload} disabled={downloading}>
//         {downloading ? 'Downloading...' : 'Download CV'}
//       </button>
//     </div>
//   );
// };

// export default Portfolio;


import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    fetch('./assets/file/Elisha-Cv.pdf')
      .then(res => res.blob())
      .then(blob => {
        setPdfUrl(URL.createObjectURL(blob));
      });
  }, []);

  return (
    <a href={pdfUrl} download>
      Download PDF
    </a>
  );
};

export default Portfolio;


