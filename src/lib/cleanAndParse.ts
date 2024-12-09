import { pipe } from './pipe';

export type Answer = {
  title: string;
  answer: string;
};

const ensureString = (input: string | undefined): string => {
  return input || '';
};

const stripBackticks = (input: string): string => {
  return input.replace(/`/g, '');
};

const removeJsonKeyword = (input: string): string => {
  return input.replace(/json/g, '');
};

const parseToAnswerOrReturnInput = (input: string): Answer[] | string => {
  try {
    const result = JSON.parse(input);
    return result as Answer[];
  } catch (error) {
    console.error('Failed to parse string to JSON:', error);
    return input;
  }
};

export const cleanAndParse = pipe(
  ensureString,
  stripBackticks,
  removeJsonKeyword,
  parseToAnswerOrReturnInput,
);
