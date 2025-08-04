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
      <p
        onClick={() => {
          navigate({ to: "/settings" });
        }}
      >
        Settings
      </p>
    </div>
  );
};

export default Navbar;
