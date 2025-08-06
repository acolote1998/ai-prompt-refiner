import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignInButton,
} from "@clerk/clerk-react";
import { useNavigate } from "@tanstack/react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-gray-800 text-green-500 shadow-md py-2 px-6 flex items-center justify-between">
      <div
        className="text-lg font-bold  cursor-pointer"
        onClick={() => navigate({ to: "/" })}
      >
        Prompt Refiner
      </div>

      <div className="flex items-center gap-6 text-base font-medium">
        <p
          style={{ color: "lightgreen" }}
          onClick={() => navigate({ to: "/" })}
          className={"cursor-pointer"}
        >
          Home
        </p>

        <SignedIn>
          <p
            style={{ color: "lightgreen" }}
            onClick={() => navigate({ to: "/settings" })}
            className={"cursor-pointer"}
          >
            Settings
          </p>
          <SignOutButton>
            <button className="cursor-pointer text-gray-400 hover:text-red-500 transition-colors">
              Sign out
            </button>
          </SignOutButton>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <button className="cursor-pointer text-gray-400 hover:text-green-500 transition-colors">
              Sign in
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
