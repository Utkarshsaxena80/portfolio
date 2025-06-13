
import { Code2, Cpu, Globe, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Smart Contract Development",
      description: "Expert in Solidity, Rust, and advanced blockchain protocols"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "DeFi Innovation",
      description: "Building next-generation financial primitives and yield strategies"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full-Stack dApps",
      description: "Creating seamless Web3 experiences with modern frontend frameworks"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Implementing robust security practices and comprehensive testing"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about building the infrastructure for tomorrow's decentralized world
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 1 year of experience in blockchain development, I specialize in creating 
              robust, scalable Web3 solutions that bridge the gap between traditional finance and 
              decentralized systems. My journey began with Bitcoin's whitepaper and has evolved 
              into building production-ready protocols used by thousands of users.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm particularly passionate about DeFi innovation, having contributed to multiple 
              high-TVL protocols and pioneered novel mechanisms for yield optimization and 
              risk management. My approach combines deep technical knowledge with a user-first 
              mindset to create intuitive yet powerful decentralized applications.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Solidity', 'Rust', 'TypeScript', 'React', 'Node.js', 'Ethereum', 'Polygon', 'Arbitrum'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;