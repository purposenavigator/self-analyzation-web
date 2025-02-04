import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

interface Value {
  id: number;
  name: string;
  importance: 'high' | 'medium' | 'low';
}

interface DiscoveredValuesProps {
  values: Value[];
}

export function DiscoveredValues({ values }: DiscoveredValuesProps) {
  const importanceColor = {
    high: 'error',
    medium: 'warning',
    low: 'success',
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
              key={value.id}
              label={value.name}
              color={importanceColor[value.importance]}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
