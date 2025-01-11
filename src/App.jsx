import React, { useState } from 'react';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect!</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/ayesha-chaudhry1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                www.linkedin.com/in/ayesha-chaudhry1
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">GitHub</h3>
              <a 
                href="https://github.com/AyeshaC123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                github.com/AyeshaC123
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</h3>
              <a 
                href="mailto:chaudha1@tcnj.edu"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                chaudha1@tcnj.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
         {/* <h2 className="text-2xl font-semibold text-purple-600">Ayesha</h2> */}
          <div className="space-x-6">
            <button className="text-gray-600 hover:t ext-purple-600 transition-colors">About</button>
            <button className="text-gray-600 hover:text-purple-600 transition-colors">Portfolio</button>
            <button className="text-gray-600 hover:text-purple-600 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-gray-800 leading-tight">
              Welcome to 
              <span className="text-purple-600 block">Ayesha's Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Creating beautiful digital experiences with passion and precision. 
              Let's bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <button 
                className="px-8 py-3 bg-purple-600 text-white rounded-lg 
                           hover:bg-purple-700 transition-colors shadow-lg"
              >
                View My Work
              </button>
              <button 
                onClick={() => setShowModal(true)}
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 
                           rounded-lg hover:bg-purple-50 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-90">
            <div className="space-y-6">
              <div className="flex justify-center">
                <span className="text-5xl">👩‍💻</span>
              </div>
              <h3 className="text-2xl font-semibold text-center text-gray-800">
                Featured Projects
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-600">Project 1</h4>
                  <p className="text-sm text-gray-600">Web Development</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-600">Project 2</h4>
                  <p className="text-sm text-gray-600">UI/UX Design</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600">Project 3</h4>
                  <p className="text-sm text-gray-600">Mobile App</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600">Project 4</h4>
                  <p className="text-sm text-gray-600">Data Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />

      {/* Footer */}
      <footer className="bg-white shadow-sm mt-16 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          © 2025 Ayesha's Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;