import { NavLink } from "react-router-dom";

const Header = () => {
  const classes = "inline-block py-3 px-6";
  const items = [
    { path: "/", label: "Home", title: "Home page" },
    { path: "/fav", label: "Fav", title: "Fav page" },
    { path: "/about", label: "About", title: "" },
  ];

  return (
    <header>
      <nav className="mb-4 text-center">
        {items.map((item) => {
          return (
            <NavLink
              key={item.label}
              to={item.path}
              state={{ title: item.title }}
              className={({ isActive }) => `${classes} ${isActive ? "text-blue-700" : undefined}`}
            >
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export { Header };
