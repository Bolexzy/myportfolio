import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div
      className="flex flex-col justify-between  w-full tracking-wide leading-relaxed"
      id="about"
    >
      <div className="flex flex-col items-center ">
        <h2 className="text-4xl font-bold tracking-widest">ABOUT ME</h2>
        <svg height="50" width="50" className="-mt-9">
          <g fill="none" stroke="black" stroke-width="6">
            <path stroke-linecap="round" d="M5 40 l215 0" />
          </g>
          Sorry, your browser does not support inline SVG.
        </svg>
        <span className="text-slate-500 text-2xl max-w-7xl text-center mt-8">
          I am a passionate and experienced software developer specializing in
          building high-quality web and mobile applications.
        </span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-24 gap-x-16">
        <div className=" max-w-none lg:max-w-4xl flex flex-col justify-between text-left mb-12">
          <h3 className="text-3xl font-bold tracking-widest">
            Get to Know me!
          </h3>
          <p className="text-2xl font-medium mt-5 text-slate-400">
            I have a strong background in various programming languages, having
            a deep understanding of software development principles and best
            practices. I try to keep up with security and best practices, and am
            always looking for new things to learn.
          </p>
          <p className="text-2xl font-medium mt-5 text-slate-400">
            I've got a wide range of interests that contribute to my holistic
            approach to software development. I am passionate about exploring
            emerging technologies and innovations, as well as solving complex
            problems through creative solutions. Continuous learning is a
            driving force for me, as I strive to stay updated with the latest
            advancements in the tech industry.
          </p>

          <a className="mt-12 text-2xl" href="/#contact">
            <button
              className=" inline-block text-black bg-white rounded-lg
          focus-outline-none focus:ring-2 focus:ring-[#050708]/50
          hover:text-gray-600 -translate-y-1 active:translate-y-0
          hover:border-blue-500 border hover:border-gray-50 shadow py-6 px-16"
            >
              Contact
            </button>
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold tracking-wides mb-12">My Skills</h3>
          <ul
            class={`${styles.skills_btn} flex flex-wrap cursor-default text-xl `}
          >
            <li>Project Manager</li>
            <li>Digital Marketer</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>Python</li>
            <li>React</li>
            <li>C</li>
            <li>Flask</li>
            <li>Ruby</li>

            <li>....</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
