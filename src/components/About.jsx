import React from 'react';
import { useProjects } from '../hooks/useProjects';

const About = () => {
  const { currentMode } = useProjects();

  const aboutTexts = {
    0: "I'm a product designer who blends research, interaction design, and visual craft to create useful digital experiences.",
    1: "I'm a full-stack developer passionate about building robust, scalable applications with modern technologies and best practices.",
    2: "I'm a digital marketing specialist focused on data-driven strategies that drive growth and engagement across multiple channels.",
    3: "I'm a graphic designer creating compelling visual identities and brand experiences that resonate with target audiences."
  };

  return (
    <section id="about" className="responsive-section py-24 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-heading text-5xl font-bold text-center mb-16">About Me</h2>
        <div className="about-layout grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden">
            <img 
              src="/images/my pics update.jpeg" 
              alt="Profile" 
              className="about-photo w-full"
            />
          </div>
          <div className="space-y-8 text-lg text-zinc-300">
            <p>{aboutTexts[currentMode]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
