import { getData } from '@/lib/api';
import { AttributeExplanation, Label } from '@/types/Analyze';
import { useEffect, useState } from 'react';

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

const getAttributeAndExplanationObjectArray = (input: string) => {
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

const getSummary = (input: string) => {
  return input
    .split('\n')
    .filter((s) => s !== '')
    .filter((s) => !/^\d+\./.test(s))
    .map((s) => s.trim());
};

const useFetchAnalysis = (id: string) => {
  const [attributeExplanations, setAttributeExplanations] =
    useState<AttributeExplanation[]>();
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getData<string>(`/analyze/${id}`)
      .then((response) => {
        setAttributeExplanations(
          getAttributeAndExplanationObjectArray(response),
        );
        setSummary(getSummary(response).join(' '));
        setLoading(false);
        return response;
      })
      .catch((error) => {
        alert(error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  return { attributeExplanations, loading, error, summary };
};

export default useFetchAnalysis;
