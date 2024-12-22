import { getData } from '@/lib/api';
import { AttributeAndExplanation } from '@/types/Analyze';
import { useEffect, useState } from 'react';

const cleanString = (input: string): string => {
  return input.replace(/^\d+\.\s*\*\*(.*?)\*\*$/, '$1');
};
const getAttributeAndExplanationObject = (
  _attribute: string,
  _explanation: string,
) => {
  const attribute = cleanString(_attribute.trim());
  const explanation = _explanation.trim();
  return { attribute, explanation };
};

const getAttributeAndExplanationObjectArray = (input: string) => {
  console.log(input.split('\n'));
  return input
    .split('\n')
    .filter((s) => s !== '')
    .filter((s) => /^\d+\./.test(s))
    .map((s) => s.trim())
    .map((s) => {
      const [attribute, explanation] = s.split('-');
      return getAttributeAndExplanationObject(attribute, explanation);
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
  const [attributeAndExplanations, setAttributeAndExplanations] =
    useState<AttributeAndExplanation[]>();
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getData<string>(`/analyze/${id}`)
      .then((response) => {
        setAttributeAndExplanations(
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

  return { attributeAndExplanations, loading, error, summary };
};

export default useFetchAnalysis;
