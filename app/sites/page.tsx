'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { apiService } from '@/services/api';
import AppLayout from '@/components/AppLayout';
import { useAppKitAccount  } from '@reown/appkit/react'
import { toast } from 'sonner';
interface Site {
  siteId: string;
  name: string;
  description: string;
  topics: string[];
  createdAt: string;
  messageCount: number;
  totalSize: number;
  pageCount: number;
  technicalDetails: {
    htmlSize: number;
    assetsSize: number;
    frameworks: string[];
    features: string[];
    accessibility: number;
    performance: {
      htmlComplexity: number;
      interactivityScore: number;
      seoScore: number;
    };
    technologies: {
      name: string;
      version?: string;
      usage: string;
    }[];
  };
  contentAnalysis: {
    summary: string;
    targetAudience: string[];
    readingLevel: string;
    tone: string[];
    keyFeatures: string[];
    interactiveElements: string[];
    mainTopics: {
      name: string;
      relevance: number;
    }[];
    seoKeywords: string[];
    contentStructure: {
      sections: {
        name: string;
        purpose: string;
      }[];
    };
    funFactor?: number;
    replayValue?: number;
    difficultyLevel?: string;
    gameplayDuration?: string;
    gameGenre?: string[];
    gameControls?: string[];
    gameObjectives?: string[];
    gameMechanics?: string[];
  };
  url: string;
  developer?: {
    avatar: string;
    name: string;
    role: string;
    expertise: string[];
  };
  agentType: 'webapp' | 'gamedev';
}

function SiteCard({ site }: { site: Site }) {
  const router = useRouter();

  // Random metrics between 1-100%
  const getRandomMetric = () => Math.floor(Math.random() * 100);
  const complexity = getRandomMetric();
  const seo = getRandomMetric();

  // Tech stacks based on agent type
  const webTechStacks = [
    ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    ['React', 'TypeScript', 'Next.js', 'Styled Components'],
    ['Vue', 'SCSS', 'Nuxt.js', 'Vuetify'],
    ['Svelte', 'CSS', 'SvelteKit', 'TailwindCSS'],
    ['Angular', 'LESS', 'RxJS', 'Material UI']
  ];

  const gameTechStacks = [
    ['THREE.js', 'WebGL', 'JavaScript', 'GLSL'],
    ['Babylon.js', 'TypeScript', 'WebXR', 'Ammo.js'],
    ['Unity', 'C#', 'WebGL2', 'Physics.js'],
    ['PlayCanvas', 'JavaScript', '3D Models', 'Particles'],
    ['Phaser', 'PixiJS', 'Matter.js', 'TweenMax']
  ];

  const getTechStack = () => {
    return site.agentType === 'gamedev' 
      ? gameTechStacks[Math.floor(Math.random() * gameTechStacks.length)]
      : webTechStacks[Math.floor(Math.random() * webTechStacks.length)];
  };

  // Features based on agent type
  const webFeatures = [
    ['Meme Generator', 'animate stars', 'cyber theme', 'information about Pepe'],
    ['Dark Mode', 'Responsive Design', 'API Integration', 'Real-time Updates'],
    ['Authentication', 'Database', 'File Upload', 'Search Function'],
    ['Analytics', 'Social Share', 'Comments', 'User Profiles'],
    ['Payment System', 'Notifications', 'Chat System', 'Multi-language']
  ];

  const gameFeatures = [
    ['Level Editor', 'Multiplayer', 'Save Progress', 'Leaderboard'],
    ['Physics Engine', 'Sound Effects', 'Particle System', 'AI Enemies'],
    ['Character Creation', 'Inventory System', 'Quest System', 'Combat System'],
    ['Racing Mode', 'Vehicle Customization', 'Track Editor', 'Time Trials'],
    ['VR Support', '3D Models', 'Animation System', 'Weather Effects']
  ];

  const getFeatures = () => {
    return site.agentType === 'gamedev'
      ? gameFeatures[Math.floor(Math.random() * gameFeatures.length)]
      : webFeatures[Math.floor(Math.random() * webFeatures.length)];
  };

  const techStack = getTechStack();
  const features = getFeatures();

  return (
    <div
      onClick={() => router.push(`/sites/${site.siteId}`)}
      className="group relative rounded-lg border border-yellow-500/20 bg-gradient-to-br from-[#0B1120] via-[#0D1428] to-[#0B1120] p-6 transition-all hover:border-yellow-500/60 hover:shadow-lg hover:shadow-yellow-500/20"
    >
      {/* Developer Info */}
      <div className="mb-6 flex items-center space-x-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-400 animate-gradient-slow p-[2px]">
            <div className="h-full w-full rounded-full bg-[#0B1120] p-0.5">
              <img
                src={site?.avatar || 'https://avatars.githubusercontent.com/u/1?v=4'}
                alt={site?.name || 'Developer'}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent transition-all group-hover:from-orange-400 group-hover:via-amber-400 group-hover:to-yellow-400">
            {site.name || 'Temporary Name'}
          </h3>
          <p className="text-sm bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
            by {site?.name || 'Temporary Name'} • {site.agentType === 'gamedev' ? 'Game' : 'Web'} Developer
          </p>
        </div>
      </div>

      {/* Date and Description */}
      <div className="mb-6 space-y-2">
        <p className="text-sm text-gray-400 opacity-80">
          {new Date(site.createdAt).toLocaleString()}
        </p>
        <p className="text-transparent bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text font-light">
          {site.description || 'Temporary Description'}
        </p>
      </div>

      {/* Metrics */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-400">Complexity</p>
          <p className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            {complexity}%
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400">SEO</p>
          <p className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            {seo}%
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-4 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="rounded-full bg-gradient-to-r from-[#0c2440] to-[#1a1a4a] px-3 py-1 text-sm font-medium text-[#40e0ff] ring-1 ring-[#40e0ff]/50 hover:shadow-sm hover:shadow-[#40e0ff]/30 hover:text-[#5ae8ff] transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {features.map((feature, index) => (
          <span
            key={index}
            className="rounded-full bg-gradient-to-r from-[#0f2f1f] to-[#1a3a2a] px-3 py-1 text-sm font-medium text-[#4afa9a] ring-1 ring-[#4afa9a]/50 hover:shadow-sm hover:shadow-[#4afa9a]/30 hover:text-[#65ffa7] transition-all"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Preview Link */}
      <div className="mt-6">
        <a 
          className="inline-flex items-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 group-hover:from-orange-400 group-hover:via-amber-400 group-hover:to-yellow-400 transition-all"
        >
          Preview Site 
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function SiteLibrary() {
  const router = useRouter();
  const [sites, setSites] = useState<Site[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [startAfter, setStartAfter] = useState<string | undefined>(undefined);
  const [hasMore, setHasMore] = useState(true);
  const [viewMode, setViewMode] = useState<'all' | 'personal'>('all');
  const { address, caipAddress, isConnected } = useAppKitAccount()

  // Ref to track if the component has been mounted
  const hasFetched = useRef(false);

  // State to track if the minimum loading time has passed
  const [hasMinimumLoadingTimePassed, setHasMinimumLoadingTimePassed] = useState(false);

  useEffect(() => {
    if (!hasFetched.current) {
      loadSites();
      hasFetched.current = true;

      // Start the minimum loading time timer
      setTimeout(() => {
        setHasMinimumLoadingTimePassed(true);
      }, 3000); // 3 seconds
    }
  }, [viewMode]); // Add viewMode as dependency

  const loadSites = async () => {
    if(viewMode === 'personal' && !isConnected) {
      toast.error('Please connect your wallet first', {
        position: 'top-center',
        duration: 3000,
      });
      return false
    }
    try {
      setIsLoading(true);
      const result = await apiService.getSites(startAfter, viewMode === 'all' ? undefined : address);
      setSites((prev) => [...prev, ...result.data]);
      // setHasMore(result.hasMore);
      // setStartAfter(result.nextStartAfter);
    } catch (err) {
      console.error(err);
      setError('Failed to load sites');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      loadSites();
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen p-8 relative">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="py-5px text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-transparent bg-clip-text">
              Agent Creations
            </h1>
            <p className="text-xl text-gray-400">
              Browse and interact with your generated websites
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 p-1 rounded-xl">
              <div className="flex space-x-1">
                <button
                  onClick={() => {
                    setViewMode('all');
                    setSites([]); // Reset sites when switching views
                    hasFetched.current = false; // Reset fetch flag
                  }}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    viewMode === 'all'
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => {
                    setViewMode('personal');
                    setSites([]); // Reset sites when switching views
                    hasFetched.current = false; // Reset fetch flag
                  }}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    viewMode === 'personal'
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  My Projects
                </button>
              </div>
            </div>
          </div>

          {/* Sites Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sites.length > 0 ? (
              sites.map((site) => (
                <SiteCard key={site.siteId} site={site} />
              ))
            ) : !hasMinimumLoadingTimePassed || isLoading ? (
              // Loading skeletons
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-terminal-black border border-yellow-500/30 rounded-lg p-6 animate-pulse"
                >
                  <div className="h-6 bg-yellow-500/10 rounded mb-4" />
                  <div className="h-4 bg-yellow-500/10 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-yellow-500/10 rounded w-1/2" />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-amber-400 mb-2">No Sites Yet</h3>
                <p className="text-gray-400 mb-6">
                  Start creating your first website
                </p>
                <button
                  onClick={() => router.push('/webappagent')}
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Create Site
                </button>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {hasMore && sites.length > 0 && (
            <div className="flex justify-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? 'Loading...' : 'Load More Sites'}
              </button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-lg">
              {error}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}