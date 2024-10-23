import create from 'zustand';
import { toast } from 'react-hot-toast';

interface PriceAlert {
  id: string;
  itemName: string;
  condition: 'above' | 'below';
  price: string;
}

interface AlertStore {
  alerts: PriceAlert[];
  createAlert: (alert: Omit<PriceAlert, 'id'>) => void;
  deleteAlert: (id: string) => void;
}

export const usePriceAlerts = create<AlertStore>((set) => ({
  alerts: [],
  createAlert: (newAlert) => {
    set((state) => ({
      alerts: [
        ...state.alerts,
        { ...newAlert, id: Math.random().toString(36).substr(2, 9) },
      ],
    }));
    toast.success('Price alert created successfully!');
  },
  deleteAlert: (id) => {
    set((state) => ({
      alerts: state.alerts.filter((alert) => alert.id !== id),
    }));
    toast.success('Price alert deleted successfully!');
  },
}));