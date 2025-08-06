import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignInButton,
} from "@clerk/clerk-react";
import { useNavigate } from "@tanstack/react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const navItemStyles =
    "cursor-pointer text-green-500 hover:text-green-300 transition-colors";

  return (
    <nav className="w-full bg-gray-800 text-green-500 shadow-md py-2 px-6 flex items-center justify-between">
      <div
        className="text-lg font-bold  cursor-pointer"
        onClick={() => navigate({ to: "/" })}
      >
        Prompt Refiner
      </div>

      <div className="flex items-center gap-6 text-base font-medium">
        <p onClick={() => navigate({ to: "/" })} className={navItemStyles}>
          Home
        </p>

        <SignedIn>
          <p
            onClick={() => navigate({ to: "/settings" })}
            className={navItemStyles}
          >
            Settings
          </p>
          <SignOutButton>
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              Sign out
            </button>
          </SignOutButton>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <button className="text-gray-400 hover:text-green-500 transition-colors">
              Sign in
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
