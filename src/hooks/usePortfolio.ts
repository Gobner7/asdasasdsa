import { useQuery } from 'react-query';
import { tradingAPI } from '../services/api';

export const usePortfolio = () => {
  const { data, isLoading } = useQuery('portfolio', tradingAPI.getPortfolio, {
    refetchInterval: 60000, // Refresh every minute
  });

  const stats = {
    totalValue: data?.totalValue || 0,
    dayChange: data?.dayChange || 0,
    totalProfit: data?.totalProfit || 0,
  };

  return {
    portfolio: data || { items: [], history: [] },
    stats,
    isLoading,
  };
};