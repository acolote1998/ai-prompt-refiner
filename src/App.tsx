import {
  getApiKeyByUserId,
  updateApiKeyByUserId,
} from "./supabaseCalls/useSupabase";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useUser,
} from "@clerk/clerk-react";
function App() {
  const { user } = useUser();
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-3xl">Prompt Refiner</h1>
        <SignedIn>
          <p
            onClick={() => {
              if (user) getApiKeyByUserId(user?.id);
            }}
          >
            GET KEY
          </p>
          <p
            onClick={() => {
              if (user) updateApiKeyByUserId(user.id, "usernewkey");
            }}
          >
            UPDATE KEY
          </p>
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </>
  );
}

export default App;
