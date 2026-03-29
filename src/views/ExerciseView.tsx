import React, { useState } from 'react';
import { Exercise, Stats } from '../types';
import { MetricsBar } from '../components/MetricsBar';
import { TypingArea } from '../components/TypingArea';
import { VirtualKeyboard } from '../components/VirtualKeyboard';
import { HandGuide } from '../components/HandGuide';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronLeft } from 'lucide-react';

interface ExerciseViewProps {
  exercise: Exercise;
  onBack: () => void;
}

export const ExerciseView: React.FC<ExerciseViewProps> = ({ exercise, onBack }) => {
  const [stats, setStats] = useState<Stats>({ toques: 0, acertos: 0, erros: 0, cpm: 0, precisao: 100 });
  const [activeKey, setActiveKey] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const targetKey = exercise.content[stats.acertos] || '';

  const handleKeyPress = (key: string) => {
    setActiveKey(key);
    setTimeout(() => setActiveKey(''), 100);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-8">
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-muted hover:text-ink transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="font-display text-sm font-medium uppercase tracking-widest">Voltar</span>
        </button>
        <div className="text-center">
          <h1 className="text-3xl font-bold">{exercise.title}</h1>
          <p className="text-muted text-sm">{exercise.category} • {exercise.difficulty}</p>
        </div>
        <div className="w-24" />
      </div>

      <MetricsBar stats={stats} />

      <TypingArea 
        content={exercise.content}
        onStatsChange={setStats}
        onComplete={() => setIsComplete(true)}
        onKeyPress={handleKeyPress}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <VirtualKeyboard targetKey={targetKey} activeKey={activeKey} />
        <HandGuide targetKey={targetKey} />
      </div>

      <AnimatePresence>
        {isComplete && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 backdrop-blur-sm"
          >
            <div className="bg-white p-12 rounded-3xl shadow-2xl border border-border text-center max-w-md space-y-6">
              <div className="flex justify-center">
                <CheckCircle2 size={64} className="text-success" />
              </div>
              <h2 className="text-3xl font-bold">Exercício Concluído!</h2>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="p-4 bg-bg rounded-2xl">
                  <p className="text-[10px] uppercase tracking-widest text-muted">Velocidade</p>
                  <p className="text-2xl font-bold">{stats.cpm} CPM</p>
                </div>
                <div className="p-4 bg-bg rounded-2xl">
                  <p className="text-[10px] uppercase tracking-widest text-muted">Precisão</p>
                  <p className="text-2xl font-bold">{stats.precisao}%</p>
                </div>
              </div>
              <button 
                onClick={onBack}
                className="w-full py-4 bg-accent text-white rounded-2xl font-display font-bold uppercase tracking-widest hover:bg-accent/90 transition-colors"
              >
                Continuar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
