export type Label = 'high' | 'medium' | 'low';

export interface Evaluation {
  label: Label;
  percentage: string;
}

export interface AttributeExplanation {
  attribute: string;
  explanation: string;
  evaluation: Evaluation;
}
