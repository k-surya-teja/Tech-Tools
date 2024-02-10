import React from 'react';
import { Box } from "@mui/material";
import { Facebook,LinkedIn,Twitter,Instagram,GitHub,Email, } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {

    const iconStyle = {
        color: '#595959',
        margin: '15px',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    }
    
    return (
        <Box>
            <br />
            <hr color='#363636' />
            <br />
            <p className='text-center'>Follow us on : </p>
            <Box sx={{height:'1.4cm'}} className='text-center'>
                <a href='https://www.facebook.com/klakshmi.suryateja' target="_blank" rel="noopener noreferrer" style={{ ...iconStyle }} onMouseEnter={(e) => e.target.style.color = '#333'} onMouseLeave={(e) => e.target.style.color = '#595959'}><Facebook /></a>
                <a href='https://www.linkedin.com/in/k-lakshmi-surya-teja-8b0124247/' target="_blank" rel="noopener noreferrer" style={{ ...iconStyle }} onMouseEnter={(e) => e.target.style.color = '#333'} onMouseLeave={(e) => e.target.style.color = '#595959'}><LinkedIn /></a>
                <a href='https://github.com/k-surya-teja' target="_blank" rel="noopener noreferrer" style={{ ...iconStyle }} onMouseEnter={(e) => e.target.style.color = '#333'} onMouseLeave={(e) => e.target.style.color = '#595959'}><GitHub /></a>
                <a href='mailto:klsteja1612@gmail.com' target="_blank" rel="noopener noreferrer" style={{ ...iconStyle }} onMouseEnter={(e) => e.target.style.color = '#333'} onMouseLeave={(e) => e.target.style.color = '#595959'}><Email /></a>
                <a href='https://www.instagram.com/nombre_es_surya/' target="_blank" rel="noopener noreferrer" style={{ ...iconStyle }} onMouseEnter={(e) => e.target.style.color = '#333'} onMouseLeave={(e) => e.target.style.color = '#595959'}><Instagram /></a>
                <a href="https://twitter.com/klsteja" target='_blank' rel="noopener noreferrer" style={{ ...iconStyle }} onMouseEnter={(e) => e.target.style.color = '#333'} onMouseLeave={(e) => e.target.style.color = '#595959'}><Twitter/> </a>
            </Box>

            <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <Link to='/' style={{ color: '#363636',textDecoration:'none' }}> Built with ❤️ by Surya </Link>
            </div>
        </Box>
    );
}
