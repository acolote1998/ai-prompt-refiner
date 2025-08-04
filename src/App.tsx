import Settings from "./components/Settings";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";
function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-3xl">Prompt Refiner</h1>
        <SignedIn>
          <Settings />
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
