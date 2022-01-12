import React from 'react'

function Footer() {
    const location = window.location.hostname;
    return (
        <div className='bg-light text-dark text-center p-3 fixed-bottom'>Copyright &copy; 2021 {location}</div>
    )
}

export default Footer
