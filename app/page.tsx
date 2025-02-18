'use client';

import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import { useState, useEffect, useRef } from 'react';
import './walletConfig'
interface TerminalLine {
  type: 'bot' | 'user' | 'terminal' | 'success'; 
  content: string;
}

export default function Home() { 
  const [currentStep, setCurrentStep] = useState(0);
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  const demoSequence: TerminalLine[] = [
    { type: 'bot', content: "Hi! I'm your AI developer. What would you like to build?" },
    { type: 'user', content: "Create a full-stack e-commerce platform with React and Node.js" },
    { type: 'bot', content: "I'll help you build that e-commerce platform. Let me break this down and handle everything." },
    { type: 'terminal', content: "🤔 Analyzing project requirements..." },
    { type: 'terminal', content: "📋 Breaking down components needed:" },
    { type: 'terminal', content: "  • User authentication system" },
    { type: 'terminal', content: "  • Product catalog" },
    { type: 'terminal', content: "  • Shopping cart" },
    { type: 'terminal', content: "  • Payment processing" },
    { type: 'terminal', content: "  • Order management" },
    { type: 'bot', content: "I've analyzed the requirements. Let me start setting up the development environment." },
    { type: 'terminal', content: "> Initializing development workspace..." },
    { type: 'terminal', content: "> Setting up Git repository..." },
    { type: 'terminal', content: "> Installing dependencies..." },
    { type: 'bot', content: "Now I'll create the frontend with React." },
    { type: 'terminal', content: "> Creating React.js frontend structure..." },
    { type: 'terminal', content: "> Setting up Tailwind CSS for styling..." },
    { type: 'terminal', content: "> Implementing responsive layouts..." },
    { type: 'terminal', content: "> Creating component library..." },
    { type: 'bot', content: "Frontend is ready. Moving on to the backend setup." },
    { type: 'terminal', content: "> Configuring Node.js backend..." },
    { type: 'terminal', content: "> Setting up Express server..." },
    { type: 'terminal', content: "> Implementing JWT authentication..." },
    { type: 'terminal', content: "> Creating RESTful API routes..." },
    { type: 'bot', content: "Now setting up the database and connections." },
    { type: 'terminal', content: "> Initializing PostgreSQL database..." },
    { type: 'terminal', content: "> Creating database schema..." },
    { type: 'terminal', content: "> Setting up migrations..." },
    { type: 'terminal', content: "> Implementing data models..." },
    { type: 'bot', content: "Almost done! Setting up deployment and testing." },
    { type: 'terminal', content: "> Configuring deployment pipeline..." },
    { type: 'terminal', content: "> Running test suites..." },
    { type: 'terminal', content: "> Optimizing performance..." },
    { type: 'terminal', content: "> Deploying to production..." },
    { type: 'success', content: "✨ Development complete!" },
    { type: 'success', content: "🚀 Your e-commerce platform is live at: https://your-store.demo" },
    { type: 'bot', content: "Your e-commerce platform is ready! I've implemented all core features with best practices and security measures." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < demoSequence.length) {
        const step = demoSequence[currentStep];
        setTerminalLines(prev => [...prev, step]);
        setCurrentStep(prev => prev + 1);
        
        // Scroll to bottom
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      } else {
        // Reset after a longer delay
        setTimeout(() => {
          setCurrentStep(0);
          setTerminalLines([]);
        }, 3000);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentStep]);

  return (
    <AppLayout>
      <div className="relative min-h-[600px] flex flex-col items-center justify-center p-8 bg-gradient-to-b from-black/40 to-transparent overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          <div className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-float" style={{ top: '20%', left: '10%' }} />
          <div className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-float-delayed" style={{ top: '60%', left: '80%' }} />
          <div className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-float" style={{ top: '80%', left: '30%' }} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 text-transparent bg-clip-text tracking-tight">
            BANANA<span className="text-white">AI</span>
            </h1>
            <p className="mt-4 text-xl text-gray-400 font-light">
              Just describe what you want to build. Our AI agents will handle the rest.
            </p>
          </div>

          {/* Terminal Window */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-lg blur-sm group-hover:blur transition duration-300" />
            <div className="relative bg-black/80 backdrop-blur-xl rounded-lg border border-white/10 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-75 hover:opacity-100 transition-opacity" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-75 hover:opacity-100 transition-opacity" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-75 hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-yellow-400/90 font-mono">Banana_ai@localhost:~</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-yellow-400/90 px-2 py-1 rounded-md bg-yellow-400/10 border border-yellow-400/20">
                    AGENTS: 2 ACTIVE
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div 
                ref={terminalRef}
                className="p-6 font-mono text-sm space-y-2 h-[40vh] overflow-y-auto scrollbar-hide flex flex-col"
              >
                <div className="flex-1">
                  {terminalLines.map((line, i) => (
                    <div key={i} className={`
                      font-mono text-sm mb-2
                      ${line.type === 'bot' ? 'text-yellow-400' : ''}
                      ${line.type === 'user' ? 'text-amber-400' : ''}
                      ${line.type === 'terminal' ? 'text-[#666]' : ''}
                      ${line.type === 'success' ? 'text-green-400' : ''}
                    `}>
                      {line.type === 'terminal' && !line.content.startsWith('  ') && <span className="text-green-400">{">"} </span>}
                      {line.content}
                    </div>
                  ))}
                </div>
                <div className="text-yellow-400 animate-pulse">_</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Link
              href="/agents"
              className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-black font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/sites"
              className="px-6 py-2.5 bg-black/40 hover:bg-black/60 text-yellow-400 font-medium rounded-lg border border-yellow-400/30 transition-all duration-200 transform hover:scale-105"
            >
              View Demos
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
} 