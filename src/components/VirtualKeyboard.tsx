import React from 'react';
import { cn } from '../lib/utils';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', ';']
];

interface VirtualKeyboardProps {
  targetKey: string;
  activeKey: string;
}

export const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ targetKey, activeKey }) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-2xl shadow-sm border border-border max-w-3xl mx-auto">
      {KEYBOARD_ROWS.map((row, i) => (
        <div key={i} className={cn("flex gap-2 justify-center", i === 1 && "ml-4", i === 2 && "ml-8")}>
          {row.map((key) => {
            const isTarget = targetKey.toUpperCase() === key.toUpperCase();
            const isActive = activeKey.toUpperCase() === key.toUpperCase();
            
            return (
              <div
                key={key}
                className={cn(
                  "w-12 h-12 flex items-center justify-center rounded-lg border border-border font-mono text-sm transition-all duration-75",
                  isTarget && "border-accent text-accent ring-2 ring-accent/20 animate-pulse",
                  isActive && "bg-accent text-white scale-95"
                )}
              >
                {key}
              </div>
            );
          })}
        </div>
      ))}
      <div className="flex justify-center mt-2">
        <div className={cn(
          "w-64 h-12 rounded-lg border border-border flex items-center justify-center font-mono text-xs text-muted",
          targetKey === ' ' && "border-accent text-accent ring-2 ring-accent/20 animate-pulse",
          activeKey === ' ' && "bg-accent text-white scale-95"
        )}>
          ESPAÇO
        </div>
      </div>
    </div>
  );
};
