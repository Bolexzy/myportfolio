"use client";
import React from "react";
import projects from "../../data";
import Image from "next/image";
import styles from "../../components/About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const page = ({ params }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const id = params.id;
  const project = projects.find((project) => {
    return project.id === id ? project : "not found";
  });

  return (
    <section>
      <div className="w-full bg-[#E7D2B1]  p-12  flex flex-col lg:flex-row justify-between lg:justify-around items-center tracking-widest leading-loose text-3xl lg:p-24">
        <div className="flex flex-col lg:self-end order-last lg:order-first lg:max-w-3xl text-center w-full mt-5">
          <span className="font-semibold text-5xl" data-aos="fade-right">
            <h2 className="mt-5">{project.title}</h2>
          </span>
          <span className="text-xl text-gray-600 mt-12" data-aos="fade-left">
            <p>{project.description}</p>
          </span>
          <a
            href={`${project.liveLink}`}
            className="mt-12 text-2xl "
            data-aos="fade-up"
          >
            <button
              className=" inline-block text-black bg-white rounded-lg
    focus-outline-none focus:ring-2 focus:ring-[#050708]/50
    hover:text-gray-600 -translate-y-1 active:translate-y-0
    hover:border-blue-500 border hover:border-gray-50 shadow py-6 px-16"
            >
              Live Link
            </button>
          </a>
        </div>
      </div>
      <article>
        <div className="flex flex-col justify-center gap-16 items-center p-16">
          <div className=" max-w-none lg:max-w-4xl mb-12" data-aos="fade-up">
            <Image
              src={`/${project.img}`}
              width={300}
              height={300}
              alt="project"
            />
          </div>
          <div className="w-full lg:max-w-7xl" data-aos="fade-up">
            <h3 className="text-3xl font-bold tracking-widest capitalize mb-8">
              {project.title}
            </h3>
            <p className="text-2xl font-medium mt-5 text-slate-400 mb-5 lg:max-w-7xl">
              {project.details}
            </p>
          </div>
          <div className="w-full lg:max-w-7xl" data-aos="fade-up">
            <h3 className="text-3xl text-left font-bold tracking-widest capitalize mb-8">
              Tools used
            </h3>

            <ul
              className={`${styles.skills_btn} flex flex-wrap cursor-default text-xl lg:max-w-7xl `}
            >
              {project.tools.map((tool, index) => {
                return <li key={index}>{tool}</li>;
              })}
            </ul>
          </div>
          <div className="w-full lg:max-w-7xl" data-aos="fade-right">
            <h3 className="text-3xl text-left font-bold tracking-widest capitalize mb-8">
              See Live
            </h3>
            <div className="flex gap-8">
              <a href={`${project.liveLink}`} className="mt-12 text-2xl">
                <button
                  className=" inline-block text-black bg-white rounded-lg
    focus-outline-none focus:ring-2 focus:ring-[#050708]/50
    hover:text-gray-600 -translate-y-1 active:translate-y-0
    hover:border-blue-500 border hover:border-gray-50 shadow py-6 px-16"
                >
                  Live Link
                </button>
              </a>
              <a href={`${project.codeLink}`} className="mt-12 text-2xl">
                <button
                  className=" inline-block text-white bg-gray-700 rounded-lg
    focus-outline-none focus:ring-2 focus:ring-[#050708]/50
    hover:text-gray-600 -translate-y-1 active:translate-y-0
    hover:border-blue-500 border hover:border-gray-50 shadow py-6 px-16"
                >
                  Code Link
                </button>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default page;
