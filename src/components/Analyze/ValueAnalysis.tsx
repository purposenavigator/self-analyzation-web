import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AttributeAndExplanation } from '@/types/Analyze';

interface ValueAnalysisProps {
  attributeAndExplanations: AttributeAndExplanation[];
}

export function ValueAnalysis({
  attributeAndExplanations,
}: ValueAnalysisProps) {
  const importanceColor = {
    high: 'error',
    medium: 'warning',
    low: 'success',
  } as const;

  return (
    <div>
      {attributeAndExplanations.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Typography>{item.attribute}</Typography>
              <Chip
                label={`${item.evaluation.label} (${item.evaluation.percentage})`}
                color={importanceColor[item.evaluation.label]}
                size="small"
              />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              {item.explanation}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default ValueAnalysis;
