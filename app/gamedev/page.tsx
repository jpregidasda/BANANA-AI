'use client';

import React, { useState, useEffect } from 'react';
import AppLayout from '@/components/AppLayout';

interface SystemStats {
  cpu: string;
  memory: string;
  network: string;
}

interface GameState {
  fps: number;
  entities: number;
  score: number;
  level: number;
}

export default function GameDev() {
  const [command, setCommand] = useState('');
  const [stats, setStats] = useState<SystemStats>({
    cpu: '5.2%',
    memory: '355.1MB',
    network: '66ms'
  });
  const [gameState, setGameState] = useState<GameState>({
    fps: 60,
    entities: 42,
    score: 1250,
    level: 3
  });

  const [messages, setMessages] = useState<string[]>([
    '> Initializing game engine...',
    '> Loading assets...',
    '> Physics system ready',
    '> Rendering pipeline initialized',
    '> Game world generated'
  ]);

  const [avgTime, setAvgTime] = useState('0s');
  const [messageCount, setMessageCount] = useState(0);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      setMessages(prev => [...prev, `> ${command}`]);
      setMessageCount(prev => prev + 1);
      setCommand('');
    }
  };

  return (
    <AppLayout>
      {/* Main content - adjusted to account for sidebar and top bar */}
      <div className="pt-12 absolute"> {/* Added padding for sidebar (w-64) and top bar (h-12) */}
        <div className="min-h-screen bg-gray-900 text-gray-300">
          {/* Header with stats */}
          <div className="flex justify-between items-center p-4 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-green-400">Neo Blackwood</span>
                <span className="text-purple-400">(High Load)</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <span>{gameState.fps}fps</span>
                <span>{gameState.entities} entities</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span>Score: {gameState.score}</span>
                <span>Level: {gameState.level}</span>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Deploy Game
              </button>
            </div>
          </div>

          {/* Main content area */}
          <div className="grid grid-cols-2 gap-4 p-4">
            {/* Left panel */}
            <div className="bg-gray-900 rounded-lg border border-purple-500/20 overflow-hidden">
              {/* Top Status Bar */}
              <div className="p-4 border-b border-purple-500/20 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-green-400">Neo Blackwood</span>
                    <span className="text-purple-400">(High Load)</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <span>{avgTime}</span>
                      <span>avg</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>{messageCount}</span>
                      <span>msgs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="h-[calc(100vh-16rem)] overflow-y-auto p-4 font-mono">
                {messages.map((msg, index) => (
                  <div key={index} className="text-cyan-300 mb-2">
                    {msg}
                  </div>
                ))}
              </div>

              {/* Command Input */}
              <div className="p-4 border-t border-purple-500/20">
                <form onSubmit={handleCommand} className="relative">
                  <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    placeholder="Enter your command..."
                    className="w-full bg-gray-800/50 text-cyan-300 p-3 rounded-lg pl-4 pr-12 font-mono border border-purple-500/20 focus:outline-none focus:border-purple-500/40"
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Right panel */}
            <div className="bg-gray-800 rounded-lg">
              <div className="p-2 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-400">Game Preview</div>
                </div>
              </div>
              <div className="h-[calc(100vh-12rem)] p-4">
                <div className="w-full h-full bg-gray-900 rounded-lg border border-gray-700 p-4">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="space-y-4">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Game Stats</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>FPS</span>
                            <span className="text-green-400">{gameState.fps}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Entities</span>
                            <span className="text-blue-400">{gameState.entities}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Score</span>
                            <span className="text-yellow-400">{gameState.score}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Level</span>
                            <span className="text-purple-400">{gameState.level}</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">System Status</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>CPU Usage</span>
                            <span className="text-cyan-400">{stats.cpu}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Memory</span>
                            <span className="text-pink-400">{stats.memory}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Network</span>
                            <span className="text-orange-400">{stats.network}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🎮</div>
                        <div className="text-lg font-semibold">Game View</div>
                        <div className="text-sm text-gray-400 mt-2">Preview coming soon...</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom stats bar */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-800 border-t border-gray-700">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  <span>Game Structure</span>
                </div>
                <span className="text-gray-500">3 scenes</span>
              </div>
              <div className="mt-4">
                <div className="bg-purple-900/50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Main Scene</span>
                    <span className="text-gray-500">/game.scene</span>
                    <span className="ml-auto bg-green-600/20 text-green-400 px-2 py-0.5 rounded text-sm">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-red-400">Game</span>
                <span className="text-purple-400">Engine</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="flex items-center space-x-1">
                  <span>CPU:</span>
                  <span>{stats.cpu}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>MEM:</span>
                  <span>{stats.memory}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>NET:</span>
                  <span>{stats.network}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}