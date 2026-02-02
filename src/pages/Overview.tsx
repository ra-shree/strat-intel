import React from 'react';
import { Award, ShieldAlert, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMPACT_METRICS } from '../constants';
import { CitationRef } from '../components/CitationRef';
import data from '../data/output.json';
import { DataStructure } from '../types';

const profileKey = Object.keys(data)[0];
const profileData = (data as DataStructure)[profileKey];

export const Overview: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12 pb-12">
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-12 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden rounded-b-3xl md:rounded-3xl shadow-2xl mx-0 md:mx-6 mt-0 md:mt-6">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl relative z-10">
          <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold tracking-wider uppercase mb-4 rounded-sm">
            Strategic Profile
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Amresh Kumar Singh: <br />
            <span className="text-slate-400">The Backchannel Firebrand</span>
          </h1>
          {profileData["Key Points"] && profileData["Key Points"].length > 0 && (
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {profileData["Key Points"][0].replace(/\*\*(.*?)\*\*/g, '$1')}
            </p>
          )}
          <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-8">
            <span className="flex items-center gap-2"><Award size={16} /> JNU Scholar</span>
            <span className="flex items-center gap-2"><ShieldAlert size={16} /> Independent Rebel</span>
            <span className="flex items-center gap-2"><Users size={16} /> RSP Candidate</span>
          </div>

          <div className="flex gap-4">
            <Link to="/biography" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
              Read Biography <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-800">Key Impact Metrics</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      {profileData["Subject Overview"] && (
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-800">Executive Summary</h2>
            <div className="text-slate-600 mb-4 leading-relaxed space-y-4">
              {profileData["Subject Overview"].split('\n\n').map((para, i) => (
                <p key={i}>{para.replace(/\[cite:.*?\]/g, '')}</p>
              ))}
            </div>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">Quick Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/biography" className="block p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow group">
                  <span className="font-bold text-blue-600 group-hover:underline">Biography</span>
                  <p className="text-xs text-slate-500">From JNU to Sarlahi Politics</p>
                </Link>
              </li>
              <li>
                <Link to="/organization" className="block p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow group">
                  <span className="font-bold text-blue-600 group-hover:underline">Political Alignment</span>
                  <p className="text-xs text-slate-500">NC, Independent & RSP Transition</p>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};
