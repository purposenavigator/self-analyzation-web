'use client';
import Header from '@/components/Header';
import useFetchAnalysis from '@/hooks/useFetchAnalyze';
import useReceiveQuestionByRoute from '@/hooks/useReceiveQuestionByRoute';
import React from 'react';

/*
[Header]
→ Your Values Summary

[Key Values Identified]
#family #creativity #personal growth

[Visualization]
(Interactive tree, wheel, or word cloud)

[Contextual Insights]

Family: “… based on [conversation excerpt].”
Creativity: “… inferred from [conversation excerpt].”
[Next Steps]
[Save Values] [Export] [Start Another Conversation]
*/

const Analyze = () => {
  const { params } = useReceiveQuestionByRoute();
  console.log(params?.conversation_id);
  useFetchAnalysis(params?.conversation_id);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Analyze;
//<ValuesSummary />
//      <KeyValuesIdentified />
//      <Visualization />
//      <ContextualInsights />
//      <NextSteps />
