'use client';

import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

import { Card, CardContent } from '@mui/material';

export function ValueRadar() {
  const data = [
    { subject: 'ワークライフバランス', value: 4.5 },
    { subject: '自己成長', value: 4.0 },
    { subject: '社会貢献', value: 3.8 },
    { subject: '創造性', value: 3.2 },
    { subject: '安定性', value: 4.2 },
    { subject: 'チャレンジ精神', value: 3.5 },
  ];

  return (
    <Card>
      <CardContent>
        <div style={{ height: 400, width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 5]} />
              <Radar
                name="価値観スコア"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
