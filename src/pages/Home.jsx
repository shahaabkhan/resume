import React from 'react'
// import img from '../../public/images'

const Home = () => {
  return (
    <>
      <div className="container-fluid home">
        <div className="row">
            <div className="col-1 firstcol text-white">
                {/* <ul>
                    <li>fb</li>
                    <li>insta</li>
                    <li>linkdin</li>
                    <li>github</li>
                </ul> */}
            </div>
            <div className="col-8 secondcol">
                <p className='text-white'>Hi, I'm <span className='text-info'> &nbsp;Shahab Khan</span></p>
                <h1 className='text-info'>Web Developer</h1>
                <p className='para text-white' >A React Developer specializes in building fast, responsive, and user-friendly web applications using React.js. Skilled in JavaScript, HTML, CSS, and modern frameworks, they create reusable components, manage state efficiently, and integrate APIs to deliver high-quality front-end solutions.</p>
                <button className='btn btn-success mb-5 mt-3'>Hire Me</button>
                <button className='btn btn-primary mb-5 ms-3 mt-3'> <a href="http://localhost:5173/projects">View Projects</a> </button>
            </div>
            <div className="col-3 thrdcol">
                <img src="/images/shahab (2).jpeg" alt="img not found"  className='mt-5' />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
