const cleanString = (input: string): string => {
  return input.replace(/^\d+\.\s*\*\*(.*?)\*\*$/, '$1');
};
const getAttributeAndExplanationObject = (
  _attribute: string,
  _explanation: string,
  _label: string,
  _percentage: string,
) => {
  const attribute = cleanString(_attribute.trim());
  const explanation = _explanation.trim();
  const label = _label.trim() as Label;
  const evaluation = { label, percentage: _percentage.trim() };
  return { attribute, explanation, evaluation };
};

export const getAttributeAndExplanationObjectArray = (input: string) => {
  return input
    .split('\n')
    .filter((s) => s.trim() !== '') // Remove empty or whitespace-only lines
    .filter((s) => /^\d+\./.test(s.trim())) // Match lines starting with a number followed by a period
    .map((s) => s.trim()) // Trim whitespace
    .map((s) => {
      const [attribute, explanation, evaluation] = s
        .split(' - ')
        .map((part) => part.trim());
      if (!attribute || !explanation || !evaluation) {
        throw new Error(`Invalid input format: ${s}`);
      }

      const [label, percentage] = evaluation
        .split(':')
        .map((part) => part.replace(/[{}]/g, '').trim());
      if (!label || !percentage) {
        throw new Error(`Invalid evaluation format: ${evaluation}`);
      }

      return getAttributeAndExplanationObject(
        attribute,
        explanation,
        label,
        percentage,
      );
    });
};
