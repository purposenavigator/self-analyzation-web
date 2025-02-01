import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export function DiscoveredValues() {
  // This array would be fetched from an API or database in a real application
  const values = [
    { id: 1, name: 'Personal Growth', importance: 'high' },
    { id: 2, name: 'Family', importance: 'high' },
    { id: 3, name: 'Creativity', importance: 'medium' },
    { id: 4, name: 'Health', importance: 'high' },
    { id: 5, name: 'Social Contribution', importance: 'medium' },
  ];

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
