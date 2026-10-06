import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="responsive-section py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-heading text-5xl font-bold text-center mb-16">Skills & Experience</h2>
        <div className="skills-layout grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-semibold mb-8">Expertise</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span>UI/UX & Prototyping</span>
                  <span>95%</span>
                </div>
                <div className="h-2.5 bg-zinc-800 rounded-full">
                  <div className="h-full w-[95%] bg-pink-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Full-Stack Development</span>
                  <span>88%</span>
                </div>
                <div className="h-2.5 bg-zinc-800 rounded-full">
                  <div className="h-full w-[88%] bg-cyan-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Digital Marketing & SEO</span>
                  <span>92%</span>
                </div>
                <div className="h-2.5 bg-zinc-800 rounded-full">
                  <div className="h-full w-[92%] bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Graphic Design & Branding</span>
                  <span>96%</span>
                </div>
                <div className="h-2.5 bg-zinc-800 rounded-full">
                  <div className="h-full w-[96%] bg-violet-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-8">Experience</h3>
            <div className="space-y-10">
              <div className="border-l-4 border-pink-500 pl-6">
                <div className="font-medium">Freelance Creative Director</div>
                <div className="text-sm text-zinc-500">2023 – Present</div>
              </div>
              <div className="border-l-4 border-cyan-400 pl-6">
                <div className="font-medium">Full-Stack Developer</div>
                <div className="text-sm text-zinc-500">2023 – present</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
