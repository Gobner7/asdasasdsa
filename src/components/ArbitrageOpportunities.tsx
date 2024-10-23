import React from 'react';
import { Card, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge, Button } from '@tremor/react';
import { useArbitrageData } from '../hooks/useArbitrageData';

const ArbitrageOpportunities = () => {
  const { opportunities, isLoading } = useArbitrageData();

  return (
    <Card>
      <Title>Live Arbitrage Opportunities</Title>
      <Table className="mt-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Item</TableHeaderCell>
            <TableHeaderCell>Buy Market</TableHeaderCell>
            <TableHeaderCell>Sell Market</TableHeaderCell>
            <TableHeaderCell>Price Difference</TableHeaderCell>
            <TableHeaderCell>Profit Margin</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {opportunities.map((opp) => (
            <TableRow key={opp.id}>
              <TableCell>{opp.itemName}</TableCell>
              <TableCell>
                ${opp.buyPrice} on {opp.buyMarket}
              </TableCell>
              <TableCell>
                ${opp.sellPrice} on {opp.sellMarket}
              </TableCell>
              <TableCell>${(opp.sellPrice - opp.buyPrice).toFixed(2)}</TableCell>
              <TableCell>
                <Badge color="green">
                  {((opp.sellPrice - opp.buyPrice) / opp.buyPrice * 100).toFixed(1)}%
                </Badge>
              </TableCell>
              <TableCell>
                <Button size="xs" variant="secondary">
                  Execute Trade
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ArbitrageOpportunities;