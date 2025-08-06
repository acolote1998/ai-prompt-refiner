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
    <div className="flex items-center justify-center gap-3">
      <p
        onClick={() => {
          navigate({ to: "/" });
        }}
      >
        Home
      </p>
      <SignedIn>
        <p
          onClick={() => {
            navigate({ to: "/settings" });
          }}
        >
          Settings
        </p>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Navbar;
