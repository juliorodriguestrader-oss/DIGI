import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Exercise, UserProgress } from '../types';
import { SAMPLE_EXERCISES } from '../types';
import { Trophy, Zap, Target, BookOpen, ChevronRight } from 'lucide-react';

const DATA = [
  { day: 'Seg', cpm: 120 },
  { day: 'Ter', cpm: 145 },
  { day: 'Qua', cpm: 138 },
  { day: 'Qui', cpm: 160 },
  { day: 'Sex', cpm: 155 },
  { day: 'Sáb', cpm: 172 },
  { day: 'Dom', cpm: 180 },
];

interface StudentDashboardProps {
  onSelectExercise: (exercise: Exercise) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ onSelectExercise }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-12 py-12 px-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-bold mb-2">Olá, Julio</h1>
          <p className="text-muted text-lg">Seu progresso está excelente esta semana.</p>
        </div>
        <div className="flex gap-4">
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-border flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
              <Trophy size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted">Ranking</p>
              <p className="text-xl font-bold">#12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Velocidade Média', value: '158 CPM', icon: Zap, color: 'text-accent' },
          { label: 'Precisão Média', value: '96.4%', icon: Target, color: 'text-success' },
          { label: 'Exercícios', value: '24/48', icon: BookOpen, color: 'text-ink' },
          { label: 'Tempo Total', value: '12h 45m', icon: Zap, color: 'text-muted' },
        ].map((stat, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-border space-y-4">
            <div className={stat.color}>
              <stat.icon size={32} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-white p-12 rounded-[40px] shadow-sm border border-border space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Evolução Semanal</h2>
            <div className="flex gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-xs text-muted">CPM</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#F8FAFC' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="cpm" radius={[8, 8, 8, 8]} barSize={40}>
                  {DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === DATA.length - 1 ? '#3B82F6' : '#E2E8F0'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[40px] shadow-sm border border-border space-y-8">
          <h2 className="text-3xl font-bold">Próximas Lições</h2>
          <div className="space-y-4">
            {SAMPLE_EXERCISES.map((ex) => (
              <button 
                key={ex.id}
                onClick={() => onSelectExercise(ex)}
                className="w-full group p-6 bg-bg rounded-3xl flex items-center justify-between hover:bg-accent hover:text-white transition-all duration-300"
              >
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">{ex.difficulty}</p>
                  <p className="font-display font-bold text-lg">{ex.title}</p>
                </div>
                <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
