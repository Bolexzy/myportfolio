"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between items-center">
      <Hero />
      <div className="px-10 lg:px-48 mt-48">
        <About />
        <Projects />
      </div>
    </main>
  );
}
