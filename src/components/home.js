import React from 'react'
import "./home.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Home() {
  return (
    <div>
      <div className='bg'>
        <div className='bgt'>
          {/* <img src={portfilo} className='w-100'/> */}
          <div className='text-center center'>
            <h1 className='text-light hi'>Hi,</h1>
            <h3 className='text-light '>I am Mahadhyut</h3>
            <div className='btns'>
              <a href='./project'><button type="button bt" className="btn btn-warning mt-3 me-4"><h4>Projects</h4></button></a>
             <button type="button bt" className="btn btn-success mt-3"><h4>Contact</h4></button>
            </div>
          </div>
        </div>
      </div>
      <div id='about' className='mt-5'>
        <div className='text-center mb-2'>
          <h2 className='text-danger'>About Me</h2>
          <h5>---Who i am---</h5>
        </div>
        <div className='row mt-4 text-center'>
          <div className='col-lg-4'>
            <img width={300} height={350} src={require("../images/self port.jpeg")} />
          </div>
          <div className='col-lg-8 mt-5'>
            <p className='text-center mb-3 p-4ipconfig'>Highly motivated and skilled Front-end Developer with a strong background in Machine Learning.
              Proficient in HTML, CSS, JavaScript, and various front-end frameworks, with a proven track record of
              delivering user-friendly and visually appealing websites and applications. Experienced in building and
              training machine learning models for various applications, with a keen eye for detail and a passion for finding innovative solutions.
              Developed and maintained various websites and applications using HTML, CSS, JavaScript, and React.</p>
            <button type='button' className='btn btn-danger'><h5>Download CV</h5></button>
          </div>
        </div>
      </div>


      <div  id='skills' className='mt-5  mb-5 pb-5 tech bg-dark text-light '>
        <h2 className='text-center pt-4 pb-5'>Technical Skills</h2>
        {/*  */}

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className='d-flex ms-5 align-items-center py-3'>
                <div className='cpb'>
                  <CircularProgressbar value={60} text={`${60}%`} />
                </div>
                <h4 className='ps-4'>programming Languages</h4>
              </div>
              <h6 className='pt-3'>programming Languages include OOPs concepts through C++, Basics in Java</h6>
              </div>
            </div>

            <div class="carousel-item">
            <div className='d-flex justify-content-center align-items-center'>
              <div className='d-flex ms-5 align-items-center py-3'>
                <div className='cpb'>
                  <CircularProgressbar value={70} text={`${70}%`} />
                </div>
                <h4 className='ps-4'>Machine Learning</h4>
              </div>
            </div>
            </div>
            <div class="carousel-item ">
              <div className='justify-content-center flex-column d-flex align-items-center'>
              <div className='d-flex align-items-center py-3'>
                <div className='cpb'>
                  <CircularProgressbar value={60} text={`${60}%`} />
                </div>
                <h4 className='ps-4'>Front-end development </h4>
              </div>
              <h6 className='pt-4'>My skills in Front-end development include HTML, CSS, BOOTSTRAP, React js </h6>
            </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Home