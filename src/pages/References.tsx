import React from 'react';
import { ExternalLink, BookOpen, Link as LinkIcon } from 'lucide-react';
import data from '../data/output.json';
import { DataStructure } from '../types';

const profileKey = Object.keys(data)[0];
const profileData = (data as DataStructure)[profileKey];

export const References: React.FC = () => {
  const sources = profileData.Sources || [];

  const parseSource = (source: string) => {
    const match = source.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      return {
        label: match[1],
        url: match[2]
      };
    }
    return {
      label: source,
      url: null
    };
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-12">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 border-l-8 border-slate-900 pl-4">
          Sources & References
        </h1>
        <p className="text-lg md:text-xl text-slate-600">
          The following sources were used to compile this strategic profile of {profileKey}.
        </p>
      </header>

      {sources.length > 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
            <BookOpen className="text-slate-900" size={20} />
            <h3 className="font-bold text-slate-900">Information Sources</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {sources.map((source, idx) => {
              const { label, url } = parseSource(source);
              return (
                <div key={idx} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:bg-slate-200 transition-colors">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 text-sm md:text-base">{label}</p>
                      {url && (
                        <p className="text-xs text-slate-400 truncate max-w-[200px] sm:max-w-md lg:max-w-2xl">
                          {url}
                        </p>
                      )}
                    </div>
                  </div>
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      title="Visit source"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center text-slate-500">
          No sources found for this profile.
        </div>
      )}

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex gap-4">
        <div className="bg-blue-100 p-2 rounded-lg h-fit">
          <LinkIcon className="text-blue-700" size={20} />
        </div>
        <div>
          <h4 className="font-bold text-blue-900 mb-1">Citation System</h4>
          <p className="text-sm text-blue-800 leading-relaxed">
            All facts presented in this application are accompanied by numerical citation markers.
            These numbers correspond to the list above, providing transparency and allowing for
            independent verification of the information.
          </p>
        </div>
      </div>
    </div>
  );
};
