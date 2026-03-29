import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '../lib/utils';

interface TypingAreaProps {
  content: string;
  onStatsChange: (stats: { toques: number; acertos: number; erros: number; cpm: number; precisao: number }) => void;
  onComplete: () => void;
  onKeyPress: (key: string) => void;
}

export const TypingArea: React.FC<TypingAreaProps> = ({ content, onStatsChange, onComplete, onKeyPress }) => {
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [errors, setErrors] = useState<number>(0);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key.length === 1) {
      onKeyPress(e.key);
      
      if (!startTime) {
        setStartTime(Date.now());
      }

      const nextChar = content[userInput.length];
      if (e.key === nextChar) {
        const newInput = userInput + e.key;
        setUserInput(newInput);
        
        if (newInput.length === content.length) {
          onComplete();
        }
      } else {
        setErrors(prev => prev + 1);
      }
    }
  }, [userInput, content, startTime, onKeyPress, onComplete]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const toques = userInput.length + errors;
    const acertos = userInput.length;
    const precisao = toques > 0 ? Math.round((acertos / toques) * 100) : 100;
    
    let cpm = 0;
    if (startTime) {
      const elapsedMinutes = (Date.now() - startTime) / 60000;
      cpm = Math.round(acertos / (elapsedMinutes || 1));
    }

    onStatsChange({ toques, acertos, erros: errors, cpm, precisao });
  }, [userInput, errors, startTime, onStatsChange]);

  return (
    <div className="relative p-12 bg-white rounded-3xl shadow-sm border border-border min-h-[200px] flex items-center justify-center">
      <div className="text-4xl font-mono leading-relaxed tracking-wider text-center max-w-4xl">
        {content.split('').map((char, i) => {
          let color = 'text-slate-300';
          if (i < userInput.length) {
            color = 'text-success';
          } else if (i === userInput.length) {
            color = 'text-accent border-b-2 border-accent';
          }
          
          return (
            <span key={i} className={cn(color, i === userInput.length && "animate-pulse")}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </div>
    </div>
  );
};
