//import React from 'react';
import { Github, Twitter, Linkedin,  Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
           Portfolio
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building the decentralized future with innovative blockchain solutions. 
              Specializing in DeFi protocols, smart contracts, and cutting-edge Web3 applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Utkarshsaxena80"
                className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/MetroRiser"
                className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/utkarsh-saxena-900b83293/"
                className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Smart Contracts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">DeFi Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">NFT Platforms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Web3 Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Utkarsh Saxena. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for the decentralized future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;