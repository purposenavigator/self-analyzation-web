import { Label } from './Label';

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
