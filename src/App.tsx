import React from 'react';
import { Card, Title, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@tremor/react';
import { Toaster } from 'react-hot-toast';
import MarketOverview from './components/MarketOverview';
import TradingSignals from './components/TradingSignals';
import ItemAnalytics from './components/ItemAnalytics';
import ArbitrageOpportunities from './components/ArbitrageOpportunities';
import PriceAlerts from './components/PriceAlerts';
import PortfolioTracker from './components/PortfolioTracker';
import TradingBot from './components/TradingBot';
import Header from './components/Header';
import useWebSocket from './hooks/useWebSocket';

const App = () => {
  useWebSocket();

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />
      
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Title>CS2 Market Analytics Pro</Title>
            <PriceAlerts />
          </div>
          
          <div className="mt-8">
            <TabGroup>
              <TabList>
                <Tab>Market Overview</Tab>
                <Tab>Portfolio</Tab>
                <Tab>Trading Bot</Tab>
                <Tab>Arbitrage</Tab>
                <Tab>Analytics</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <MarketOverview />
                </TabPanel>
                <TabPanel>
                  <PortfolioTracker />
                </TabPanel>
                <TabPanel>
                  <TradingBot />
                </TabPanel>
                <TabPanel>
                  <ArbitrageOpportunities />
                </TabPanel>
                <TabPanel>
                  <ItemAnalytics />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;