import React from 'react';
import { Card, Title, AreaChart, Grid, Metric, Text, Flex, BadgeDelta } from '@tremor/react';
import { useMarketData } from '../hooks/useMarketData';

const MarketOverview = () => {
  const { marketData, marketStats, isLoading } = useMarketData();

  if (isLoading) {
    return <div>Loading market data...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <Text>24h Volume</Text>
          <Flex className="mt-2">
            <Metric>$2.89M</Metric>
            <BadgeDelta deltaType="increase">12.3%</BadgeDelta>
          </Flex>
        </Card>
        <Card>
          <Text>Active Listings</Text>
          <Flex className="mt-2">
            <Metric>23,456</Metric>
            <BadgeDelta deltaType="decrease">3.4%</BadgeDelta>
          </Flex>
        </Card>
        <Card>
          <Text>Market Volatility</Text>
          <Flex className="mt-2">
            <Metric>Medium</Metric>
            <BadgeDelta deltaType="moderateIncrease">5.5%</BadgeDelta>
          </Flex>
        </Card>
      </div>

      <Card>
        <Title>Market Volume & Average Prices</Title>
        <AreaChart
          className="h-72 mt-4"
          data={marketData}
          index="date"
          categories={["volume", "avgPrice"]}
          colors={["indigo", "cyan"]}
          valueFormatter={{
            volume: (value) => `$${(value/1000).toFixed(1)}K`,
            avgPrice: (value) => `$${value.toFixed(2)}`
          }}
        />
      </Card>
    </>
  );
};

export default MarketOverview;