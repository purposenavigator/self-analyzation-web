import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { ChipColorMap, DiscoveredValuesProps } from '@/types/Dashboard';

export function DiscoveredValues({ values }: DiscoveredValuesProps) {
  const chipColor: ChipColorMap = {
    high: { color: 'error', name: 'High' },
    medium: { color: 'warning', name: 'Medium' },
    low: { color: 'success', name: 'Low' },
  };

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h5" component="div">
            Discovered Values
          </Typography>
        }
      />
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {values.map((value) => (
            <Chip
              key={value.attribute}
              label={`${value.attribute} (${chipColor[value.label].name})`}
              color={chipColor[value.label].color}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
