import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useUser,
} from "@clerk/clerk-react";
import useGetKey from "./hooks/useGetKey";
import PromptRefiner from "./components/PromptRefiner";

function App() {
  const { user } = useUser();
  const { data: keyRowFromDb } = useGetKey(user?.id);
  return (
    <>
      <SignedIn>
        {!keyRowFromDb?.key && (
          <p className="text-center">
            Please go to the settings page and set up your Gemini Key to get
            started
          </p>
        )}
        {keyRowFromDb?.key && <PromptRefiner geminiKey={keyRowFromDb.key} />}
        <div className="flex items-center justify-center"></div>
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col">
          <p className="text-center">
            Please sign in to get access to the prompt refiner
          </p>
        </div>
      </SignedOut>
    </>
  );
}

export default App;
