import React from "react";

const About = () => {
  return (
    <>
      <div className="container about">
        <div className="row gap-3">
          <div className="col-2"></div>
          <div className="col text-center text-white pt-5">
            <p>
              I’m Shahab Khan, a passionate React Developer who enjoys building
              responsive and user-friendly websites. I work with HTML, CSS,
              JavaScript, Bootstrap, and React.js to create clean and efficient
              web applications. I focus on writing simple, maintainable code and
              always look for ways to improve my skills. My goal is to develop
              modern web solutions that are fast, attractive, and easy to use..
            </p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col shadow bg-primary text-white text-center rounded-3">
            <h1 className="text-center">Skills</h1>
            <p className="pt-2">
              I specialize in building responsive and dynamic user interfaces
              using HTML, CSS, JavaScript, Bootstrap, and React.js.
            </p>
          </div>
          <div className="col shadow bg-success text-white text-center ms-4 rounded-3">
            <h1>Experience</h1>
            <p className="text-center pt-2">
              I enjoy learning modern web technologies and continuously
              improving my skills to build better, faster, and more
              user-friendly websites.
            </p>
          </div>
          
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
            <div className="col bg-success text-white rounded-3 text-center">
            <h1 className="">Personal Touch</h1>
            <p className="pt-2">Outside of coding, I love exploring new design trends <br /> and working on creative side projects that challenge my problem-solving skills.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
