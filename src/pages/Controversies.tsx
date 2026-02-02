import React from 'react';
import { AlertTriangle, ShieldX, Info } from 'lucide-react';
import { CitationRef } from '../components/CitationRef';
import data from '../data/output.json';
import { DataStructure } from '../types';

const profileKey = Object.keys(data)[0];
const profileData = (data as DataStructure)[profileKey];

export const Controversies: React.FC = () => {
  const parseCitations = (text: string): { content: string, citations: number[] } => {
    const citations: number[] = [];
    const content = text.replace(/\[cite:\s*([\d,\s]+)\]/g, (_, ids) => {
      ids.split(',').forEach((id: string) => {
        const parsedId = parseInt(id.trim());
        if (!isNaN(parsedId)) citations.push(parsedId);
      });
      return '';
    });
    return { content, citations };
  };

  const cleanBold = (text: string) => text.replace(/\*\*(.*?)\*\*/g, '$1');

  const controversies = profileData["Controversies, Criticism, and Legal Issues"];

  if (!controversies || Object.keys(controversies).length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <header>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 border-l-8 border-amber-600 pl-4">
            Controversies & Criticism
          </h1>
          <p className="text-xl text-slate-600">
            No controversies recorded for {profileKey}.
          </p>
        </header>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-12">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 border-l-8 border-amber-600 pl-4">
          Controversies & Criticism
        </h1>
        <p className="text-lg md:text-xl text-slate-600">
          Analysis of legal issues, political criticism, and public controversies surrounding {profileKey}.
        </p>
      </header>

      <div className="grid gap-8">
        {Object.entries(controversies).map(([title, content], idx) => {
          if (title === "[]" || !content) return null;

          const items = Array.isArray(content) ? content : [content];
          if (items.length === 0) return null;

          return (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
                <AlertTriangle className="text-amber-600" size={20} />
                <h3 className="font-bold text-slate-900">{title}</h3>
              </div>
              <div className="p-6 space-y-4">
                {items.map((item, i) => {
                  if (typeof item !== 'string') return null;
                  const { content: cleanText, citations } = parseCitations(item);
                  return (
                    <p key={i} className="text-slate-600 leading-relaxed">
                      {cleanBold(cleanText)} <CitationRef ids={citations} />
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
        <div className="bg-amber-100 p-2 rounded-lg h-fit">
          <Info className="text-amber-700" size={20} />
        </div>
        <div>
          <h4 className="font-bold text-amber-900 mb-1">Neutral Point of View</h4>
          <p className="text-sm text-amber-800 leading-relaxed">
            This section documents documented controversies and criticisms as reported in various sources.
            The inclusion of these points does not imply verification of all allegations, but rather reflects
            the public discourse and legal history of the subject.
          </p>
        </div>
      </div>
    </div>
  );
};
