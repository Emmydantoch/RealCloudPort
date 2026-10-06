import React from 'react';

const Hero = () => {
  const skills = [
    'Product Design',
    'Full-stack Development',
    'Digital Marketing',
    'Graphics'
  ];

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center relative">
      <div className="hero-content max-w-6xl mx-auto px-6 text-center pt-20">
        <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6 leading-none tracking-tighter">
          I Create <span className="gradient-text">Beautiful</span> Digital Experiences
        </h1>
        <p className="text-2xl text-zinc-200 max-w-3xl mx-auto mb-12">
          Design, technology, and strategy for ideas worth sharing.
        </p>
        
        <div className="hero-skills-marquee mx-auto" role="region" aria-label="Skills and services">
          <style>{`
            @keyframes heroSkillsMarquee {
              to { transform: translateX(-50%); }
            }

            .hero-skills-marquee {
              width: min(100%, 58rem);
              overflow: hidden;
              border-block: 1px solid rgba(255, 255, 255, 0.35);
              padding: 1rem 0;
            }

            .hero-skills-track {
              display: flex;
              width: max-content;
              animation: heroSkillsMarquee 28s linear infinite;
            }

            .hero-skills-set {
              display: flex;
              flex: 0 0 auto;
              align-items: center;
            }

            .hero-skills-item {
              display: inline-flex;
              align-items: center;
              padding: 0 1.5rem;
              color: white;
              font-size: 0.875rem;
              font-weight: 700;
              text-transform: uppercase;
              white-space: nowrap;
            }

            .hero-skills-item::after {
              content: '\u2726';
              margin-left: 3rem;
              color: #f9a8d4;
            }

            .hero-skills-marquee:hover .hero-skills-track {
              animation-play-state: paused;
            }

            @media (max-width: 640px) {
              .hero-skills-marquee {
                padding: 0.75rem 0;
              }

              .hero-skills-track {
                animation-duration: 22s;
              }

              .hero-skills-item {
                padding: 0 1rem;
                font-size: 0.7rem;
              }

              .hero-skills-item::after {
                margin-left: 2rem;
              }
            }

            @media (min-width: 641px) and (max-width: 1024px) {
              .hero-skills-track {
                animation-duration: 25s;
              }

              .hero-skills-item {
                padding: 0 1.25rem;
                font-size: 0.8rem;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .hero-skills-track {
                animation: none;
                transform: none;
              }

              .hero-skills-set[aria-hidden='true'] {
                display: none;
              }
            }
          `}</style>
          <div className="hero-skills-track">
            {[false, true].map((isDuplicate) => (
              <div
                key={isDuplicate ? 'duplicate' : 'primary'}
                className="hero-skills-set"
                aria-hidden={isDuplicate}
              >
                {skills.map((skill) => (
                  <span key={skill} className="hero-skills-item">{skill}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
