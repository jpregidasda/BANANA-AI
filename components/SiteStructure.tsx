'use client';

import React, { useMemo } from 'react';
import { formatDistanceToNow } from 'date-fns';  

interface Page {
  name: string;
  path: string;
  html: string;
  isActive: boolean;
  metadata?: {
    created?: string;
    lastModified?: string;
    size?: number;
    checksum?: string;
  };
}

interface SiteStructureProps {
  pages: Page[];
  currentPage: string;
  onPageSelect: (path: string) => void;
}

const SiteStructure: React.FC<SiteStructureProps> = ({
  pages,
  currentPage,
  onPageSelect,
}) => {
  const sortedPages = useMemo(() => {
    return [...pages].sort((a, b) => {
      // Index page always first
      if (a.path === '/index.html') return -1;
      if (b.path === '/index.html') return 1;
      // Then sort by path
      return a.path.localeCompare(b.path);
    });
  }, [pages]);

  const getPageIcon = (path: string) => {
    if (path === '/index.html') {
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return '0 B';
    const units = ['B', 'KB', 'MB'];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    return `${size.toFixed(1)} ${units[unitIndex]}`;
  };

  const getModifiedTime = (page: Page) => {
    const timestamp = page.metadata?.lastModified || page.metadata?.created;
    if (!timestamp) return '';
    try {
      return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
    } catch {
      return '';
    }
  };

  return (
    <div className="relative h-full bg-gray-900/95 rounded-lg border border-gray-800/30 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-3 border-b border-gray-800/30 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          <span className="text-sm">Site Structure</span>
        </div>
        <span className="text-xs text-gray-500">{pages.length} pages</span>
      </div>

      {/* Page List */}
      <div className="flex-1 overflow-y-auto">
        {sortedPages.map((page) => (
          <button
            key={page.path}
            onClick={() => onPageSelect(page.path)}
            className={`w-full text-left p-2 hover:bg-gray-800/30 transition-colors flex items-center justify-between group ${
              page.path === currentPage ? 'bg-purple-900/20' : ''
            }`}
          >
            <div className="flex items-center space-x-2 min-w-0">
              <span className={`text-gray-400 ${page.path === currentPage ? 'text-purple-400' : ''}`}>
                {getPageIcon(page.path)}
              </span>
              <div className="flex flex-col min-w-0">
                <span className={`text-sm truncate ${
                  page.path === currentPage ? 'text-purple-400' : 'text-gray-300'
                }`}>
                  {page.name || page.path.replace(/^\//, '')}
                </span>
                {page.metadata && (
                  <span className="text-xs text-gray-500 truncate">
                    {formatFileSize(page.metadata.size)} • {getModifiedTime(page)}
                  </span>
                )}
              </div>
            </div>

            {/* Status Indicators */}
            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {page.path === currentPage && (
                <span className="px-1.5 py-0.5 text-xs rounded-md bg-purple-500/20 text-purple-400">
                  Active
                </span>
              )}
              {page.metadata?.checksum && (
                <span className="text-xs text-gray-500" title={page.metadata.checksum}>
                  #{page.metadata.checksum.slice(0, 6)}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="p-2 border-t border-gray-800/30 bg-gray-900/50">
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-gray-500">
            <div className="font-medium text-gray-400">Total Size</div>
            <div>{formatFileSize(pages.reduce((sum, page) => sum + (page.metadata?.size || 0), 0))}</div>
          </div>
          <div className="text-gray-500">
            <div className="font-medium text-gray-400">Last Update</div>
            <div>
              {formatDistanceToNow(
                new Date(Math.max(...pages.map(p => 
                  new Date(p.metadata?.lastModified || p.metadata?.created || 0).getTime()
                ))),
                { addSuffix: true }
              )}
            </div>
          </div>
          <div className="text-gray-500">
            <div className="font-medium text-gray-400">Pages</div>
            <div>{pages.length} total</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteStructure;
