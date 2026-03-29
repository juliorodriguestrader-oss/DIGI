export interface Exercise {
  id: string;
  title: string;
  content: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  category: string;
}

export interface Stats {
  toques: number;
  acertos: number;
  erros: number;
  cpm: number;
  precisao: number;
}

export interface UserProgress {
  exerciseId: string;
  date: string;
  stats: Stats;
}

export const SAMPLE_EXERCISES: Exercise[] = [
  {
    id: '1',
    title: 'Posicionamento Básico',
    content: 'asdf jkl; asdf jkl; asdf jkl;',
    difficulty: 'Iniciante',
    category: 'Fundamentos'
  },
  {
    id: '2',
    title: 'Teclas Superiores',
    content: 'qwer uiop qwer uiop qwer uiop',
    difficulty: 'Iniciante',
    category: 'Fundamentos'
  },
  {
    id: '3',
    title: 'Frases Curtas',
    content: 'O gato subiu no telhado e miou para a lua cheia.',
    difficulty: 'Intermediário',
    category: 'Sentenças'
  }
];
