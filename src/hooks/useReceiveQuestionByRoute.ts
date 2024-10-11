import { Question } from '@/types/Questions';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useReceiveQuestionByRoute = () => {
  const searchParams = useSearchParams();
  const [params, setParams] = useState<Question | undefined>();

  useEffect(() => {
    const paramsObject = Object.fromEntries(searchParams.entries()) as Question;
    setParams(paramsObject);
  }, [searchParams]);

  return { params };
};

export default useReceiveQuestionByRoute;
