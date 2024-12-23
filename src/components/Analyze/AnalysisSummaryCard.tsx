import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';

interface AnalysisSummaryCardProps {
  summary: string;
}

const AnalysisSummaryCard = ({ summary }: AnalysisSummaryCardProps) => {
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h6" component="div">
            Analysis Summary
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AnalysisSummaryCard;
