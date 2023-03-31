import React from 'react'
import './footer.css'
import { BsGithub } from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import {AiFillLinkedin} from 'react-icons/ai'
function footer() {
  return (
    <div className='ftback'>
        <h1  className='mb-5 d-flex justify-content-center align-items-center mt-5 pt-4 pb-3'>You can Contact Me</h1>
        <div className='d-flex justify-content-center align-content-center'>
        <h5 className=' ms-1 me-5'><a href='https://mail.google.com/mail/u/0/#inbox' className='text-danger'><SiGmail/></a> Email</h5>
        <h5 className='me-5'><a href='https://github.com/mahadhyut09' className='text-dark'><BsGithub/></a> GitHub</h5>
        <h5><a href='https://www.linkedin.com/in/mahadhyut-samudrala-342238238/'><AiFillLinkedin/></a> Linkedin</h5>
        </div>
        <br></br>
        <h4 className='d-flex justify-content-center text-align-center'> My mobile number is: 9347972342</h4>
    </div>
  )
}

export default footer