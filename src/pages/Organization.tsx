import React from 'react';
import { Building, TrendingUp } from 'lucide-react';
import { CitationRef } from '../components/CitationRef';
import { Timeline } from '../components/Timeline';
import { FinancialChart } from '../components/FinancialChart';
import { TIMELINE_EVENTS } from '../constants';

export const Organization: React.FC = () => {
  // Filter for organization events
  const orgEvents = TIMELINE_EVENTS.filter(e => 
    e.title.includes('Hami Nepal') || e.title.includes('Save Ghopa') || e.title.includes('Institutionalization')
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <div>
            <h1 className="text-3xl font-bold mb-4 border-l-8 border-blue-600 pl-4">Hami Nepal</h1>
            <p className="text-xl text-slate-600">
                Analysis of the organization's evolution, financials, and operational structure.
            </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-8">
            {/* Evolution Phases */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800">Organizational Evolution</h2>
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-slate-300 shadow-sm">
                    <h3 className="font-bold text-lg mb-1 flex items-center justify-between">
                        Phase I: The Volunteer Collective
                        <span className="text-xs font-normal bg-slate-100 px-2 py-1 rounded text-slate-500">2015-2019</span>
                    </h3>
                    <p className="text-slate-600 text-sm mt-2">
                        <strong>Philosophy:</strong> "The State is Absent, We Must Provide."<br/>
                        Initially operated as "I to We", a loose collective of volunteers. They refused formal NGO registration to avoid bureaucracy, promoting a "No Overhead Policy" where 100% of donations went to victims. This built immense public trust compared to the "Dollar Farming" NGOs <CitationRef ids={[2, 9]} />.
                    </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-400 shadow-sm">
                    <h3 className="font-bold text-lg mb-1 flex items-center justify-between">
                        Phase II: Technocratic Response
                        <span className="text-xs font-normal bg-blue-50 px-2 py-1 rounded text-blue-500">2020-2023</span>
                    </h3>
                    <p className="text-slate-600 text-sm mt-2">
                        <strong>Philosophy:</strong> "Technocratic Competence."<br/>
                        Formal registration (Reg. 609789065) occurred in Aug 2020 during the COVID-19 crisis. While the government faltered, Hami Nepal established oxygen banks and plasma donation networks. This phase also marked the shift to advocacy with the "Save Ghopa" campaign against corruption in BPKIHS <CitationRef ids={[6, 12, 13]} />.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
                    <h3 className="font-bold text-lg mb-1 flex items-center justify-between">
                        Phase III: The "Civilian Force"
                        <span className="text-xs font-normal bg-red-50 px-2 py-1 rounded text-red-500">2025-Present</span>
                    </h3>
                    <p className="text-slate-600 text-sm mt-2">
                        <strong>Philosophy:</strong> "The Old Guard Must Go."<br/>
                        Post-uprising, the organization is pivoting into a "Nagarik Shakti" (Civilian Force)—a permanent watchdog body. Ideology has shifted to "Generational Warfare," positioning Gen Z as a moral class superior to the existing political elite <CitationRef ids={[4, 11]} />.
                    </p>
                </div>
            </div>

            {/* Financial Section */}
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Financial Intelligence</h2>
                <FinancialChart />
            </div>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-8">
             <Timeline events={orgEvents} title="Organizational Timeline" />
             
             <div className="bg-slate-900 text-slate-300 p-6 rounded-xl">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <Building size={20} /> Operational Structure
                </h3>
                <ul className="space-y-4 text-sm">
                    <li className="border-b border-slate-700 pb-2">
                        <strong className="text-white block">Central Committee</strong>
                        Sudan Gurung (President) holds absolute executive power. Critics describe the leadership style as "High-Command Centralized" despite the democratic rhetoric.
                    </li>
                    <li className="border-b border-slate-700 pb-2">
                        <strong className="text-white block">Regional Wings</strong>
                        Active chapters in Dharan, Pokhara, and Chitwan. The Dharan chapter was instrumental in the "Save Ghopa" movement.
                    </li>
                    <li>
                        <strong className="text-white block">Digital Wing</strong>
                        A dedicated team managing Discord servers and social media, capable of bypassing government censorship (as seen during the 2025 ban).
                    </li>
                </ul>
             </div>
        </div>
      </div>
    </div>
  );
};