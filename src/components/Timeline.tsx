import React from 'react';
import { TimelineEvent, DynamicTimelineEvent } from '../types';
import { CitationRef } from './CitationRef';

interface Props {
  events?: TimelineEvent[];
  dynamicEvents?: DynamicTimelineEvent[];
  title?: string;
  className?: string;
}

export const Timeline: React.FC<Props> = ({ events, dynamicEvents, title, className = "" }) => {
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

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6 ${className}`}>
      {title && <h2 className="text-xl md:text-2xl font-bold mb-6">{title}</h2>}
      <div className="border-l-2 border-slate-200 ml-2 md:ml-3 space-y-6 md:space-y-8">
        {events && events.map((event, idx) => (
          <div key={idx} className="relative pl-6 md:pl-8">
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

        {dynamicEvents && dynamicEvents.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-6">
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 py-2 -ml-3 pl-3">
              <span className="text-sm font-black text-slate-400 uppercase tracking-widest border-b-2 border-slate-100 pb-1">
                {group.period}
              </span>
            </div>
            {group.items.map((item, itemIdx) => {
              if (Array.isArray(item)) {
                return item.map((subItem, subIdx) => {
                  const { content, citations } = parseCitations(subItem);
                  return (
                    <div key={`${itemIdx}-${subIdx}`} className="relative pl-6 md:pl-8">
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {cleanBold(content)} <CitationRef ids={citations} />
                      </p>
                    </div>
                  );
                });
              }
              const { content, citations } = parseCitations(item);
              return (
                <div key={itemIdx} className="relative pl-6 md:pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-4 border-white shadow-sm"></div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cleanBold(content)} <CitationRef ids={citations} />
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
