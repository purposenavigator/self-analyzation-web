interface ResponseProps {
  item: ResponseBody;
}

const Response = ({ item }: ResponseProps) => {
  return (
    <div className="mx-12 mt-12 mb-24">
      <div className="mb-2 text-lg font-semibold">Summary</div>
      <text className="block mb-4 text-xl">{item.summary_response}</text>

      <div className="mb-2 text-lg font-semibold">Question</div>
      <text className="block mb-4 text-xl">{item.question_response}</text>

      <div className="mb-2 text-lg font-semibold">Analysis</div>
      <text className="block text-xl">{item.analyze_response}</text>
    </div>
  );
};

export default Response;
