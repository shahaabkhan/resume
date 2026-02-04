import React from 'react'

const Projects = () => {
  return (
    <>
      <dev className="container text-center text-white ">
        <h1 className='fw-bold'>PROJECTS</h1>
        <p>Here are some of the projects I’ve worked on using React and other web technologies.</p>
        <div className="row">
            <div className="col projects mt-5">
                <h1>MyShop</h1>
                <img src="./images/11.jpg" alt="" /><br />
                <button className='btn btn-primary mt-3'> <a href="https://www.daraz.pk/#?" target='blank'> Click To Open URL</a></button>
            </div>
            <div className="col projects mt-5">
                <h1>Resume</h1>
                <img src="./images/12.webp" alt="" />
                <button className='btn btn-primary mt-3'> <a href="https://iridescent-douhua-aca78b.netlify.app" target='blank'> Click To Open URL</a></button>
            </div>
            <div className="col projects mt-5">
                <h1>Project 3</h1>
                <img src="./images/iphone17.jpg" alt="" />
                <button className='btn btn-primary mt-3'> <a href="https://www.google.com/search?q=iphone+17&rlz=1C1KNTJ_enPK1040PK1040&oq=iphone+17&gs_lcrp=EgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgYIARBFGEAyBwgCEAAYgAQyDQgDEAAYgwEYsQMYgAQyDQgEEAAYgwEYsQMYgAQyCggFEAAYsQMYgAQyDQgGEAAYgwEYsQMYgAQyCggHEAAYsQMYgATSAQg2OTQ5ajBqN6gCCLACAfEFvwDv2J6Kt3w&sourceid=chrome&ie=UTF-8" target='blank'> Click To Open URL</a></button>
            </div>
        </div>
      </dev>
    </>
  )
}

export default Projects





















// import React from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./Projects.css"; // We'll add some custom styles here

// const Projects = () => {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description: "A responsive portfolio website built using React and Bootstrap.",
//       img: "1.jpg",
//       tech: "React, Bootstrap",
//       github: "https://github.com/yourusername/portfolio",
//       demo: "https://yourportfolio.com",
//     },
//     {
//       title: "Weather App",
//       description: "A simple weather app that fetches live data using a public API.",
//       img: "123.png",
//       tech: "React, OpenWeather API",
//       github: "https://github.com/yourusername/weatherapp",
//       demo: "https://weatherapp-demo.com",
//     },
//     {
//       title: "Todo List",
//       description: "A task management app built with React Hooks for daily productivity.",
//       img: "https://via.placeholder.com/400x250",
//       tech: "React, CSS",
//       github: "https://github.com/yourusername/todoapp",
//       demo: "https://todoapp-demo.com",
//     },
//   ];

//   return (
//     <section id="projects" className="projects-section text-white">
//       <div className="container">
//         <h2 className="text-center fw-bold mb-4">My Projects</h2>
//         <p className="text-center text-light mb-5">
//           Here are some of the projects I’ve worked on using React and other web technologies.
//         </p>
//         <div className="row">
//           {projects.map((project, index) => (
//             <div className="col-md-4 mb-4" key={index}>
//               <div className="card project-card h-50 shadow-lg border-0">
//                 <img
//                   src={project.img}
//                   className="card-img-top"
//                   alt={project.title}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title fw-bold">{project.title}</h5>
//                   <p className="card-text text-secondary">{project.description}</p>
//                   <p><strong>Tech:</strong> {project.tech}</p>
//                 </div>
//                 <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
//                   <a
//                     href={project.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-light btn-sm fw-bold"
//                   >
//                     Live Demo
//                   </a>
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-light btn-sm fw-bold"
//                   >
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

