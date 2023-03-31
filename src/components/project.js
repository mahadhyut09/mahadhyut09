import React from 'react'
import './project.css'
import {FiLink} from 'react-icons/fi'
function Project() {
  return (
    <div className='pro'>
      <div className='pgth text-light'>
        <div className='pgt text-light'>
          <div className='text-center center text-light st'>
            <h2 >Projects</h2>
            <h4>Some of my most recent works</h4>
          </div>
        </div>
      </div>

      <div className="card mt-5 d-flex justify-content-center text-center w-50" style={{width: "18rem"}}>
        <img className="card-img-top" src={require("../images/pro1.jpeg")} height="200px" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Animated E-learning website</h5>
          <p className="card-text">To deliver animated E-learning materials to students in government schools was our
           issue description. I utilised Bootstrap, Node.js, Mongo DB, React.js, and CSS. For each topic, I've uploaded 
           the relevant video content.</p>
          <a href="https://github.com/mahadhyut09/swebsite" className="btn btn-primary"><FiLink/>  Click here </a>
        </div>
      </div>

    </div>
  )
}

export default Project