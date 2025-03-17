'use client';

import Link from 'next/link';
import RecentSitesBanner from './RecentSitesBanner';
import ParticlesBackground from './ParticlesBackground';
import '../app/walletConfig'
import Image from 'next/image';
interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0f1333] to-black">
      {/* Particles.js Background */}
      <ParticlesBackground />
     
      {/* Top Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-r from-black/60 via-yellow-900/10 to-black/60 backdrop-blur-xl border-b border-yellow-500/20">
        <RecentSitesBanner />
        <div className="flex justify-end h-[70px] items-center mr-[15px]"><appkit-button /></div>
      </div>

      {/* Modern Side Navigation */}
      <div className="fixed left-0 top-[70px] h-full w-64 bg-gradient-to-b from-black/80 via-yellow-900/20 to-black/60 backdrop-blur-xl border-r border-yellow-500/20">
        {/* Push content down to account for banner */}
        <div className="h-12"></div>
        
        {/* Logo */}
        <Link href="/" className="flex items-center p-6 border-b border-yellow-500/20 hover:bg-yellow-500/5 transition-all">
          <div className="w-12 h-12 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/logo2.jpeg"
                alt="Solala Icon"
                width={24}
                height={24}
                className="w-8 h-8 hover:scale-110 transition-transform rounded-2xl"
              />
            </div>
          </div>
          <div className="ml-3">
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-transparent bg-clip-text">Banana<span className="text-white">AI</span></span>
            <div className="text-xs bg-gradient-to-r from-amber-400/80 to-orange-400/80 text-transparent bg-clip-text font-medium">Agent Interface</div>
          </div>
        </Link>
       
        {/* Navigation Links */}
        <nav className="p-4 space-y-3">
          <Link href="/agents" 
            className="flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/10 transition-all group">
            <div className="w-10 h-10 flex items-center justify-center relative"> 
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
              <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V17.5C7.5 17.5 6 15 6 13.5 6 12 7 11 8 11s2 .5 2 1.5V15c0 1 1 2 2 2s2-1 2-2v-2.5c0-1 1-1.5 2-1.5s2 1 2 2.5c0 1.5-1.5 4-4.438 4v4.379c4.781-.751 8.438-4.888 8.438-9.879 0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <div className="ml-3">
              <div className="font-medium group-hover:text-yellow-300 transition-colors">AI Agents</div>
              <div className="text-xs text-gray-500 group-hover:text-yellow-400/70 transition-colors">Browse Agents</div>
            </div>
          </Link>

          <Link href="/sites" 
            className="flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/10 transition-all group">
            <div className="w-10 h-10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
              <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="ml-3">
              <div className="font-medium group-hover:text-yellow-300 transition-colors">Projects</div>
              <div className="text-xs text-gray-500 group-hover:text-yellow-400/70 transition-colors">View Creations</div>
            </div>
          </Link>

          <div className="pt-4 mt-4 border-t border-yellow-500/20">
            <div className="px-4 text-xs font-medium bg-gradient-to-r from-yellow-400/90 to-orange-400/90 text-transparent bg-clip-text uppercase tracking-wider mb-2">Resources</div>
            
            <a href="https://github.com/jpregidasda/BANANA-AI" target="_blank" rel="noopener noreferrer"
              className="flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/10 transition-all group">
              <div className="w-10 h-10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </div>
              <div className="ml-3">
                <div className="font-medium group-hover:text-yellow-300 transition-colors">GitHub</div>
                <div className="text-xs text-gray-500 group-hover:text-yellow-400/70 transition-colors">Source Code</div>
              </div>
            </a>

            <a href="https://x.com/bananai_bnb/" target="_blank" rel="noopener noreferrer"
              className="flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/10 transition-all group">
              <div className="w-10 h-10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="ml-3">
                <div className="font-medium group-hover:text-yellow-300 transition-colors">Twitter</div>
                <div className="text-xs text-gray-500 group-hover:text-yellow-400/70 transition-colors">Updates</div>
              </div>
            </a>

            <a href="https://github.com/jpregidasda/BANANA-AI/blob/main/README.md" target="_blank" rel="noopener noreferrer"
              className="flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/10 transition-all group">
              <div className="w-10 h-10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"/>
                  <path d="M7 7H17M7 12H17M7 17H13"/>
                </svg>
              </div>
              <div className="ml-3">
                <div className="font-medium group-hover:text-yellow-300 transition-colors">Docs</div>
                <div className="text-xs text-gray-500 group-hover:text-yellow-400/70 transition-colors">Learn More</div>
              </div>
            </a>
            <a href="https://four.meme/token/0xc2e85ecf8824368df1a0871601f2656f380d363a" target="_blank" rel="noopener noreferrer"
              className="flex items-center p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/10 transition-all group">
              <div className="w-10 h-10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1333 2025 c-41 -18 -51 -33 -134 -221 -39 -88 -73 -161 -76 -164 -2
-3 -3 60 -1 140 3 125 1 148 -15 171 -33 48 -110 65 -156 33 -39 -28 -49 -70
-52 -220 -4 -189 -8 -234 -24 -234 -47 0 -115 -109 -171 -277 -61 -181 -1
-338 163 -429 281 -158 542 -54 643 256 49 149 82 201 192 304 116 107 132
140 102 202 -42 86 -112 90 -207 12 -39 -32 -48 -37 -36 -18 79 125 103 176
103 213 -2 75 -93 130 -156 94 l-28 -16 0 47 c0 69 -21 93 -95 115 -11 3 -34
0 -52 -8z m77 -65 c11 -11 20 -27 20 -36 0 -9 -43 -111 -95 -227 -53 -117 -94
-221 -93 -232 2 -12 11 -20 22 -20 15 0 47 45 126 178 59 97 115 186 125 197
23 26 57 25 80 -1 26 -27 19 -43 -105 -244 -84 -136 -100 -168 -90 -180 19
-23 28 -19 88 33 144 125 204 172 217 172 22 0 55 -37 55 -61 0 -11 -13 -33
-28 -47 -16 -15 -62 -59 -103 -97 -85 -81 -132 -161 -173 -295 -55 -183 -180
-291 -340 -292 -83 0 -161 25 -245 80 -143 94 -167 223 -81 432 58 140 100
189 100 115 0 -38 21 -55 44 -36 10 8 14 71 19 262 4 170 10 255 18 265 16 19
64 18 84 -3 16 -15 16 -37 10 -223 -6 -182 -5 -207 9 -219 9 -7 22 -11 29 -8
8 3 60 110 117 239 56 128 109 241 118 251 20 23 47 22 72 -3z"/>
</g>
</svg>
              </div>
              <div className="ml-3">
                <div className="font-medium group-hover:text-yellow-300 transition-colors">Four</div>
                <div className="text-xs text-gray-500 group-hover:text-yellow-400/70 transition-colors">Buy now</div>
              </div>
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content Area - Adjusted for sidebar */}
      <div className="pl-72 mt-[70px]">
        {/* Push content down to account for top bar */}
        <div className="h-12"></div>
        <div className="p-8 relative">
          {/* Content Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/5 via-transparent to-transparent pointer-events-none" />
          {children}
        </div>
      </div>
    </div>
  );
}
