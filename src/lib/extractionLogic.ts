export function extractHtml(inputText: string): string {
  const htmlContent = inputText.match(/```html(.*?)```/s);
  if (htmlContent) {
    return htmlContent[1].trim();
  }
  return inputText;
}

export const extractBulletPoints = (input: string) => {
  const regex = /(\d+\.\s\*\*.*?\*\*)/g;

  const matches = input.split(regex).filter(Boolean);

  const result = [];
  for (let i = 0; i < matches.length; i += 2) {
    result.push({
      title: matches[i].trim(),
      content: (matches[i + 1] || '').trim(),
    });
  }
  return result;
};
