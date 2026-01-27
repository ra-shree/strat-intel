import React from 'react';

interface Props {
  ids: number[];
}

export const CitationRef: React.FC<Props> = ({ ids }) => {
  return (
    <sup className="text-blue-600 font-semibold ml-0.5 cursor-help" title={`See citation ${ids.join(', ')}`}>
      [{ids.join(', ')}]
    </sup>
  );
};