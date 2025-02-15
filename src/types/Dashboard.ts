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

export interface AttributeEvaluation {
  attribute: string;
  label: Label;
}

export interface LabeledAttribute {
  attribute: string;
  explanation: string;
  mean: number;
  count: number;
  relevance_score: number;
  label: Label;
}

export interface DiscoveredValuesProps {
  values: AttributeEvaluation[];
}

export type ChipColor = 'error' | 'warning' | 'success';
export type ChipColorObject = { color: ChipColor; name: string };
export type ChipColorMap = Record<Label, ChipColorObject>;
