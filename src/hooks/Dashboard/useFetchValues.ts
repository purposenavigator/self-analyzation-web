import { useEffect, useState } from 'react';
import { postData } from '@/lib/api';
import { getAttributeAndExplanationObjectArray } from '@/lib/getAttributeAndExplanationObjectArray';

type FetchedValue = { [key: string]: string };

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

const fetchAllValues = <T>(options: RequestOptions = {}): Promise<T> => {
  return postData<T>('/user_all_values', {}, options);
};

export const useFetchValues = () => {
  const [valuesArray, setValuesArray] = useState<string[]>([]);

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const values = await fetchAllValues<Array<FetchedValue>>();
        if (Array.isArray(values)) {
          const vals = values
            .flatMap((value) => Object.values(value))
            .flatMap((value) => getAttributeAndExplanationObjectArray(value))
            .map((obj) => {
              const { attribute, evaluation } = obj;
              const { label, percentage } = evaluation;
              return { attribute, label, percentage };
            });
          setValuesArray(vals);
          console.log('Values Array:', vals);
        } else {
          console.log('Fetched values are not an array:', values);
        }
      } catch (error) {
        console.error('Error fetching values:', error);
      }
    };

    fetchValues();
  }, []);

  return valuesArray;
};
