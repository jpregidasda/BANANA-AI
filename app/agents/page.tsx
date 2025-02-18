'use client';

import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { useEffect, useRef, useState } from 'react';

const agents = [
  {
    "id": "Banana-assistant",
    "name": "Banana 3D",
    "image": "/ai_assistant.svg",
    "role": "AI Development Partner",
    "version": "1.0.0",
    "description": "Your intelligent coding companion, specializing in full-stack development, debugging, and system architecture. Works seamlessly with you to bring your ideas to life.",
    "strengths": [
      "Full-stack development expertise",
      "Real-time collaboration",
      "Adaptive problem solving"
    ],
    "weaknesses": [
      "Requires clear context",
      "Learning your preferences"
    ],
    "skills": [
      { "name": "Full-Stack", "level": 95 },
      { "name": "Problem Solving", "level": 98 },
      { "name": "Code Quality", "level": 96 },
      { "name": "Documentation", "level": 94 }
    ],
    "stats": {
      "projects": "500+",
      "satisfaction": "98%"
    },
    "gradient": "from-yellow-500 via-amber-500 to-orange-500",
    "href": "/webthreeagent"
  },
  {
    "id": "web-wizard",
    "name": "Web Wizard",
    "image": "/web_wizard.svg",
    "role": "Web Development Specialist",
    "version": "1.0.0",
    "description": "A specialized web development assistant focused on creating modern, responsive, and performant web applications. Expert in frontend frameworks and backend integration.",
    "strengths": [
      "Modern web technologies",
      "Responsive design",
      "Performance optimization"
    ],
    "weaknesses": [
      "Limited to web development",
      "No mobile app expertise"
    ],
    "skills": [
      { "name": "Frontend", "level": 98 },
      { "name": "Backend", "level": 92 },
      { "name": "UI/UX", "level": 95 },
      { "name": "Performance", "level": 94 }
    ],
    "stats": {
      "websites": "200+",
      "performance": "95%"
    },
    "gradient": "from-amber-500 via-orange-500 to-yellow-500",
    "href": "/webappagent"
  }
];

export default function Agents() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-8">
        <div className="max-w-7xl mx-auto pt-1 pb-16">
          <div className="relative z-10">
            <h1 className="text-6xl font-bold mb-8 text-center text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-transparent bg-clip-text">
                Banana Assistant
              </span>
            </h1>
            <p className="text-gray-300 text-center mb-12 text-lg mx-auto">
              Your intelligent AI partner in development. Let's build something amazing together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {agents.map((agent) => (
              <Link
                key={agent.id}
                href={agent.href}
                className="transform transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`bg-gradient-to-r ${agent.gradient} p-[1px] rounded-2xl hover:shadow-lg hover:shadow-yellow-500/20`}>
                  <div className="bg-gray-900 p-6 rounded-2xl h-full">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-full md:w-1/3">
                        <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700">
                          <img
                            src={agent.image}
                            alt={agent.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{agent.name}</h3>
                          <p className="text-amber-400 mb-4">{agent.role} v{agent.version}</p>
                          <p className="text-gray-300 leading-relaxed">{agent.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-white font-semibold mb-3">Strengths</h4>
                            <ul className="space-y-2">
                              {agent.strengths.map((strength, index) => (
                                <li key={index} className="text-gray-300 flex items-center">
                                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                  {strength}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-white font-semibold mb-3">Skills</h4>
                            <div className="space-y-3">
                              {agent.skills.map((skill) => (
                                <div key={skill.name}>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-300">{skill.name}</span>
                                    <span className="text-amber-400">{skill.level}%</span>
                                  </div>
                                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"
                                      style={{ width: `${skill.level}%` }}
                                    ></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          {Object.entries(agent.stats).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 px-4 py-2 rounded-lg">
                              <div className="text-amber-400 text-sm capitalize">{key}</div>
                              <div className="text-white font-semibold">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}