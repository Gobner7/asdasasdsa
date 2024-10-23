import { create } from 'zustand';
import { tradingAPI } from '../services/api';

interface TradingStrategy {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive';
  params: Record<string, any>;
}

interface TradingBotStore {
  strategies: TradingStrategy[];
  activateStrategy: (type: string) => Promise<void>;
  deactivateStrategy: (id: string) => Promise<void>;
}

export const useTradingBot = create<TradingBotStore>((set) => ({
  strategies: [],
  activateStrategy: async (type) => {
    const newStrategy = {
      id: Math.random().toString(36).substr(2, 9),
      name: type.charAt(0).toUpperCase() + type.slice(1),
      type,
      status: 'active' as const,
      params: {},
    };
    
    set((state) => ({
      strategies: [...state.strategies, newStrategy],
    }));
  },
  deactivateStrategy: async (id) => {
    set((state) => ({
      strategies: state.strategies.filter((s) => s.id !== id),
    }));
  },
}));