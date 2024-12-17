import { getData } from '@/lib/api';
import { useEffect, useState } from 'react';

type AttributeAndExplanation = {
  attribute: string;
  explanation: string;
};

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
  return input
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => s !== '')
    .map((s) => {
      const [attribute, explanation] = s.split('-');
      return getAttributeAndExplanationObject(attribute, explanation);
    });
};

const useFetchAnalysis = (id: string) => {
  const [attributeAndExplanations, setAttributeAndExplanations] =
    useState<AttributeAndExplanation[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log(id, 'id');

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getData<string>(`/analyze/${id}`)
      .then((response) => {
        setAttributeAndExplanations(
          getAttributeAndExplanationObjectArray(response),
        );
        setLoading(false);
        return response;
      })
      .catch((error) => {
        alert(error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  return { attributeAndExplanations, loading, error };
};

export default useFetchAnalysis;
