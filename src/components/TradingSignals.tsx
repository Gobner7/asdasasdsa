import React from 'react';
import { Card, Title, List, ListItem, Badge } from '@tremor/react';

const TradingSignals = () => {
  return (
    <Card>
      <Title>Live Trading Signals</Title>
      <List className="mt-4">
        <ListItem>
          <span>AWP | Neo-Noir</span>
          <Badge color="green">Buy Signal</Badge>
        </ListItem>
        <ListItem>
          <span>AK-47 | Asiimov</span>
          <Badge color="red">Sell Signal</Badge>
        </ListItem>
        <ListItem>
          <span>M4A4 | The Emperor</span>
          <Badge color="yellow">Hold</Badge>
        </ListItem>
      </List>
    </Card>
  );
};

export default TradingSignals;