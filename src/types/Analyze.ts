export type AttributeAndExplanation = {
  attribute: string;
  explanation: string;
  evaluation: { percentage: string; label: Label };
};

type Label = 'high' | 'medium' | 'low';
