import React, { useState } from 'react';
import { Card, Title, Select, SelectItem, Button, TextInput } from '@tremor/react';
import { useTradingBot } from '../hooks/useTradingBot';

const TradingBot = () => {
  const { strategies, activateStrategy, deactivateStrategy } = useTradingBot();
  const [selectedStrategy, setSelectedStrategy] = useState('');

  return (
    <Card>
      <Title>Automated Trading Strategies</Title>
      
      <div className="mt-4 space-y-4">
        <Select
          value={selectedStrategy}
          onValueChange={setSelectedStrategy}
          placeholder="Select trading strategy"
        >
          <SelectItem value="arbitrage">Cross-Market Arbitrage</SelectItem>
          <SelectItem value="momentum">Momentum Trading</SelectItem>
          <SelectItem value="volatility">Volatility Trading</SelectItem>
        </Select>

        <div className="flex gap-2">
          <TextInput
            placeholder="Max trade amount"
            type="number"
          />
          <TextInput
            placeholder="Stop loss %"
            type="number"
          />
        </div>

        <Button
          onClick={() => activateStrategy(selectedStrategy)}
          className="w-full"
        >
          Activate Strategy
        </Button>
      </div>

      <div className="mt-6">
        <Title>Active Strategies</Title>
        {strategies.map((strategy) => (
          <div key={strategy.id} className="flex justify-between items-center mt-2 p-2 border rounded">
            <span>{strategy.name}</span>
            <Button
              size="xs"
              variant="secondary"
              color="red"
              onClick={() => deactivateStrategy(strategy.id)}
            >
              Deactivate
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default TradingBot;