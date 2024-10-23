import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { toast } from 'react-hot-toast';

export const useWebSocket = () => {
  useEffect(() => {
    // Disable WebSocket in development to prevent connection errors
    if (process.env.NODE_ENV === 'development') {
      return;
    }

    const socket = io('wss://api.example.com');

    socket.on('priceAlert', (data) => {
      toast.success(`Price alert: ${data.itemName} is now ${data.price}!`);
    });

    socket.on('arbitrageOpportunity', (data) => {
      toast.success(
        `New arbitrage opportunity: ${data.itemName} - Potential profit: $${data.profit}`
      );
    });

    return () => {
      socket.disconnect();
    };
  }, []);
};