import axios from 'axios';
import { useAuth } from './auth';

const api = axios.create({
  baseURL: 'https://api.example.com/v1',
});

api.interceptors.request.use((config) => {
  const token = useAuth.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const tradingAPI = {
  getMarketData: async (itemId: string) => {
    const response = await api.get(`/market/${itemId}`);
    return response.data;
  },

  executeAutomatedTrade: async (tradeParams: any) => {
    const response = await api.post('/trade/execute', tradeParams);
    return response.data;
  },

  getPortfolio: async () => {
    const response = await api.get('/portfolio');
    return response.data;
  },
};

export default api;