import React from 'react';
import { Radio, ShieldAlert, Award } from 'lucide-react';
import { CitationRef } from '../components/CitationRef';
import { Timeline } from '../components/Timeline';
import { TIMELINE_EVENTS } from '../constants';

export const Biography: React.FC = () => {
  // Filter timeline for personal/biographical events
  const bioEvents = TIMELINE_EVENTS.filter(e => 
    ['Origins', "The 'OMG' Era", "The Turning Point", "Upcoming"].includes(e.title) || 
    e.title.includes('Election') || e.title.includes('Trigger')
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div>
            <h1 className="text-3xl font-bold mb-4 border-l-8 border-red-600 pl-4">Biography & Pre-Political Era</h1>
            <p className="text-xl text-slate-600">
                The transformation of a nightlife entrepreneur into a civic leader.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
            {/* Main Content */}
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                        <Radio className="text-blue-600" /> The "OMG" Era (Pre-2015)
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Born in 1989 in Gorkha <CitationRef ids={[1, 8]} />, Sudan Gurung initially established himself 
                        in Kathmandu's nightlife industry. He was a prominent figure in the city's social scene, owning the popular 
                        'OMG' nightclub.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        During this period, he worked extensively as an event manager and DJ. While seemingly apolitical, 
                        these years were critical for developing his skillset:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4 text-sm">
                        <li><strong>Crowd Psychology:</strong> Understanding how to move and excite large groups.</li>
                        <li><strong>Logistics:</strong> Organizing complex events with limited resources.</li>
                        <li><strong>Elite Networking:</strong> Cultivating relationships with the children of politicians and business tycoons who frequented his club.</li>
                    </ul>
                    <p className="text-xs text-slate-400 mt-4 italic">
                        Reference: "Meet Sudan Gurung, the DJ who rocked the Nepal govt" <CitationRef ids={[2, 5]} />
                    </p>
                </div>

                <div className="bg-slate-800 text-slate-100 p-8 rounded-xl shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <ShieldAlert size={120} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-red-400 flex items-center gap-2">
                        <Award size={20}/> The 2015 Turning Point
                    </h3>
                    <p className="leading-relaxed relative z-10 mb-4">
                        The April 25, 2015 Gorkha earthquake changed Gurung's trajectory entirely. In a tragic turn of events, 
                        Gurung lost his own son in the disaster.
                    </p>
                    <blockquote className="border-l-4 border-red-500 pl-4 my-4 italic text-slate-300">
                        "A child died in my arms. I'll never forget that moment. It made me realize that all the money and fame in the club scene meant nothing if we couldn't save our own people."
                    </blockquote>
                    <p className="mt-4 text-sm text-slate-400">
                        This personal loss provided him with "emotional legitimacy," allowing him to pivot from hedonistic nightlife 
                        to philanthropy. He launched the "Namaste Ghar" project to rebuild homes in Gorkha, bypassing established political hierarchies to deliver direct aid <CitationRef ids={[5, 10]} />.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                     <h3 className="text-xl font-bold mb-4 text-slate-900">Political Ambitions (2026)</h3>
                     <p className="text-slate-600 leading-relaxed">
                        Following the success of the 2025 Uprising, Gurung has made his political ambitions explicit. 
                        He has announced his candidacy for the <strong>Gorkha-1</strong> constituency in the upcoming 2026 General Elections.
                        Analysts predict he aims to challenge the Maoist center in their historic stronghold.
                     </p>
                     <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 className="font-bold text-blue-900 text-sm mb-2">The "Three Musketeers" Alliance</h4>
                        <p className="text-xs text-blue-800">
                            Reports suggest a strategic alliance is forming between Sudan Gurung, Balen Shah (Mayor of Kathmandu), and Rabi Lamichhane (RSP). 
                            Gurung acts as the "street mobilizer" in this triad <CitationRef ids={[21, 24]} />.
                        </p>
                     </div>
                </div>
            </div>

            {/* Timeline Sidebar */}
            <div>
                <Timeline events={bioEvents} title="Personal Timeline" className="sticky top-6" />
            </div>
        </div>
    </div>
  );
};