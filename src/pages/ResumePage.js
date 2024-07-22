import React from 'react';

const ResumePage = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <iframe
                src="/William Qi Resume.pdf"
                title="Resume"
                style={{
                    width: "80%", 
                    height: "80%", 
                    border: "none"
                }}
            >
                This browser does not support PDFs. Please download the PDF to view it: <a href="/resume.pdf">Download PDF</a>.
            </iframe>
        </div>
    );
};

export default ResumePage;
