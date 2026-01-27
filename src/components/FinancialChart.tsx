import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { FINANCIAL_DATA } from '../constants';
import { CitationRef } from './CitationRef';

export const FinancialChart: React.FC = () => {
  const total = FINANCIAL_DATA.reduce((acc, curr) => acc + curr.value, 0);

  const formatCurrency = (value: number) => {
    return `NPR ${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-bold text-slate-900 mb-2">
        Financial Transparency Analysis <CitationRef ids={[12, 19]} />
      </h3>
      <p className="text-sm text-slate-500 mb-6">
        Distribution of ~549.8M NPR raised between 2015-2025.
        Critics highlight the near exhaustion of funds (98.8% expenditure rate) without detailed public auditing.
      </p>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={FINANCIAL_DATA}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {FINANCIAL_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => formatCurrency(value)} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        <div className="p-3 bg-red-50 rounded-lg">
            <span className="block text-xs text-slate-500 uppercase">Implied Expenditure</span>
            <span className="text-lg font-bold text-red-600">{formatCurrency(543465120)}</span>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
            <span className="block text-xs text-slate-500 uppercase">Reserves (2025)</span>
            <span className="text-lg font-bold text-blue-600">{formatCurrency(6352000)}</span>
        </div>
      </div>
    </div>
  );
};