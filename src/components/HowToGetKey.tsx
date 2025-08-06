const HowToGetKey = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl">How to get a Gemini Key</h1>
      <ul>
        <li>
          <a href="https://aistudio.google.com/welcome" target="_blank">
            Go to Google AI Studio or click here
          </a>
        </li>
        <li>Click "Sign in to Google AI Studio"</li>
        <li>Sign in with your desired Google account</li>
        <li>Click "Get API key"</li>
        <li>Click "Create API key"</li>
        <li>Copy the API key</li>
        <li>Paste in the white input below</li>
        <li>Click "Save key"</li>
      </ul>
    </div>
  );
};

export default HowToGetKey;
