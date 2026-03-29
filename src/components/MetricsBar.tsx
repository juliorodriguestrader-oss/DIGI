import React from 'react';
import { Stats } from '../types';

interface MetricsBarProps {
  stats: Stats;
}

export const MetricsBar: React.FC<MetricsBarProps> = ({ stats }) => {
  const items = [
    { label: 'Toques', value: stats.toques },
    { label: 'Acertos', value: stats.acertos, color: 'text-success' },
    { label: 'Erros', value: stats.erros, color: 'text-error' },
    { label: 'CPM', value: stats.cpm },
    { label: 'Precisão', value: `${stats.precisao}%` },
  ];

  return (
    <div className="flex justify-center gap-12 py-6 px-12 bg-white rounded-3xl shadow-sm border border-border">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="text-[10px] font-display uppercase tracking-widest text-muted mb-1">
            {item.label}
          </span>
          <span className={`text-2xl font-display font-bold ${item.color || 'text-ink'}`}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};
