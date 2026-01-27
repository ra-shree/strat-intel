import React from 'react';
import { AlertTriangle, FileText, Flame } from 'lucide-react';
import { CitationRef } from '../components/CitationRef';
import { Timeline } from '../components/Timeline';
import { TIMELINE_EVENTS } from '../constants';

export const Uprising: React.FC = () => {
    // Filter for uprising events
    const uprisingEvents = TIMELINE_EVENTS.filter(e => 
        e.year === "2025" || e.title.includes('Uprising')
    );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="bg-gradient-to-br from-red-900 to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-black mb-6">The 2025 Gen Z Uprising</h1>
            <p className="text-xl text-red-100 max-w-3xl">
                A definitive account of the "5 Days of Rage" that ended the K.P. Sharma Oli administration.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Flame className="text-red-600" /> Tactical Breakdown
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-6 border-b border-slate-100">
                            <h3 className="font-bold text-lg mb-2">The Trigger (Sept 4, 2025)</h3>
                            <p className="text-slate-600 text-sm">
                                The government banned 26 social media apps (including Instagram, TikTok, and Telegram) citing "social harmony." 
                                For Gen Z, whose livelihoods depend on the digital economy, this was interpreted as <strong>economic warfare</strong>.
                                <br/><br/>
                                <em>"They didn't just take our entertainment; they took our jobs."</em> - Sudan Gurung <CitationRef ids={[1, 14]} />
                            </p>
                        </div>
                        <div className="p-6 border-b border-slate-100 bg-red-50">
                            <h3 className="font-bold text-red-800 text-lg mb-2">The Violence (Sept 8-9)</h3>
                            <p className="text-red-900/80 text-sm">
                                Unlike previous peaceful protests, this turned kinetic. 
                                <strong>19 protesters were killed</strong> in clashes with the Armed Police Force. 
                                Government vehicles were torched. The sheer intensity forced the Army to secure Tribhuvan International Airport <CitationRef ids={[1, 15]} />.
                            </p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">The Outcome (Sept 12)</h3>
                            <p className="text-slate-600 text-sm">
                                PM Oli resigned. In a historic first, Hami Nepal organized a massive <strong>Discord vote</strong> to nominate the interim Prime Minister, selecting former Chief Justice Sushila Karki. This was dubbed "Digital Democracy" <CitationRef ids={[2, 16]} />.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <FileText className="text-slate-600" /> Critical Analysis & Risks
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-orange-50 border border-orange-100 p-6 rounded-xl">
                            <h3 className="font-bold text-orange-800 mb-2">The "Hijacking" Narrative</h3>
                            <p className="text-sm text-orange-900/80">
                                Critics allege Gurung co-opted the uprising. While he started as a volunteer, he "entrenched himself" in negotiations, sidelining other grassroots groups. Some factions accused him of monopolizing military contacts <CitationRef ids={[3, 9]} />.
                            </p>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-800 mb-2">Geopolitical "Red Lines"</h3>
                            <p className="text-sm text-slate-600">
                                The "TOB" (Tibetan Original Blood) t-shirt controversy damaged his reputation among nationalists. Hami Nepal listed "Students for a Free Tibet" as a partner, fueling "Color Revolution" theories that the uprising was foreign-funded <CitationRef ids={[12, 25]} />.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="lg:col-span-1">
                <Timeline events={uprisingEvents} title="Uprising Timeline" />
            </div>
        </div>
    </div>
  );
};