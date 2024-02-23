import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
