import React from 'react';
import { Card, Title, AreaChart, Metric, Text, TabGroup, Tab, TabList } from '@tremor/react';
import { usePortfolio } from '../hooks/usePortfolio';

const PortfolioTracker = () => {
  const { portfolio, stats, isLoading } = usePortfolio();

  if (isLoading) return <div>Loading portfolio...</div>;

  return (
    <Card>
      <div className="flex justify-between items-center">
        <Title>Portfolio Overview</Title>
        <Metric>${stats.totalValue.toFixed(2)}</Metric>
      </div>

      <TabGroup>
        <TabList>
          <Tab>Performance</Tab>
          <Tab>Holdings</Tab>
          <Tab>Trade History</Tab>
        </TabList>
      </TabGroup>

      <div className="mt-4">
        <Text>24h Change</Text>
        <Metric color={stats.dayChange >= 0 ? 'green' : 'red'}>
          {stats.dayChange >= 0 ? '+' : ''}{stats.dayChange}%
        </Metric>
      </div>

      <AreaChart
        className="mt-6 h-72"
        data={portfolio.history}
        index="date"
        categories={["value"]}
        colors={["blue"]}
        valueFormatter={(value) => `$${value.toFixed(2)}`}
      />
    </Card>
  );
}

export default PortfolioTracker;