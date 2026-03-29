import React from 'react';
import { cn } from '../lib/utils';

interface HandGuideProps {
  targetKey: string;
}

const FINGER_MAP: Record<string, string> = {
  'Q': 'L4', 'A': 'L4', 'Z': 'L4', '1': 'L4',
  'W': 'L3', 'S': 'L3', 'X': 'L3', '2': 'L3',
  'E': 'L2', 'D': 'L2', 'C': 'L2', '3': 'L2',
  'R': 'L1', 'F': 'L1', 'V': 'L1', '4': 'L1', '5': 'L1', 'T': 'L1', 'G': 'L1', 'B': 'L1',
  'Y': 'R1', 'H': 'R1', 'N': 'R1', '6': 'R1', '7': 'R1', 'U': 'R1', 'J': 'R1', 'M': 'R1',
  'I': 'R2', 'K': 'R2', ',': 'R2', '8': 'R2',
  'O': 'R3', 'L': 'R3', '.': 'R3', '9': 'R3',
  'P': 'R4', 'Ç': 'R4', ';': 'R4', '0': 'R4',
  ' ': 'T'
};

export const HandGuide: React.FC<HandGuideProps> = ({ targetKey }) => {
  const activeFinger = FINGER_MAP[targetKey.toUpperCase()] || '';

  const renderHand = (side: 'L' | 'R') => (
    <div className="flex gap-1 items-end h-24">
      {[4, 3, 2, 1].map((f) => {
        const fingerId = `${side}${f}`;
        const isActive = activeFinger === fingerId;
        return (
          <div
            key={fingerId}
            className={cn(
              "w-4 rounded-t-full bg-slate-200 transition-all duration-300",
              f === 4 ? "h-12" : f === 3 ? "h-16" : f === 2 ? "h-20" : "h-14",
              isActive && "bg-accent shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            )}
          />
        );
      })}
      <div className={cn(
        "w-6 h-10 bg-slate-200 rounded-full transition-all duration-300",
        activeFinger === 'T' && "bg-accent shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      )} />
    </div>
  );

  return (
    <div className="flex justify-between w-full max-w-md mx-auto px-8 py-4 bg-white rounded-2xl shadow-sm border border-border">
      <div className="flex flex-col items-center gap-2">
        {renderHand('L')}
        <span className="text-[10px] font-display uppercase tracking-widest text-muted">Esquerda</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1 items-end h-24 flex-row-reverse">
          {[4, 3, 2, 1].map((f) => {
            const fingerId = `R${f}`;
            const isActive = activeFinger === fingerId;
            return (
              <div
                key={fingerId}
                className={cn(
                  "w-4 rounded-t-full bg-slate-200 transition-all duration-300",
                  f === 4 ? "h-12" : f === 3 ? "h-16" : f === 2 ? "h-20" : "h-14",
                  isActive && "bg-accent shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                )}
              />
            );
          })}
          <div className={cn(
            "w-6 h-10 bg-slate-200 rounded-full transition-all duration-300",
            activeFinger === 'T' && "bg-accent shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          )} />
        </div>
        <span className="text-[10px] font-display uppercase tracking-widest text-muted">Direita</span>
      </div>
    </div>
  );
};
