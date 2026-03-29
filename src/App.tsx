import React, { useState } from 'react';
import { StudentDashboard } from './views/StudentDashboard';
import { InstructorDashboard } from './views/InstructorDashboard';
import { ExerciseView } from './views/ExerciseView';
import { Exercise, SAMPLE_EXERCISES } from './types';
import { Layout, LayoutDashboard, Settings, LogOut, User, BookOpen, ShieldCheck } from 'lucide-react';
import { cn } from './lib/utils';

type View = 'student-dashboard' | 'instructor-dashboard' | 'exercise';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('student-dashboard');
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const handleSelectExercise = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setCurrentView('exercise');
  };

  const renderView = () => {
    switch (currentView) {
      case 'student-dashboard':
        return <StudentDashboard onSelectExercise={handleSelectExercise} />;
      case 'instructor-dashboard':
        return <InstructorDashboard />;
      case 'exercise':
        return selectedExercise ? (
          <ExerciseView 
            exercise={selectedExercise} 
            onBack={() => setCurrentView('student-dashboard')} 
          />
        ) : null;
      default:
        return <StudentDashboard onSelectExercise={handleSelectExercise} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-bg">
      {/* Sidebar */}
      <aside className="w-24 bg-white border-r border-border flex flex-col items-center py-12 gap-12 sticky top-0 h-screen">
        <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-accent/20">
          <ShieldCheck size={28} strokeWidth={2.5} />
        </div>
        
        <nav className="flex flex-col gap-8 flex-1">
          {[
            { id: 'student-dashboard', icon: LayoutDashboard, label: 'Painel' },
            { id: 'instructor-dashboard', icon: BookOpen, label: 'Instrutor' },
            { id: 'settings', icon: Settings, label: 'Config' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as View)}
              className={cn(
                "p-4 rounded-2xl transition-all duration-300 group relative",
                currentView === item.id ? "bg-accent text-white shadow-lg shadow-accent/20" : "text-muted hover:bg-bg hover:text-ink"
              )}
            >
              <item.icon size={24} />
              <span className="absolute left-full ml-4 px-3 py-1 bg-ink text-white text-[10px] font-display uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex flex-col gap-8">
          <button className="p-4 text-muted hover:text-ink transition-colors">
            <User size={24} />
          </button>
          <button className="p-4 text-muted hover:text-error transition-colors">
            <LogOut size={24} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {renderView()}
      </main>
    </div>
  );
}
