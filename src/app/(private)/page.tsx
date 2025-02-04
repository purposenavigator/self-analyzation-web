'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { RecentActivity } from '../../components/dashboard/recent-activity';
import { DiscoveredValues } from '../../components/dashboard/discoveredValues'; // Import the DiscoveredValues component
import { HowToUse } from '../../components/dashboard/howToUse'; // Import the HowToUse component
import HeaderFooter from '@/components/HeaderFooter';
import { useFetchValues } from '@/hooks/Dashboard/useFetchValues';

function DashboardPage() {
  useFetchValues(); // Execute the useFetchValues hook

  const values = [
    { id: 1, name: 'Personal Growth', importance: 'high' },
    { id: 2, name: 'Family', importance: 'high' },
    { id: 3, name: 'Creativity', importance: 'medium' },
    { id: 4, name: 'Health', importance: 'high' },
    { id: 5, name: 'Social Contribution', importance: 'medium' },
  ];

  return (
    <div className="flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <Typography variant="h4" component="h2">
            Welcome
          </Typography>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <DiscoveredValues values={values} /> {/* Pass values as prop */}
          <HowToUse /> {/* Use the HowToUse component */}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader
              title="Recent activity"
              subheader="Your recent conversations and discoveries"
            />
            <CardContent>
              <RecentActivity />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const MainPage = () => {
  return (
    <HeaderFooter>
      <DashboardPage />
    </HeaderFooter>
  );
};

export default MainPage;
