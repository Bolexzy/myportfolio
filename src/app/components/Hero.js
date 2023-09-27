import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="w-full bg-[#E7D2B1]  p-12  flex flex-col lg:flex-row justify-between lg:justify-around items-center tracking-widest leading-loose text-3xl lg:p-24">
      <div className="flex flex-col lg:self-end order-last lg:order-first lg:max-w-3xl text-left w-full mt-5">
        <span className="max-w-xl font-semibold text-5xl" data-aos="fade-up">
          <h2 className="mt-5">Software Developer,</h2>
          <h2 className="mt-5">Frontend Developer,</h2>
          <h2 className="mt-5">and Technical Writer</h2>
        </span>
        <span className="text-xl mt-12 text-gray-600" data-aos="fade-up">
          <p>
            A passionate and experienced software developer specializing in
            building high-quality web and mobile applications. With a strong
            background in various programming languages, having a deep
            understanding of software development principles and best practices.
            I try to keep up with security and best practices, and am always
            looking for new things to learn.
          </p>
        </span>
        <span className="mt-12 text-2xl" data-aos="fade-right">
          <a
            className="inline-block text-white bg-[#050708] rounded-lg
          focus-outline-none focus:ring-2 focus:ring-[#050708]/50
          hover:text-gray-50 -translate-y-1 active:translate-y-0
          hover:border-blue-500 border hover:border-gray-50 shadow py-2 px-4 mr-3"
            href="/#projects"
          >
            Projects
          </a>

          <a
            className="inline-block text-black bg-white rounded-lg
          focus-outline-none focus:ring-2 focus:ring-[#050708]/50
          hover:text-gray-600 -translate-y-1 active:translate-y-0
          hover:border-blue-500 border hover:border-gray-50 shadow py-2 px-4"
            href="https://bolexzy.hashnode.dev/"
            target="_blank"
          >
            Articles
          </a>
        </span>
      </div>
      <div
        className=" h-[auto] max-h-[300px] flex justify-center"
        data-aos="fade-left"
      >
        <Image
          width={300}
          height={200}
          src={"/boluwatife.png"}
          className={styles.hero_img}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Hero;
