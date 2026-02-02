import React from 'react';
import { Radio, ShieldAlert, Award } from 'lucide-react';
import { Timeline } from '../components/Timeline';
import data from '../data/output.json';
import { DataStructure } from '../types';

const profileKey = Object.keys(data)[0];
const profileData = (data as DataStructure)[profileKey];

export const Biography: React.FC = () => {
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
                <h1 className="text-2xl md:text-3xl font-bold mb-4 border-l-8 border-red-600 pl-4">Biography & Pre-Political Era</h1>
                <p className="text-lg md:text-xl text-slate-600">
                    The academic and personal background of {profileKey}.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
                {/* Main Content */}
                <div className="space-y-8">
                    {profileData["Origins and Early History"]?.["Education and Background"] && (
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                                <Radio className="text-blue-600" /> Education & Background
                            </h3>
                            <div className="text-slate-600 leading-relaxed mb-4 space-y-4">
                                {renderText(profileData["Origins and Early History"]["Education and Background"] as string)}
                            </div>
                        </div>
                    )}

                    {profileData["Origins and Early History"]?.["Entry into Politics and the Peace Process (2006)"] && (
                        <div className="bg-slate-800 text-slate-100 p-6 md:p-8 rounded-xl shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldAlert size={120} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-red-400 flex items-center gap-2">
                                <Award size={20} /> Entry into Politics
                            </h3>
                            <div className="leading-relaxed relative z-10 mb-4 space-y-4">
                                {renderText(profileData["Origins and Early History"]["Entry into Politics and the Peace Process (2006)"] as string)}
                            </div>
                        </div>
                    )}

                    {profileData["Current Status (January 2026)"] && (
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="text-lg md:text-xl font-bold mb-4 text-slate-900">Current Status (2026)</h3>
                            <div className="text-slate-600 leading-relaxed space-y-4">
                                {renderText(profileData["Current Status (January 2026)"])}
                            </div>
                        </div>
                    )}
                </div>

                {/* Timeline Sidebar */}
                {timelineData.length > 0 && (
                    <div>
                        <Timeline dynamicEvents={timelineData} title="Chronological Timeline" className="sticky top-6" />
                    </div>
                )}
            </div>
        </div>
    );
};
