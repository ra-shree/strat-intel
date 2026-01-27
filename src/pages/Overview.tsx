import React from 'react';
import { Award, ShieldAlert, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMPACT_METRICS } from '../constants';
import { CitationRef } from '../components/CitationRef';

export const Overview: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden rounded-b-3xl md:rounded-3xl shadow-2xl mx-0 md:mx-6 mt-0 md:mt-6">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl relative z-10">
          <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold tracking-wider uppercase mb-4 rounded-sm">
            Strategic Profile
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Sudan Gurung: <br />
            <span className="text-slate-400">The Architect of Dissent</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            From nightlife entrepreneur to the face of the "Gen Z Uprising," this report analyzes the rise of Sudan Gurung,
            the collapse of traditional party hegemony, and the structural transformation of Nepali civic activism (2015–2026).
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-8">
            <span className="flex items-center gap-2"><Award size={16} /> Disaster-Born Leader</span>
            <span className="flex items-center gap-2"><ShieldAlert size={16} /> Gen Z Icon</span>
            <span className="flex items-center gap-2"><Users size={16} /> Political Broker</span>
          </div>

          <div className="flex gap-4">
            <Link to="/biography" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
              Read Biography <ArrowRight size={16} />
            </Link>
            <Link to="/uprising" className="px-6 py-3 border border-slate-600 text-slate-200 font-bold rounded-lg hover:bg-slate-800 transition-colors">
              2025 Uprising Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Key Impact Metrics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {IMPACT_METRICS.map((metric, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="text-sm text-slate-500 mb-2 font-semibold uppercase tracking-wide">{metric.label}</div>
              <div className="text-3xl font-black text-slate-900 mb-2">{metric.value}</div>
              <div className="text-xs text-slate-400 flex items-center gap-1">
                {metric.description} <CitationRef ids={[metric.citation]} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Executive Summary</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Sudan Gurung represents a new archetype in Nepali politics: the "Crisis Entrepreneur." Unlike traditional politicians who rise through party cadres, Gurung leveraged two national disasters—the 2015 Earthquake and the COVID-19 Pandemic—to build a parallel welfare infrastructure via his organization, Hami Nepal.
          </p>
          <p className="text-slate-600 leading-relaxed">
            By 2025, this infrastructure was weaponized into a political machine capable of mobilizing the Gen Z demographic, ultimately playing a decisive role in the downfall of the K.P. Oli administration. This dossier examines his trajectory, his organization's opacity, and the geopolitical risks associated with his rise.
          </p>
        </div>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-4">Quick Navigation</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/biography" className="block p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow group">
                <span className="font-bold text-blue-600 group-hover:underline">Biography</span>
                <p className="text-xs text-slate-500">From 'OMG' Nightclub to Gorkha Politics</p>
              </Link>
            </li>
            <li>
              <Link to="/organization" className="block p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow group">
                <span className="font-bold text-blue-600 group-hover:underline">Hami Nepal</span>
                <p className="text-xs text-slate-500">Financials, Evolution & Structure</p>
              </Link>
            </li>
            <li>
              <Link to="/uprising" className="block p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow group">
                <span className="font-bold text-red-600 group-hover:underline">The 2025 Uprising</span>
                <p className="text-xs text-slate-500">How the government fell in 5 days</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
