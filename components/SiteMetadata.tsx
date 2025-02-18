import React from 'react';

interface SiteMetadataProps {
  metadata: {
    site: {
      name: string;
      description: string;
      agentType: string;
      createdAt?: string;
    };
    pages?: Array<{
      path: string;
      html: string;
    }>;
  };
}

const randomFromArray = <T,>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const SiteMetadata: React.FC<SiteMetadataProps> = ({ metadata }) => {
  // Random metrics between 70-95%
  const getRandomMetric = () => Math.floor(Math.random() * 25) + 70;
  const funFactor = getRandomMetric();
  const replayValue = getRandomMetric();
  
  // Random duration between 5-30 minutes
  const minDuration = Math.floor(Math.random() * 10) + 5;
  const maxDuration = minDuration + Math.floor(Math.random() * 15) + 10;
  const duration = `${minDuration}-${maxDuration} min`;

  const difficulties = ['Easy', 'Medium', 'Hard'] as const;
  const difficulty = metadata.site.agentType === 'gamedev' ? 'Hard' : randomFromArray(difficulties);

  const webTechStacks = [
    ['Next.js 13', 'React', 'TailwindCSS'],
    ['Vue 3', 'Nuxt', 'WindiCSS'],
    ['Svelte', 'SvelteKit', 'UnoCSS'],
    ['Remix', 'React', 'ChakraUI'],
    ['Astro', 'Solid', 'DaisyUI'],
  ];

  const gameTechStacks = [
    ['THREE.js', 'JavaScript ES6', 'HTML5'],
    ['Babylon.js', 'TypeScript', 'WebGL'],
    ['PlayCanvas', 'JavaScript', 'WebGL2'],
    ['Phaser', 'PixiJS', 'Matter.js'],
    ['A-Frame', 'THREE.js', 'WebXR'],
  ];

  const getTechStack = () => {
    return metadata.site.agentType === 'gamedev' 
      ? randomFromArray(gameTechStacks)
      : randomFromArray(webTechStacks);
  };

  const webAudiences = [
    ['Web users', 'Business professionals', 'Tech enthusiasts'],
    ['Developers', 'Designers', 'Product managers'],
    ['Startups', 'Enterprise teams', 'Freelancers'],
    ['Content creators', 'Digital marketers', 'Entrepreneurs'],
    ['Students', 'Educators', 'Researchers'],
  ];

  const gameAudiences = [
    ['Casual gamers', 'Web gamers', '3D enthusiasts'],
    ['Mobile gamers', 'Browser gamers', 'Tech enthusiasts'],
    ['Adventure seekers', 'Puzzle solvers', 'Strategy gamers'],
    ['Kids', 'Teens', 'Young adults'],
    ['Educational gamers', 'Social gamers', 'Competitive players'],
  ];

  const getTargetAudience = () => {
    return metadata.site.agentType === 'gamedev'
      ? randomFromArray(gameAudiences)
      : randomFromArray(webAudiences);
  };

  return (
    <div className="relative rounded-xl bg-[#0B1120] p-0.5">
      {/* Theme Border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 blur-xl" />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10" />
      <div className="relative rounded-xl bg-[#0B1120] p-8 shadow-xl">
        {/* Developer Info */}
        <div className="mb-8 flex items-center space-x-6">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 p-[2px]">
            <div className="h-full w-full rounded-2xl bg-[#0B1120] p-2">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 opacity-75" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">AI Developer</h2>
            <p className="text-gray-400">{metadata.site.agentType === 'gamedev' ? 'Game Developer • 3D Artist' : 'Full Stack Developer • UI Designer'}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {getTechStack().map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#1a1f35] px-3 py-1 text-sm font-medium text-amber-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mb-8 grid grid-cols-2 gap-8">
          <div className="rounded-lg bg-[#0f172a]/50 p-4">
            <p className="mb-2 text-sm font-medium text-gray-400">Fun Factor</p>
            <p className="text-3xl font-bold text-yellow-400">{funFactor}%</p>
          </div>
          <div className="rounded-lg bg-[#0f172a]/50 p-4">
            <p className="mb-2 text-sm font-medium text-gray-400">Replay Value</p>
            <p className="text-3xl font-bold text-amber-400">{replayValue}%</p>
          </div>
          <div className="rounded-lg bg-[#0f172a]/50 p-4">
            <p className="mb-2 text-sm font-medium text-gray-400">Difficulty</p>
            <p className="text-3xl font-bold text-orange-400">{difficulty}</p>
          </div>
          <div className="rounded-lg bg-[#0f172a]/50 p-4">
            <p className="mb-2 text-sm font-medium text-gray-400">Duration</p>
            <p className="text-3xl font-bold text-yellow-400">{duration}</p>
          </div>
        </div>

        {/* Target Audience */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-300">Target Audience</h3>
          <div className="flex flex-wrap gap-2">
            {getTargetAudience().map((audience, index) => (
              <span
                key={index}
                className="rounded-full bg-[#0f172a]/50 px-4 py-1.5 text-sm font-medium text-gray-300"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 rounded-lg bg-[#0f172a]/50 p-4 text-sm">
          <div>
            <span className="text-gray-400">Created: </span>
            <span className="text-yellow-400">{new Date().toLocaleDateString()}</span>
          </div>
          <div>
            <span className="text-gray-400">Pages: </span>
            <span className="text-amber-400">{metadata.pages?.length || 1}</span>
          </div>
          <div>
            <span className="text-gray-400">Type: </span>
            <span className="text-orange-400 capitalize">{metadata.site.agentType}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteMetadata;
