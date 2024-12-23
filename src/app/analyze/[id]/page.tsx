'use client';
import Header from '@/components/Header';
import useFetchAnalysis from '@/hooks/useFetchAnalyze';
import useReceiveQuestionByRoute from '@/hooks/useReceiveQuestionByRoute';
import { AttributeAndExplanation } from '@/types/Analyze';
import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Box,
} from '@mui/material';
import AnalysisSummaryCard from '@/components/Analyze/AnalysisSummaryCard';
// import { ValueAnalysis } from '@/pagerecommend/value-analysis';
// import { ValueRadar } from '@/pagerecommend/value-radar';

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
  const { attributeAndExplanations, summary } = useFetchAnalysis(
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
              <Tab label="価値観分析" />
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
                <CardHeader title="価値観の詳細分析" />
                <CardContent>
                  {/* <ValueAnalysis /> */}
                  <Typography>Value Analysis Content Here</Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader title="価値観レーダーチャート" />
                <CardContent>
                  {/* <ValueRadar /> */}
                  <Typography>Value Radar Chart Here</Typography>
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
