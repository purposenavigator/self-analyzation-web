'use client';
import Accordion from '@/components/Analyze/Analyze';
import Header from '@/components/Header';
import useFetchAnalysis from '@/hooks/useFetchAnalyze';
import useReceiveQuestionByRoute from '@/hooks/useReceiveQuestionByRoute';
import { AttributeAndExplanation } from '@/types/Analyze';
import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';

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

const ValueCard = ({ attribute, explanation }: AttributeAndExplanation) => {
  return (
    <div className="block bg-gray-100 shadow-md rounded-lg overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-200">
      <div className="p-4">
        <h4 className="text-xl font-bold text-gray-900 mb-2">{attribute}</h4>
        <div className="mb-2">
          <p className="font-semibold text-gray-700">{explanation}</p>
        </div>
      </div>
    </div>
  );
};

const renderValueCards = (
  attributeAndExplanations: AttributeAndExplanation[] | undefined,
) => {
  if (!attributeAndExplanations) return null;
  return attributeAndExplanations.map((item, index) => (
    <ValueCard key={index} {...item} />
  ));
};

const Analyze = () => {
  const { params } = useReceiveQuestionByRoute();
  const { attributeAndExplanations, summary } = useFetchAnalysis(
    params?.conversation_id,
  );

  return (
    <div>
      <Header />
      <div style={{ margin: '2rem 4rem 0' }}>
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
      </div>
      ;
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-16 mt-8">
        {renderValueCards(attributeAndExplanations)}
      </div>
      <Accordion />
    </div>
  );
};

export default Analyze;
//<ValuesSummary />
//      <KeyValuesIdentified />
//      <Visualization />
//      <ContextualInsights />
//      <NextSteps />
