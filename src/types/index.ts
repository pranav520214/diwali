export type AppState = 'intro' | 'main';

export type ActiveModal = 'none' | 'greeting' | 'share' | 'light-diya' | 'blessing-mantra';

export type CardTheme = 'royal-swarna' | 'ruby-gulal' | 'mayura-emerald' | 'kesari-sunset';

export interface GreetingData {
  recipient: string;
  sender: string;
  message: string;
  theme: CardTheme;
  diyaCount?: number;
}

export interface BlessingPreset {
  id: string;
  title: string;
  category: 'Traditional' | 'Family' | 'Prosperity' | 'Friends';
  sanskrit?: string;
  text: string;
}

export interface DiyaDedication {
  id: string;
  name: string;
  intent: string;
  timestamp: number;
}

export interface AudioEngineState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  isSynthesizedFallback: boolean;
  isAutoplayBlocked: boolean;
}
