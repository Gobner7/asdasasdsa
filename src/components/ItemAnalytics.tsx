import React from 'react';
import { Card, Title, BarChart } from '@tremor/react';

const itemData = [
  { name: 'AWP | Dragon Lore', value: 1234, trend: '+12%' },
  { name: 'Butterfly Knife', value: 987, trend: '-3%' },
  { name: 'AK-47 | Wild Lotus', value: 876, trend: '+5%' },
  // More items...
];

const ItemAnalytics = () => {
  return (
    <Card>
      <Title>Top Items by Trading Volume</Title>
      <BarChart
        className="h-72 mt-4"
        data={itemData}
        index="name"
        categories={["value"]}
        colors={["blue"]}
      />
    </Card>
  );
};

export default ItemAnalytics;