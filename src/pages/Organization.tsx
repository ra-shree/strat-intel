import React from 'react';
import { Building } from 'lucide-react';
import { Timeline } from '../components/Timeline';
import { FinancialChart } from '../components/FinancialChart';
import data from '../data/output.json';
import { DataStructure } from '../types';

const profileKey = Object.keys(data)[0];
const profileData = (data as DataStructure)[profileKey];

export const Organization: React.FC = () => {
  const cleanText = (text: string | string[]) => {
    if (Array.isArray(text)) {
        return text.map(t => t.replace(/\[cite:.*?\]/g, '').replace(/\*\*(.*?)\*\*/g, '$1'));
    }
    return text.replace(/\[cite:.*?\]/g, '').replace(/\*\*(.*?)\*\*/g, '$1');
  };

  const renderText = (text: string | string[]) => {
    const cleaned = cleanText(text);
    if (Array.isArray(cleaned)) {
        return cleaned.map((t, i) => <p key={i}>{t}</p>);
    }
    return <p>{cleaned}</p>;
  };

  const timelineData = profileData["Chronological Timeline"]
    ? Object.entries(profileData["Chronological Timeline"]).map(([period, items]) => ({
        period,
        items: items as (string | string[])[]
    }))
    : [];

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-12">
      <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 border-l-8 border-blue-600 pl-4">Political Ideology & Alliances</h1>
            <p className="text-lg md:text-xl text-slate-600">
                Analysis of {profileKey}'s evolution, networks, and operational structure.
            </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
        <div className="space-y-8">
            {/* Evolution Phases */}
            {(profileData["Political Ideology and Alignment"]?.["Evolution of Alignment"] ||
              profileData["Political Ideology and Alignment"]?.["Foreign Policy Stance"]) && (
              <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-slate-800">Political Ideology</h2>

                  {profileData["Political Ideology and Alignment"]?.["Evolution of Alignment"] && (
                    <div className="bg-white p-6 rounded-lg border-l-4 border-slate-300 shadow-sm">
                        <h3 className="font-bold text-lg mb-1 flex items-center justify-between">
                            Evolution of Alignment
                        </h3>
                        <div className="text-slate-600 text-sm mt-2 space-y-2">
                            {renderText(profileData["Political Ideology and Alignment"]["Evolution of Alignment"])}
                        </div>
                    </div>
                  )}

                  {profileData["Political Ideology and Alignment"]?.["Foreign Policy Stance"] && (
                    <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400 shadow-sm">
                        <h3 className="font-bold text-lg mb-1 flex items-center justify-between">
                            Foreign Policy Stance
                        </h3>
                        <div className="text-slate-600 text-sm mt-2 space-y-2">
                            {renderText(profileData["Political Ideology and Alignment"]["Foreign Policy Stance"])}
                        </div>
                    </div>
                  )}
              </div>
            )}

            {/* Financial Section */}
            {profileData["Financial Intelligence"] && profileData["Financial Intelligence"].length > 0 && (
              <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Financial Intelligence</h2>
                  <FinancialChart />
              </div>
            )}
        </div>

        {/* Sidebar Content */}
        <div className="space-y-8">
             {timelineData.length > 0 && (
               <Timeline dynamicEvents={timelineData} title="Political Timeline" />
             )}

             {profileData["Networks and Influence"] && (
               <div className="bg-slate-900 text-slate-300 p-6 rounded-xl">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <Building size={20} /> Networks & Influence
                  </h3>
                  <ul className="space-y-4 text-sm">
                      {profileData["Networks and Influence"]["India Connections"] && (
                        <li className="border-b border-slate-700 pb-2">
                            <strong className="text-white block">India Connections</strong>
                            {renderText(profileData["Networks and Influence"]["India Connections"])}
                        </li>
                      )}
                      {profileData["Networks and Influence"]["Domestic Alliances"] && (
                        <li>
                            <strong className="text-white block">Domestic Alliances</strong>
                            {renderText(profileData["Networks and Influence"]["Domestic Alliances"])}
                        </li>
                      )}
                  </ul>
               </div>
             )}
        </div>
      </div>
    </div>
  );
};
