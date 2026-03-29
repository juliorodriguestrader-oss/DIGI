import React from 'react';
import { Users, BookOpen, Target, Activity, Plus, MoreVertical, Search } from 'lucide-react';

export const InstructorDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12 py-12 px-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-bold mb-2">Painel do Instrutor</h1>
          <p className="text-muted text-lg">Visão geral do desempenho da turma.</p>
        </div>
        <button className="px-8 py-4 bg-accent text-white rounded-2xl font-display font-bold uppercase tracking-widest hover:bg-accent/90 transition-all flex items-center gap-2">
          <Plus size={20} />
          Novo Exercício
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Total de Alunos', value: '124', icon: Users, color: 'text-accent' },
          { label: 'Exercícios Concluídos', value: '1,452', icon: BookOpen, color: 'text-success' },
          { label: 'Média de Precisão', value: '94.2%', icon: Target, color: 'text-error' },
          { label: 'Atividade Semanal', value: '+12%', icon: Activity, color: 'text-ink' },
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
        <div className="lg:col-span-2 bg-white rounded-[40px] shadow-sm border border-border overflow-hidden">
          <div className="p-12 border-b border-border flex justify-between items-center">
            <h2 className="text-3xl font-bold">Atividade Recente</h2>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <input 
                type="text" 
                placeholder="Buscar aluno..." 
                className="pl-12 pr-6 py-3 bg-bg rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 w-64"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-12 py-6 text-[10px] uppercase tracking-widest text-muted">Aluno</th>
                  <th className="px-12 py-6 text-[10px] uppercase tracking-widest text-muted">Exercício</th>
                  <th className="px-12 py-6 text-[10px] uppercase tracking-widest text-muted">CPM</th>
                  <th className="px-12 py-6 text-[10px] uppercase tracking-widest text-muted">Precisão</th>
                  <th className="px-12 py-6 text-[10px] uppercase tracking-widest text-muted">Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: 'Ana Silva', ex: 'Posicionamento Básico', cpm: 145, acc: '98%', date: 'Hoje, 14:30' },
                  { name: 'Bruno Costa', ex: 'Teclas Superiores', cpm: 122, acc: '94%', date: 'Hoje, 12:15' },
                  { name: 'Carla Dias', ex: 'Frases Curtas', cpm: 168, acc: '99%', date: 'Ontem, 18:45' },
                  { name: 'Daniel Lima', ex: 'Posicionamento Básico', cpm: 98, acc: '88%', date: 'Ontem, 16:20' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-bg transition-colors">
                    <td className="px-12 py-6 font-bold">{row.name}</td>
                    <td className="px-12 py-6 text-muted">{row.ex}</td>
                    <td className="px-12 py-6 font-mono">{row.cpm}</td>
                    <td className="px-12 py-6 font-mono text-success">{row.acc}</td>
                    <td className="px-12 py-6 text-muted text-sm">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[40px] shadow-sm border border-border space-y-8">
          <h2 className="text-3xl font-bold">Gerenciar Exercícios</h2>
          <div className="space-y-4">
            {[
              { title: 'Fundamentos', count: 12 },
              { title: 'Velocidade', count: 8 },
              { title: 'Simbolos', count: 5 },
              { title: 'Programação', count: 10 },
            ].map((cat, i) => (
              <div key={i} className="p-6 bg-bg rounded-3xl flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-lg">{cat.title}</p>
                  <p className="text-xs text-muted">{cat.count} exercícios</p>
                </div>
                <button className="p-2 hover:bg-white rounded-lg transition-colors">
                  <MoreVertical size={20} className="text-muted" />
                </button>
              </div>
            ))}
          </div>
          <button className="w-full py-4 border-2 border-dashed border-border text-muted rounded-3xl font-display font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-all">
            Ver Todos
          </button>
        </div>
      </div>
    </div>
  );
};
