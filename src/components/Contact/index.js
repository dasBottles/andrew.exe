import React from 'react'
import Nav from 'react-bootstrap/Nav'
import './style.css'



// export const Contact = () => (
//   <div>
//     <FontAwesomeIcon icon="check-square" />
//     Your <a href='https://github.com/dasBottles' className='fab fa-github'/> is hot and ready!
//   </div>
// )


const Contact = () => {
    return (
        <div className='centered'>
            <div className='socialLinks'>
                <a href='https://github.com/dasBottles' className='fab fa-github' target='_blank'/>
                <a href='https://www.linkedin.com/in/andrew-rattanasack-4a1a6718b/' className="fab fa-linkedin" target='_blank'/>
            </div>
            
        </div>
    )
}

export default Contact
