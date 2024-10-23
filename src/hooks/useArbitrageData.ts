import { useQuery } from 'react-query';
import axios from 'axios';

interface ArbitrageOpportunity {
  id: string;
  itemName: string;
  buyPrice: number;
  sellPrice: number;
  buyMarket: string;
  sellMarket: string;
}

export const useArbitrageData = () => {
  const { data: opportunities = [], isLoading } = useQuery<ArbitrageOpportunity[]>(
    'arbitrageOpportunities',
    async () => {
      // In production, replace with actual API call
      return [
        {
          id: '1',
          itemName: 'AWP | Neo-Noir (Factory New)',
          buyPrice: 123.45,
          sellPrice: 145.67,
          buyMarket: 'Steam Market',
          sellMarket: 'Skinport',
        },
        {
          id: '2',
          itemName: 'Butterfly Knife | Doppler (Factory New)',
          buyPrice: 1234.56,
          sellPrice: 1345.67,
          buyMarket: 'Buff163',
          sellMarket: 'CS.Money',
        },
      ];
    },
    {
      refetchInterval: 30000, // Refetch every 30 seconds
    }
  );

  return {
    opportunities,
    isLoading,
  };
};