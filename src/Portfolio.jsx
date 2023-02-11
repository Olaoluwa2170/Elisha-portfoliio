import React, { useState } from 'react';

const Portfolio = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement('a');
    link.href = '/path/to/your/pdf/file.pdf';
    link.download = 'file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloading(false);
  };

  return (
    <div className='inline'>
      <button className='' onClick={handleDownload} disabled={downloading}>
        {downloading ? 'Downloading...' : 'Download CV'}
      </button>
    </div>
  );
};

export default Portfolio;


