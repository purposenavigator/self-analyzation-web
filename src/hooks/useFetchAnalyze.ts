import { getData } from '@/lib/api';
import { AttributeExplanation } from '@/types/Analyze';
import { useEffect, useState } from 'react';
import { ValueRadarType } from '@/types/ValueRadar';
import { getAttributeAndExplanationObjectArray } from '@/lib/getAttributeAndExplanationObjectArray';

const getSummary = (input: string) => {
  return input
    .split('\n')
    .filter((s) => s !== '')
    .filter((s) => !/^\d+\./.test(s))
    .map((s) => s.trim());
};

const getJoinedSummary = (input: string): string => {
  return getSummary(input).join(' ');
};

const convertToValueRadarType = (
  item: AttributeExplanation,
): ValueRadarType => {
  const percentage = parseFloat(item.evaluation.percentage.replace('%', ''));
  return {
    attribute: item.attribute,
    value: (percentage / 100) * 5,
  };
};

const useFetchAnalysis = (id: string) => {
  const [attributeExplanations, setAttributeExplanations] =
    useState<AttributeExplanation[]>();
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [valueRadarData, setValueRadarData] = useState<ValueRadarType[]>([]);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getData<string>(`/analyze/${id}`)
      .then((response) => {
        const attributeExplanationArray =
          getAttributeAndExplanationObjectArray(response);
        setAttributeExplanations(attributeExplanationArray);
        setSummary(getJoinedSummary(response));
        setValueRadarData(
          attributeExplanationArray.map(convertToValueRadarType),
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

  return { attributeExplanations, loading, error, summary, valueRadarData };
};

export default useFetchAnalysis;
