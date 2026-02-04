import React from 'react'

let year = new Date().getFullYear()

const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col">
            <p className='text-center text-white pt-2'> &copy; {year}. All Right Reseved. <span className='text-danger'>&hearts;</span>  Designed And Developed by Shahab Khan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
