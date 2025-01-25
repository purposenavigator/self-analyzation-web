'use client';
import Header from '@/components/Header';
import useFetchAnalysis from '@/hooks/useFetchAnalyze';
import useReceiveQuestionByRoute from '@/hooks/useReceiveQuestionByRoute';
import React from 'react';
import { Card, CardHeader, CardContent, Tabs, Tab, Box } from '@mui/material';
import AnalysisSummaryCard from '@/components/Analyze/AnalysisSummaryCard';
import { ValueAnalysis } from '@/components/Analyze/ValueAnalysis';
import { ValueRadar } from '@/components/Analyze/ValueRadar';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Analyze = () => {
  const { params } = useReceiveQuestionByRoute();
  const { attributeExplanations, summary, valueRadarData } = useFetchAnalysis(
    params?.conversation_id,
  );
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <div style={{ margin: '2rem 4rem 0' }}>
        <AnalysisSummaryCard summary={summary} />
        <Box sx={{ width: '100%', mt: 4 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Value Analysis" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
              }}
            >
              <Card>
                <CardHeader title="Detailed Value Analysis" />
                <CardContent>
                  <ValueAnalysis
                    attributeExplanations={attributeExplanations || []}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader title="Value Radar Chart" />
                <CardContent>
                  <ValueRadar data={valueRadarData} />
                </CardContent>
              </Card>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Analyze;
