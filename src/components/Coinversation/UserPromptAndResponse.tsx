interface ResponseProps {
  item: ResponseBody;
}

const UserPromptAndResponse = ({ item }: ResponseProps) => {
  return (
    <div className="mx-12 mt-12 mb-24">
      <text className="block mb-8 text-xl border py-8 px-4 w-1/2 ml-auto bg-gray-200 rounded-md">
        {item.user_prompt}
      </text>

      <div className="mb-2 text-lg font-semibold">Summary</div>
      <text className="block mb-4 text-xl">{item.summary_response}</text>

      <div className="mb-2 text-lg font-semibold">Question</div>
      <text className="block mb-4 text-xl">{item.question_response}</text>

      <div className="mb-2 text-lg font-semibold">Analysis</div>
      <div
        dangerouslySetInnerHTML={{
          __html: item.analyze_response.replace(/```html|```/g, ''),
        }}
      />
    </div>
  );
};

export default UserPromptAndResponse;
