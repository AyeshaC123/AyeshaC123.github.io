// src/components/DarkUndergroundWebsite.jsx
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DarkUndergroundWebsite = () => {
  useEffect(() => {
    gsap.utils.toArray('.fade-slide-in').forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink via-gray-900 to-pink text-white font-mono">
      {/* Glitch effect overlay */}
      <div className="fixed inset-0 bg-black opacity-5 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-900 opacity-10"></div>
      </div>

  {/* Sticky Navigation */}
  <nav className="sticky top-0 bg-black bg-opacity-80 backdrop-blur border-b border-gray-800 z-30 flex justify-between items-center p-6 fade-slide-in">
        <div className="text-xl font-bold tracking-widest">
          <span className="text-[#ff1f8f]">VOID</span>
          <span className="text-gray-400">Moon</span>
        </div>
        <div className="flex space-x-8">
          {['home', 'about', 'gallery', 'tools', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => {
                const element = document.getElementById(section);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="uppercase tracking-wider text-sm hover:text-pink-500 text-gray-400 transition-colors"
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto p-8 pt-16 relative z-20">
        {/* Home Section */}
        <section id="home" className="section fade-slide-in">
          <div className="flex flex-col items-center justify-center h-96">
            <h1 className="text-6xl font-bold mb-4 text-center tracking-wider">
              Ayesha Chaudhry
            </h1>
            <p className="text-xl text-gray-400 mb-8 tracking-widest">
              // Welcome to my Digital Realm //
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <div onClick={() => {
                const element = document.getElementById('gallery');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }} className="border border-gray-800 p-6 bg-gray-900 bg-opacity-40 hover:bg-opacity-60 transition-all cursor-pointer">
                <h3 className="text-pink-500 text-xl mb-2 tracking-wider">LATEST RELEASE</h3>
                <p className="text-gray-400">Explore my newest projects.</p>
              </div>
              <div onClick={() => {
                const element = document.getElementById('tools');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }} className="border border-gray-800 p-6 bg-gray-900 bg-opacity-40 hover:bg-opacity-60 transition-all cursor-pointer">
                <h3 className="text-pink-500 text-xl mb-2 tracking-wider">Portfolio</h3>
                <p className="text-gray-400">Navigate through my experiences and resume.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section fade-slide-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 tracking-wider text-center">
              ABOUT
            </h2>
            <div className="border border-gray-800 p-8 bg-gray-900 bg-opacity-40">
              <p className="text-xl text-gray-300 mb-6">
                // A little bit about me //
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-pink-500 text-xl tracking-wider">MANIFESTO</h3>
                  <p className="text-gray-400">
                    Hi, i'm Ayesha! That's Aye like EYE and Sha like GUASHA. I'm a senior computer science student attending The College of New Jersey. I'm a software engineer, web developer, and digital artist. I'm passionate about creating innovative solutions specifically in the world of accessibility and exploring the digital realm. I'm always looking for new opportunities to be creative and grow. I'm excited to share my journey with you! Let's connect and create something amazing together!
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <h3 className="text-pink-500 text-xl tracking-wider">INTERESTS</h3>
                  <p className="text-gray-400">
                  My interests lie in digital art and animation, as well as exploring the intersection of AI and creativity through discussions on its integration within artistic mediums. I’m deeply inspired by Studio Ghibli films, enjoy playing classical piano music, and find joy in dissecting Persian and Arabic poetry for their rich layers of meaning and emotion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {/* Gallery Section */}
        <section id="gallery" className="section fade-slide-in">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 tracking-wider text-center">
              PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => {
                let projectName = "";
                switch (item) {
                  case 1:
                    projectName = "NextGenHire";
                    break;
                  case 2:
                    projectName = "PACTALK";
                    break;
                  case 3:
                    projectName = "WayfindingSystems";
                    break;
                  case 4:
                    projectName = "ArmInArm";
                    break;
                  case 5:
                    projectName = "Sustainability";
                    break;
                  default:
                    projectName = "Coming Soon";
                }
                return (
                  <div
                    key={item}
                    className="aspect-square border border-gray-800 bg-gray-900 bg-opacity-40 relative overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute inset-0 flex items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-pink-900 bg-opacity-30 pt-8">
                      <p className="text-white text-xl tracking-widest">{projectName}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-gray-800 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="tools" className="section fade-slide-in">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-5xl font-bold mb-8 tracking-wider text-center">
      TOOLS AND TECHNOLOGIES
    </h2>
    <div className="border border-gray-800 p-8 bg-gray-900 bg-opacity-40">
      <p className="text-xl text-gray-300 mb-6">// My Tech Stack //</p>
      <p className="text-xl text-gray-300 mb-6">
        I have experience in the following tools and technologies:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {[
          { name: 'JavaScript', icon: 'devicon-javascript-plain' },
          { name: 'React', icon: 'devicon-react-original' },
          { name: 'Node.js', icon: 'devicon-nodejs-plain' },
          { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
          { name: 'Git', icon: 'devicon-git-plain' },
          { name: 'HTML5', icon: 'devicon-html5-plain' },
          { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
          { name: 'Java', icon: 'devicon-java-plain' },
          { name: 'SpringBoot', icon: 'devicon-spring-plain' },
          { name: 'Apache Kafka', icon: 'devicon-apachekafka-plain' },
          { name: 'CosmoDB', icon: 'devicon-azure-plain' },
          { name: 'Python', icon: 'devicon-python-plain' },
          { name: 'Ruby', icon: 'devicon-ruby-plain' },
          { name: 'Kotlin', icon: 'devicon-kotlin-plain' },
        ].map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-2 hover:scale-105 transform transition duration-300 animate-float"
          >
            <i className={`${tool.icon} text-5xl text-pink-500`}></i>
            <p className="text-gray-400 text-sm">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


        {/* Contact Section */}
        <section id="contact" className="section fade-slide-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 tracking-wider text-center">
              CONNECT
            </h2>
            <div className="border border-pink-800 p-8 bg-gray-900 bg-opacity-40">
              <p className="text-xl text-gray-300 mb-8 text-center">
                Join us in the depths of the digital abyss.
              </p>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="bg-black border border-gray-800 p-4 text-white placeholder-gray-600 focus:border-pink-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="bg-black border border-gray-800 p-4 text-white placeholder-gray-600 focus:border-pink-500 focus:outline-none"
                />
                <textarea
                  placeholder="YOUR MESSAGE"
                  rows={5}
                  className="bg-black border border-gray-800 p-4 text-white placeholder-gray-600 focus:border-pink-500 focus:outline-none"
                ></textarea>
                <button className="bg-pink-900 hover:bg-pink-800 text-white py-4 px-8 tracking-wider self-start">
                  TRANSMIT
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 p-6 mt-48 text-gray-500 text-sm tracking-wider relative z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div>© 2025 VOID CORP</div>
          <div className="flex space-x-4"></div>
        </div>
      </footer>
    </div>
  );
};

export default DarkUndergroundWebsite;
