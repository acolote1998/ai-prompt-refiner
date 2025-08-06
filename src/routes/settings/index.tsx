import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";
import Settings from "../../components/Settings";

export const Route = createFileRoute("/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="font-semibold text-3xl text-center mb-2 underline">
        Settings
      </h1>
      <SignedIn>
        <Settings />
      </SignedIn>
      <SignedOut>
        <p>Please sign in to see this page</p>
      </SignedOut>
    </div>
  );
}
