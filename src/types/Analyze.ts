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

export interface AnalyzeSummary {
  analysis_summary_text: string;
  analyzed_values: AttributeExplanation[];
}
