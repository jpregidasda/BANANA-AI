'use client';

import React, { useEffect, useRef, useState } from 'react';
import { apiService } from "@/services/api";
import { useAppKitAccount  } from '@reown/appkit/react'
import { toast } from 'sonner';

interface BrowserProps {
  html: string;
  pages: Array<{
    path: string;
    name: string;
    html: string;
  }>;
  siteUrl?: string;
  isPreviewMode?: boolean;
  agentType?: 'web' | '3D';
}

const Browser: React.FC<BrowserProps> = ({
  html,
  pages,
  siteUrl,
  isPreviewMode = false,
  agentType = 'web'
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadTime, setLoadTime] = useState(0);
  const [domSize, setDomSize] = useState('0KB');
  const [currentUrl, setCurrentUrl] = useState('/index.html');
  const [urlPath, setPathUrl] = useState(siteUrl || '');
  const [isDeploying, setIsDeploying] = useState(false);
  const { address, caipAddress, isConnected } = useAppKitAccount()
  useEffect(() => {
    const startTime = performance.now();
    setIsLoading(true);

    // Create a blob URL from the HTML content
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    console.log(url,'url');
    // Update the iframe source
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }

    // Calculate DOM size
    const size = new TextEncoder().encode(html).length;
    setDomSize(`${(size / 1024).toFixed(1)}KB`);

    // Simulate loading completion
    setTimeout(() => {
      setIsLoading(false);
      setLoadTime(performance.now() - startTime);
      URL.revokeObjectURL(url);
    }, 100);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [html]);

  const handleRefresh = () => {
    if (iframeRef.current) {
      const startTime = performance.now();
      setIsLoading(true);
      iframeRef.current.src = iframeRef.current.src;
      setTimeout(() => {
        setIsLoading(false);
        setLoadTime(performance.now() - startTime);
      }, 100);
    }
  };
  const deploy = async () => {
    if(!isConnected) {
      toast.error('Please connect your wallet first', {
        position: 'top-center',
        duration: 3000,
      });
      return false
    }
    setIsDeploying(true);
    try {
      const response = await apiService.hostSite({
        createdBy:address,
        agentType:agentType,
        pages:[{
          name:pages[0].name,
          path:pages[0].path,
          html:pages[0].html
        }]
      });
      if(response.code === 200)  {
        setPathUrl(response.data[0])
      }else {
        toast.error(response.message, {
          position: 'top-center',
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Deployment failed:', error);
    } finally {
      setIsDeploying(false);
    }
  };
  return (
    <div className="relative h-full flex flex-col bg-gray-900/95 rounded-lg overflow-hidden border border-gray-800/30">
      {/* Browser Chrome */}
      <div className="flex items-center justify-between p-2 bg-gray-800/30 border-b border-gray-700/30">
        {/* Window Controls */}
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/90"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/90"></div>
        </div>

        {/* URL Bar */}
        <div className="flex-1 mx-4">
          <div className="flex items-center bg-gray-800/50 rounded px-2 py-1">
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <button
                onClick={handleRefresh}
                className="hover:text-gray-300 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <span className="text-gray-500">https://</span>
              <span className="text-cyan-300/90">{currentUrl}</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex items-center space-x-3">
          <div className="text-xs text-gray-400/90">
            Load: {loadTime.toFixed(0)}ms
          </div>
          <div className="text-xs text-gray-400/90">
            DOM: {domSize}
          </div>
          {
            urlPath ? (
              <button 
                onClick={() => window.open(urlPath, '_blank')}  
                className="bg-purple-600/90 hover:bg-purple-700/90 text-white/90 px-3 py-1 rounded-md text-xs transition-colors"
              >
                Visit Live Site
              </button>
            ) : (
              <button 
                onClick={() => deploy()} 
                disabled={isDeploying}
                className={`bg-purple-600/90 hover:bg-purple-700/90 text-white/90 px-3 py-1 rounded-md text-xs transition-colors flex items-center gap-2 ${isDeploying ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isDeploying ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Deploying...
                  </>
                ) : (
                  'Deploy'
                )}
              </button>
            )
          }
         
        </div>
      </div>

      {/* Loading Bar */}
      {isLoading && (
        <div className="h-0.5 bg-gray-800">
          <div className="h-full bg-cyan-400/90 w-1/3 animate-[loading_1s_ease-in-out_infinite]"></div>
        </div>
      )}

      {/* Content Area */}
      <div className="flex-1 bg-white">
        <iframe
          ref={iframeRef}
          className="w-full h-full bg-white"
          sandbox="allow-same-origin allow-scripts"
          title="Preview"
        />
      </div>
    </div>
  );
};

export default Browser;
