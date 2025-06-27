
import { ExternalLink, Github, TrendingUp, Shield } from 'lucide-react';
import proxyImage from '../public/image.png'; // adjust path if needed
import prr from "../public/2.png"

const Projects = () => {
  const projects = [
    {
      title: "Hedgr",
      description: "Advanced hedge fund protocol with automated strategies and risk-adjusted returns.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Solidity", "React", "Web3.js", "Ethereum", "Polygon"],
      icon: <TrendingUp className="w-6 h-6" />,
      liveUrl: "https://hedgr-frontend-c8sy.vercel.app/",
      githubUrl: "https://github.com/Utkarshsaxena80/hedgr-Frontend",
      featured: true
    },
    {
      title: "ChainGive",
      description: "Built a decentralized donation platform that enables cross-chain charitable giving, allowing users to donate crypto from any supported blockchain and have it bridged securely to the NGO's preferred chain",
      image: prr,
      tags: [ "Solidity", "TypeScript"],
      icon: <Shield className="w-6 h-6" />,
      liveUrl: "https://ngo-frontend-nine.vercel.app/",
      githubUrl: "https://github.com/Utkarshsaxena80/NGO-FRONTEND",
      featured: true
    },
    
      {
      title: "MultiThreaded Proxy server in C",
      description: "Built to understand how browsers communicate under the hood, how network requests are routed, and how to manage concurrent client connections using system-level APIs.",
      image: proxyImage,
      tags: [ "C"],
      icon: <Shield className="w-6 h-6" />,
      liveUrl: "/#",
      githubUrl: "https://github.com/Utkarshsaxena80/proxy-multithreaded-webserver-C",
      featured: true
    },
    
   
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building the future of finance, one protocol at a time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'md:flex' : 'block'}`}>
                <div className={`relative overflow-hidden ${project.featured ? 'md:w-1/2' : 'w-full'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-2 bg-blue-500/20 backdrop-blur-sm rounded-lg text-blue-400">
                    {project.icon}
                  </div>
                </div>

                <div className={`p-6 ${project.featured ? 'md:w-1/2 flex flex-col justify-between' : 'flex-1'}`}>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;