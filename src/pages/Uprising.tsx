import React from 'react';
import { AlertTriangle, FileText, Flame } from 'lucide-react';
import { Timeline } from '../components/Timeline';
import data from '../data/output.json';
import { DataStructure } from '../types';

const profileKey = Object.keys(data)[0];
const profileData = (data as DataStructure)[profileKey];

export const Uprising: React.FC = () => {
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
        <div className="bg-gradient-to-br from-red-900 to-slate-900 text-white rounded-3xl p-6 md:p-12 shadow-2xl">
            <h1 className="text-3xl md:text-5xl font-black mb-6">Participation in Major Events</h1>
            <p className="text-lg md:text-xl text-red-100 max-w-3xl">
                A definitive account of {profileKey}'s role in key historical and political movements.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
            <div className="lg:col-span-2 space-y-10">
                {profileData["Participation in Major Public Events"] && (
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Flame className="text-red-600" /> Historical Context
                        </h2>
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            {profileData["Participation in Major Public Events"]["The 2006 Peace Process"] && (
                                <div className="p-6 border-b border-slate-100">
                                    <h3 className="font-bold text-lg mb-2">The 2006 Peace Process</h3>
                                    <div className="text-slate-600 text-sm space-y-2">
                                        {renderText(profileData["Participation in Major Public Events"]["The 2006 Peace Process"])}
                                    </div>
                                </div>
                            )}
                            {profileData["Participation in Major Public Events"]["Parliamentary Protests"] && (
                                <div className="p-6 border-b border-slate-100 bg-red-50">
                                    <h3 className="font-bold text-red-800 text-lg mb-2">Parliamentary Protests</h3>
                                    <div className="text-red-900/80 text-sm space-y-2">
                                        {renderText(profileData["Participation in Major Public Events"]["Parliamentary Protests"])}
                                    </div>
                                </div>
                            )}
                            {profileData["Participation in Major Public Events"]["2026 Election Campaign"] && (
                                <div className="p-6">
                                    <h3 className="font-bold text-lg mb-2">2026 Election Campaign</h3>
                                    <div className="text-slate-600 text-sm space-y-2">
                                        {renderText(profileData["Participation in Major Public Events"]["2026 Election Campaign"])}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {profileData["Assessment and Open Questions"] && (
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <FileText className="text-slate-600" /> Assessment & Outlook
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-orange-50 border border-orange-100 p-6 rounded-xl md:col-span-2">
                                <h3 className="font-bold text-orange-800 mb-2">Strategic Assessment</h3>
                                <div className="text-sm text-orange-900/80 space-y-2">
                                    {renderText(profileData["Assessment and Open Questions"])}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>

            <div className="lg:col-span-1">
                {timelineData.length > 0 && (
                    <Timeline dynamicEvents={timelineData} title="Full Timeline" />
                )}
            </div>
        </div>
    </div>
  );
};
