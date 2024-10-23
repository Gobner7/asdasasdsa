import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

interface MarketData {
  date: string;
  volume: number;
  avgPrice: number;
}

interface MarketStats {
  volume24h: number;
  volumeChange: number;
  activeListings: number;
  listingsChange: number;
  volatility: string;
  volatilityChange: number;
}

export const useMarketData = () => {
  const { data: marketData, isLoading } = useQuery<MarketData[]>(
    'marketData',
    async () => {
      // In production, replace with actual API call
      return [
        { date: '2023-01', volume: 2890, avgPrice: 234 },
        { date: '2023-02', volume: 2756, avgPrice: 267 },
        { date: '2023-03', volume: 3322, avgPrice: 255 },
      ];
    }
  );

  const { data: marketStats } = useQuery<MarketStats>(
    'marketStats',
    async () => {
      // In production, replace with actual API call
      return {
        volume24h: 2890000,
        volumeChange: 12.3,
        activeListings: 23456,
        listingsChange: -3.4,
        volatility: 'Medium',
        volatilityChange: 5.5,
      };
    }
  );

  return {
    marketData: marketData || [],
    marketStats,
    isLoading,
  };
};