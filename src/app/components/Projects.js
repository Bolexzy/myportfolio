import React from "react";
import Image from "next/image";
import projects from "../data";


const Projects = () => {
  const projectElements = projects.map((project, index) => (
    <div
      key={index}
      className="flex flex-col lg:flex-row justify-center gap-x-32 gap-y-16 items-center p-16"
      data-aos="fade-up"
    >
      <div className=" max-w-none lg:max-w-4xl">
        <Image alt="project" src={`/${project.img}`} width={300} height={300} />
      </div>
      <div>
        <h3 className="text-3xl font-bold tracking-widest">{project.title}</h3>
        <p className="text-2xl font-medium mt-5 text-slate-400 mb-5">
          {project.description}
        </p>
        <a href={`/project/${project.id}`} className="mt-12 text-2xl">
          <button
            className=" inline-block text-black bg-white rounded-lg
    focus-outline-none focus:ring-2 focus:ring-[#050708]/50
    hover:text-gray-600 -translate-y-1 active:translate-y-0
    hover:border-blue-500 border hover:border-gray-50 shadow py-6 px-16"
          >
            More..
          </button>
        </a>
      </div>
    </div>
  ));

  return (
    <div
      className="flex flex-col justify-between w-full tracking-wide leading-relaxed mt-32"
      id="projects"
    >
      <div className="flex flex-col items-center " data-aos="fade-up">
        <h2 className="text-4xl font-bold tracking-widest">PROJECTS</h2>
        <svg height="50" width="50" className="-mt-9">
          <g fill="none" stroke="black" stroke-width="6">
            <path stroke-linecap="round" d="M5 40 l215 0" />
          </g>
          Sorry, your browser does not support inline SVG.
        </svg>
        <span className="text-slate-500 text-2xl max-w-7xl text-center mt-8 mb-32">
          I am a passionate and experienced software developer specializing in
          building high-quality web and mobile applications.
        </span>
      </div>

      {projectElements}
    </div>
  );
};

export default Projects;
