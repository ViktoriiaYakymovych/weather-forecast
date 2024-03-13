import { Header, Link } from "./HeaderNav.styled";

const HeaderNav = () => {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default HeaderNav;
