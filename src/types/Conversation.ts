import { Payload, ResponseObject } from './Questions';

export type UseSubmitTextReturn = {
  submitText: (
    payload: Payload,
    resetText: () => void,
  ) => Promise<ResponseObject | void>;
  loading: boolean;
  error: string | null;
};
