import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useUser,
} from "@clerk/clerk-react";
import useGetKey from "./hooks/useGetKey";

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
        <div className="flex items-center justify-center">
          <SignOutButton />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col">
          <SignInButton />
          <p className="text-center">
            Please sign in to get access to the prompt refiner
          </p>
        </div>
      </SignedOut>
    </>
  );
}

export default App;
