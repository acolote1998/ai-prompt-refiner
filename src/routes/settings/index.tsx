import { createFileRoute } from "@tanstack/react-router";
import Settings from "../../components/Settings";

export const Route = createFileRoute("/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="font-semibold text-3xl text-center m-2 ">Settings</h1>
      <Settings />
    </div>
  );
}
