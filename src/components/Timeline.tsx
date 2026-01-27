import React from 'react';
import { TimelineEvent } from '../types';
import { CitationRef } from './CitationRef';

interface Props {
  events: TimelineEvent[];
  title?: string;
  className?: string;
}

export const Timeline: React.FC<Props> = ({ events, title, className = "" }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      <div className="border-l-2 border-slate-200 ml-3 space-y-8">
        {events.map((event, idx) => (
          <div key={idx} className="relative pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-4 border-white shadow-sm"></div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {event.date ? `${event.date}, ${event.year}` : event.year}
            </span>
            <h4 className="text-lg font-bold text-slate-800 mt-2">{event.title}</h4>
            <p className="text-sm text-slate-600 mt-1">
              {event.description} <CitationRef ids={event.citation} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
