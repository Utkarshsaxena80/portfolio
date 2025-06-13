import React from 'react';
import { Database, Code, Layers, Zap, Shield, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Blockchain Development",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "Solidity", level: 95 },
        { name: "Rust", level: 88 },
        { name: "Web3.js/Ethers.js", level: 92 },
        { name: "Hardhat/Foundry", level: 90 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "React/Next.js", level: 94 },
        { name: "TypeScript", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Three.js", level: 75 }
      ]
    },
    {
      title: "Backend & Infrastructure",
      icon: <Layers className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Docker", level: 82 },
        { name: "AWS/GCP", level: 78 }
      ]
    },
    {
      title: "DeFi Protocols",
      icon: <Zap className="w-8 h-8" />,
      skills: [
        { name: "Uniswap V3", level: 90 },
        { name: "Aave", level: 85 },
        { name: "Compound", level: 88 },
        { name: "1inch", level: 82 }
      ]
    },
    {
      title: "Security & Auditing",
      icon: <Shield className="w-8 h-8" />,
      skills: [
        { name: "Smart Contract Auditing", level: 85 },
        { name: "Formal Verification", level: 78 },
        { name: "Fuzzing", level: 80 },
        { name: "Static Analysis", level: 82 }
      ]
    },
    {
      title: "Blockchain Networks",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "Ethereum", level: 95 },
        { name: "Polygon", level: 90 },
        { name: "Arbitrum", level: 88 },
        { name: "Optimism", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expertise across the entire Web3 development stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-blue-400 group-hover:text-purple-400 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;