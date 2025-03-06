import { useEffect, useState } from 'react';
import { postData } from '@/lib/api';
import { AttributeEvaluation, LabeledAttribute } from '@/types/Dashboard';

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

const fetchAllValues = <T>(options: RequestOptions = {}): Promise<T> => {
  return postData<T>('/user_all_values', {}, options);
};

export const useFetchAttributeEvaluations = () => {
  const [attributeEvaluations, setAttributeEvaluations] = useState<
    AttributeEvaluation[]
  >([]);

  useEffect(() => {
    const fetchAttributeEvaluations = async () => {
      try {
        const analyzeSummaries =
          await fetchAllValues<Array<LabeledAttribute>>();
        if (Array.isArray(analyzeSummaries)) {
          const evaluations = analyzeSummaries.map(({ attribute, label }) => ({
            attribute,
            label,
          }));
          setAttributeEvaluations(evaluations);
          console.log('Attribute Evaluations:', evaluations);
        } else {
          console.log('Fetched values are not an array:', analyzeSummaries);
        }
      } catch (error) {
        console.error('Error fetching attribute evaluations:', error);
      }
    };

    fetchAttributeEvaluations();
  }, []);

  return attributeEvaluations;
};
