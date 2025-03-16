// src/components/DarkUndergroundWebsite.jsx
import React, { useState } from 'react';

const DarkUndergroundWebsite = () => {
  const [currentSection, setCurrentSection] = useState('home');
  
  // Simulated content sections
  const sections = {
    home: {
      title: "Ayesha Chaudhry",
      subtitle: "// Welcome to my Digital Realm //",
    },
    about: {
      title: "ABOUT",
      content: "hi hi hi subtext.",
    },
    gallery: {
      title: "VISIONS",
      content: "Explore the visual manifestations of our digital existence.",
    },
    contact: {
      title: "CONNECT",
      content: "Join us in the depths of the digital abyss.",
    },
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Glitch effect overlay */}
      <div className="fixed inset-0 bg-black opacity-5 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-900 opacity-10"></div>
      </div>
      
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800 relative z-20">
        <div className="text-xl font-bold tracking-widest">
          <span className="text-pink-500">VOID</span>
          <span className="text-gray-400">Moon</span>
        </div>
        <div className="flex space-x-8">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              onClick={() => setCurrentSection(section)}
              className={`uppercase tracking-wider text-sm hover:text-pink-500 transition-colors ${
                currentSection === section ? 'text-pink-500' : 'text-gray-400'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>
      
      {/* Main content */}
      <main className="container mx-auto p-8 pt-16 relative z-20">
        {/* Hero section */}
        {currentSection === 'home' && (
          <div className="parallax" data-speed="0.2">
            <div className="flex flex-col items-center justify-center h-96">
              <h1 className="text-6xl font-bold mb-4 text-center tracking-wider fade-in">
                {sections.home.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8 tracking-widest">
                {sections.home.subtitle}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                <div className="border border-gray-800 p-6 bg-gray-900 bg-opacity-40 hover:bg-opacity-60 transition-all cursor-pointer roll-in">
                  <h3 className="text-pink-500 text-xl mb-2 tracking-wider">LATEST RELEASE</h3>
                  <p className="text-gray-400">Explore my newest projects.</p>
                </div>
                <div className="border border-gray-800 p-6 bg-gray-900 bg-opacity-40 hover:bg-opacity-60 transition-all cursor-pointer roll-in">
                  <h3 className="text-pink-500 text-xl mb-2 tracking-wider">COOL SIDE STUFF</h3>
                  <p className="text-gray-400">Navigate through my digital art and animations.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About section */}
        {currentSection === 'about' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 tracking-wider text-center">
              {sections.about.title}
            </h2>
            <div className="border border-gray-800 p-8 bg-gray-900 bg-opacity-40">
              <p className="text-xl text-gray-300 mb-6">
                {sections.about.content}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-pink-500 text-xl tracking-wider">MANIFESTO</h3>
                  <p className="text-gray-400">
                    I'll talk about myself here and the cool stuff i do yada yaday
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <h3 className="text-pink-500 text-xl tracking-wider">VISION</h3>
                  <p className="text-gray-400">
                    woao this is coming out cool ig
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery section */}
        {currentSection === 'gallery' && (
          <div className="parallax" data-speed="0.4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold mb-8 tracking-wider text-center">
                {sections.gallery.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="aspect-square border border-gray-800 bg-gray-900 bg-opacity-40 relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-pink-900 bg-opacity-30">
                      <p className="text-white text-xl tracking-widest">VISION {item}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-gray-800 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact section */}
        {currentSection === 'contact' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 tracking-wider text-center">
              {sections.contact.title}
            </h2>
            <div className="border border-gray-800 p-8 bg-gray-900 bg-opacity-40">
              <p className="text-xl text-gray-300 mb-8 text-center">
                {sections.contact.content}
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
        )}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 p-6 mt-16 text-gray-500 text-sm tracking-wider relative z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div>© 2025 VOID CORP</div>
          <div className="flex space-x-4">
            <span className="hover:text-pink-500 cursor-pointer">INSTAGRAM</span>
            <span className="hover:text-pink-500 cursor-pointer">TWITTER</span>
            <span className="hover:text-pink-500 cursor-pointer">DISCORD</span>
          </div>
        </div>
      </footer>

      {/* Vertical lines decoration */}
      <div className="fixed top-0 right-0 h-full w-16 pointer-events-none z-10">
        <div className="h-full w-px bg-green-500 opacity-20 ml-4"></div>
        <div className="h-full w-px bg-green-500 opacity-20 ml-6"></div>
        <div className="h-full w-px bg-green-500 opacity-20 ml-8"></div>
        <div className="h-full w-px bg-green-500 opacity-20 ml-10"></div>
      </div>
      
      {/* Horizontal lines decoration */}
      <div className="fixed bottom-0 right-0 h-16 w-64 pointer-events-none z-10">
        <div className="w-full h-px bg-pink-500 opacity-20 mb-4"></div>
        <div className="w-full h-px bg-pink-500 opacity-20 mb-6"></div>
        <div className="w-full h-px bg-pink-500 opacity-20 mb-8"></div>
        <div className="w-full h-px bg-pink-500 opacity-20 mb-10"></div>
      </div>
    </div>
  );
};

export default DarkUndergroundWebsite;
