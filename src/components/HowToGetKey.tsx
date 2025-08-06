const HowToGetKey = () => {
  return (
    <div className="flex flex-col m-2 gap-1 p-2 bg-white rounded-2xl shadow max-w-sm mx-auto">
      <h1 className="text-xl font-semibold text-gray-800">
        How to Get a Gemini API Key
      </h1>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li>
          <a
            href="https://aistudio.google.com/welcome"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Go to Google AI Studio
          </a>
        </li>
        <li>
          Click{" "}
          <span className="font-medium">"Sign in to Google AI Studio"</span>
        </li>
        <li>Sign in with your desired Google account</li>
        <li>
          Click <span className="font-medium">"Get API key"</span>
        </li>
        <li>
          Click <span className="font-medium">"Create API key"</span>
        </li>
        <li>Copy the API key</li>
        <li>Paste it in the white input below</li>
        <li>
          Click <span className="font-medium">"Save key"</span>
        </li>
      </ol>
    </div>
  );
};

export default HowToGetKey;
