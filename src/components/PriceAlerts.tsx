import React, { useState } from 'react';
import { Button, Dialog, TextInput, Select, SelectItem } from '@tremor/react';
import { usePriceAlerts } from '../hooks/usePriceAlerts';

const PriceAlerts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { alerts, createAlert, deleteAlert } = usePriceAlerts();
  const [newAlert, setNewAlert] = useState({
    itemName: '',
    condition: 'above',
    price: '',
  });

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Manage Price Alerts
      </Button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="p-6"
      >
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Price Alerts</h3>
          
          <div className="flex gap-2">
            <TextInput
              placeholder="Item name"
              value={newAlert.itemName}
              onChange={(e) => setNewAlert({ ...newAlert, itemName: e.target.value })}
            />
            <Select
              value={newAlert.condition}
              onChange={(value) => setNewAlert({ ...newAlert, condition: value })}
            >
              <SelectItem value="above">Above</SelectItem>
              <SelectItem value="below">Below</SelectItem>
            </Select>
            <TextInput
              placeholder="Price"
              type="number"
              value={newAlert.price}
              onChange={(e) => setNewAlert({ ...newAlert, price: e.target.value })}
            />
            <Button onClick={() => createAlert(newAlert)}>
              Add Alert
            </Button>
          </div>

          <div className="mt-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex justify-between items-center p-2 border-b">
                <span>
                  {alert.itemName} {alert.condition} ${alert.price}
                </span>
                <Button
                  variant="secondary"
                  color="red"
                  onClick={() => deleteAlert(alert.id)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default PriceAlerts;