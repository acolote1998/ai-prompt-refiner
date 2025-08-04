import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navbar />
      <h1 className="font-bold text-3xl text-center">Prompt Refiner</h1>
      <Outlet />
    </>
  );
}
