import React from 'react';
import '../App.css';

function Disclaimer() {
    return (
        <div style={{padding:'15px',color:'#363630',border:'1px solid white',backgroundColor:'#fffdd0',borderRadius:'10px'}}>
            <h3 className='heading'>Important Note:</h3>
            <p className='disclaimer'>
                Please be aware that Tech Tools provides links to various software downloads solely for informational purposes. We want to remind you that:
            </p>
            <ul className="disclaimer" style={{color:'#363636'}}>
                <li>Tech Tools does not develop, own, or distribute any of the software listed on our platform.</li>
                <li>Your decision to download and install any software is entirely voluntary and at your own risk.</li>
                <li>It's essential to carefully review the terms of use and license agreements provided by the software's developers or publishers before proceeding with the installation.</li>
                <li>While we strive to provide accurate and up-to-date information about the software, including descriptions and download links, we cannot guarantee its reliability or security.</li>
                <li>Any issues or damages that may arise from using the software are your responsibility, and Tech Tools cannot be held accountable.</li>
            </ul>
            <p className="disclaimer">
                Please exercise caution and discretion when downloading software from external sources. If you encounter any problems or have concerns, feel free to reach out to us, and we'll do our best to assist you.
            </p>
            <p className="note text-center">
                <b>By using our platform and downloading software, you agree to these terms.</b>
            </p>
        </div>
    );
}

export default Disclaimer;
