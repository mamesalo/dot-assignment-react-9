import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    {
      label: "Features",
      to: "features",
    },
    {
      label: "Enterprise",
      to: "enterprise",
    },
    {
      label: "Support",
      to: "support",
    },
    {
      label: "Home",
      to: "home",
    },
  ];

  return (
    <header className="py-2 px-10 flex justify-between border-b-2 border-gray-500">
      <h1 className="font-semibold text-lg">Company name</h1>
      <nav>
        <ul className="flex gap-5">
          <li>
            <NavLink
              className="text-lg underline underline-offset-4 hover:text-blue-500"
              to="features"
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-lg underline underline-offset-4 hover:text-blue-500"
              to="enterprise"
            >
              Enterprise
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-lg underline underline-offset-4 hover:text-blue-500"
              to="support"
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-lg underline underline-offset-4 hover:text-blue-500"
              to="home"
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
